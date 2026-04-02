// ============================================================
//  TCS NQT PREP PLATFORM — app.js
//  Handles: routing, rendering, code execution, test judging
// ============================================================

// ── STATE ──────────────────────────────────────────────────
let currentQ   = null;
let activeTab  = 'code';
let activeTcTab = 'custom';
let tcResults  = [];
let solved     = new Set(JSON.parse(localStorage.getItem('nqt_solved') || '[]'));
let pyodide    = null;
let pyLoading  = true;

// Build flat question list from all loaded topic files
// Use typeof guard so missing/unloaded files don't crash the app
const ALL_QUESTIONS = [
  typeof Q_ARRAYS_1  !== 'undefined' ? Q_ARRAYS_1  : null,
  typeof Q_ARRAYS_2  !== 'undefined' ? Q_ARRAYS_2  : null,
  typeof Q_ARRAYS_3  !== 'undefined' ? Q_ARRAYS_3  : null,
  typeof Q_ARRAYS_4  !== 'undefined' ? Q_ARRAYS_4  : null,
  typeof Q_ARRAYS_5  !== 'undefined' ? Q_ARRAYS_5  : null,
  typeof Q_ARRAYS_6  !== 'undefined' ? Q_ARRAYS_6  : null,
  typeof Q_ARRAYS_7  !== 'undefined' ? Q_ARRAYS_7  : null,
  typeof Q_ARRAYS_8  !== 'undefined' ? Q_ARRAYS_8  : null,
  typeof Q_ARRAYS_9  !== 'undefined' ? Q_ARRAYS_9  : null,
  typeof Q_ARRAYS_10 !== 'undefined' ? Q_ARRAYS_10 : null,
  typeof Q_ARRAYS_11 !== 'undefined' ? Q_ARRAYS_11 : null,
  typeof Q_ARRAYS_12 !== 'undefined' ? Q_ARRAYS_12 : null,
  typeof Q_ARRAYS_13 !== 'undefined' ? Q_ARRAYS_13 : null,
  typeof Q_ARRAYS_14 !== 'undefined' ? Q_ARRAYS_14 : null,
  typeof Q_ARRAYS_15 !== 'undefined' ? Q_ARRAYS_15 : null,
  typeof Q_ARRAYS_16 !== 'undefined' ? Q_ARRAYS_16 : null,
  typeof Q_ARRAYS_17 !== 'undefined' ? Q_ARRAYS_17 : null,
  typeof Q_ARRAYS_18 !== 'undefined' ? Q_ARRAYS_18 : null,
  typeof Q_ARRAYS_19 !== 'undefined' ? Q_ARRAYS_19 : null,
  typeof Q_ARRAYS_20 !== 'undefined' ? Q_ARRAYS_20 : null,
  // When you add a new topic file, register its constants here:
  // typeof Q_STRINGS_1 !== 'undefined' ? Q_STRINGS_1 : null,
].filter(Boolean);

// ── PYTHON EXECUTOR (LOCAL PYODIDE) ────────────────────────
async function initPy() {
  if (pyodide) return;
  try {
    pyodide = await loadPyodide();
    pyLoading = false;
    updateRunButtons();
    console.log("Pyodide Ready");
  } catch (e) {
    console.error("Pyodide Load Fail:", e);
  }
}

function updateRunButtons() {
    document.querySelectorAll('.btn-run').forEach(btn => {
        btn.disabled = false;
        btn.innerHTML = '<span>▶</span> Run';
    });
}

async function runPython(code, stdin) {
  if (!pyodide) return 'ERROR: Interpreter loading...';
  
  try {
    // Reset standard input
    pyodide.runPython(`
import sys
import io
sys.stdin = io.StringIO("""${stdin}""")
sys.stdout = io.StringIO()
    `);
    
    // Run user code
    await pyodide.runPythonAsync(code);
    
    // Capture output
    const stdout = pyodide.runPython("sys.stdout.getvalue()");
    return stdout.trim();
  } catch (e) {
    return 'ERROR: ' + e.message;
  }
}

// ── SYNTAX HIGHLIGHT ───────────────────────────────────────
function hl(code) {
  if (!code) return '';
  const KW = ['def','return','if','else','elif','for','while','in','not','and','or',
             'import','from','break','continue','pass','True','False','None','class',
             'lambda','try','except','finally','with','as','raise','is','global'];
  const FN = ['print','input','int','str','float','list','dict','set','tuple','len',
             'range','enumerate','map','filter','sum','max','min','sorted','zip',
             'Counter','append','split','join','strip','lower','upper'];

  // 1. Escape HTML
  let s = code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  
  // 2. Protect Strings & Comments
  const tokens = [];
  s = s.replace(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(#[^\n]*)/g, (m, str, cm) => {
    const id = `##TOK${tokens.length}##`;
    tokens.push(`<span class="${str ? 'st' : 'cm'}">${m}</span>`);
    return id;
  });

  // 3. Highlight numbers and words in ONE PASS to avoid double-wrapping
  s = s.replace(/\b([a-zA-Z_]\w*|\d+(?:\.\d+)?)\b/g, (w) => {
    if (KW.includes(w)) return `<span class="kw">${w}</span>`;
    if (FN.includes(w)) return `<span class="fn">${w}</span>`;
    if (/^\d/.test(w)) return `<span class="nm">${w}</span>`;
    return w;
  });

  // 4. Restore tokens
  tokens.forEach((t, i) => s = s.replace(`##TOK${i}##`, t));
  return s;
}

// ── LOCAL STORAGE HELPERS ──────────────────────────────────
const codeKey   = id => `nqt_code_${id}`;
const saveCode  = (id, v) => localStorage.setItem(codeKey(id), v);
const loadCode  = id => localStorage.getItem(codeKey(id)) || '';

// ── DASHBOARD ──────────────────────────────────────────────
function showDashboard() {
  currentQ = null;
  renderSidebar();

  try {
  const topicCards = TOPICS.map(t => `
    <div class="topic-card" style="border-color:${t.color}33">
      <div class="topic-icon">${t.icon}</div>
      <div class="topic-name" style="color:${t.color}">${t.name}</div>
      <div class="topic-count">${t.questionFiles.length} questions</div>
    </div>`).join('');

  const qCards = ALL_QUESTIONS.map(q => {
    const diff = (q.difficulty || 'Medium').toLowerCase();
    const isSolved = solved.has(q.id);
    return `
    <div class="q-card" onclick="openQ('${q.id}')" style="${isSolved ? 'border-color:rgba(16,255,176,0.2)' : ''}">
      <div class="q-card-meta">
        <span class="q-card-id">#${q.id}</span>
        <span class="badge ${diff}">${q.difficulty || 'Medium'}</span>
        ${isSolved ? '<span style="color:var(--green);font-size:.72rem;margin-left:auto;font-weight:800">✓ Solved</span>' : ''}
      </div>
      <div class="q-card-title">${q.title}</div>
      <div class="q-card-cat">📁 ${q.topic}</div>
    </div>`;
  }).join('');

  document.getElementById('main').innerHTML = `
    <div class="dash">
      <div class="hero">
        <div class="hero-eyebrow">TCS NQT 2026 Preparation</div>
        <div class="hero-title">Master Coding<br>with <span class="hl">Real Python</span></div>
        <div class="hero-sub">Arrays, Strings, DP &amp; more. Runs in your browser — no setup needed. Built for TCS Digital, Ninja &amp; Prime.</div>
        <div class="stats-row">
          <div class="stat-box">
             <div class="sk">Problems</div>
             <div class="sv" style="color:var(--cyan)">${ALL_QUESTIONS.length}</div>
          </div>
          <div class="stat-box">
             <div class="sk">Solved</div>
             <div class="sv" style="color:var(--green)">${solved.size}</div>
          </div>
          <div class="stat-box">
             <div class="sk">Topics</div>
             <div class="sv" style="color:var(--violet)">${TOPICS.length}</div>
          </div>
        </div>
      </div>

      <div class="sec-heading">🎯 Topics</div>
      <div class="topics-grid">${topicCards}</div>

      <div class="sec-heading">📋 All Problems</div>
      <div class="qlist">${qCards}</div>
    </div>`;
  } catch(e) {
    console.error('showDashboard error:', e);
    document.getElementById('main').innerHTML = `<div style="padding:40px;color:var(--red);font-family:var(--mono)">Error loading dashboard: ${e.message}</div>`;
    return;
  }
}

// ── QUESTION VIEW ──────────────────────────────────────────
function openQ(id) {
  currentQ    = ALL_QUESTIONS.find(q => q.id === id);
  activeTab   = 'code';
  activeTcTab = 'custom';
  tcResults   = [];
  if (!currentQ) return;
  renderSidebar();
  renderQ();
  updateHeader();
}

function renderQ() {
  const q = currentQ;

  const exHTML = q.examples.map((ex, i) => `
    <div class="example-card">
      <div class="tc-col"><div class="ex-lbl">Input</div><div class="ex-val">${ex.input}</div></div>
      <div class="tc-col"><div class="ex-lbl">Output</div><div class="ex-val">${ex.output}</div></div>
      ${ex.explanation ? `<div class="ex-hint">💡 ${ex.explanation}</div>` : ''}
    </div>`).join('');

  const visTC  = q.testCases.filter(tc => !tc.hidden);
  const tcTabs = visTC.map((_, i) =>
    `<div class="tc-tab ${activeTcTab===`tc${i}`?'on':''}" onclick="switchTcTab('tc${i}')" id="tctab-${i}">Case ${i+1}</div>`
  ).join('');

  const tcBodies = visTC.map((tc, i) => `
    <div class="tc-body ${activeTcTab===`tc${i}`?'on':''}" id="tcbody-${i}" style="display:${activeTcTab===`tc${i}`?'flex':'none'}">
      <div class="tc-col"><div class="tc-lbl">Input</div><textarea class="tc-in" readonly>${tc.input}</textarea></div>
      <div class="tc-col"><div class="tc-lbl">Expected</div><div class="tc-out out-idle">${tc.expected}</div></div>
      <div class="tc-col"><div class="tc-lbl">Your Output</div><div class="tc-out out-idle" id="tco-${i}">—</div></div>
    </div>`).join('');

  document.getElementById('main').innerHTML = `
    <div class="qview">

      <!-- ── LEFT: PROBLEM ── -->
      <div class="q-pane">
        <div class="q-pane-meta">
          <span class="q-id-tag">#${q.id}</span>
          <span class="badge ${(q.difficulty||'medium').toLowerCase()}">${q.difficulty||'Medium'}</span>
          <span class="q-topic-tag">📁 ${q.topic}</span>
        </div>
        <div class="q-title">${q.title}</div>
        <div class="context-box">🌍 ${q.realWorldContext}</div>
        <div class="q-desc">${q.description}</div>

        <div class="sec-lbl">Constraints</div>
        <ul style="padding-left:18px;color:var(--tx2);font-size:.9rem;line-height:1.8">${q.constraints.map(c=>`<li>${c}</li>`).join('')}</ul>

        <div class="sec-lbl">Input Format</div>
        <div class="io-block">${q.inputFormat}</div>
        <div class="sec-lbl">Output Format</div>
        <div class="io-block">${q.outputFormat}</div>
        <div class="sec-lbl">Examples</div>
        ${exHTML}
      </div>

      <!-- ── RIGHT: CODE + SOLUTIONS ── -->
      <div class="c-pane">
        <div class="c-tabs">
          <div class="tabs">
            <div class="tab ${activeTab==='code'?'on':''}"  onclick="switchTab('code')">✏️ Your Code</div>
            <div class="tab ${activeTab==='brute'?'on':''}" onclick="switchTab('brute')">🔨 Brute Force</div>
            <div class="tab ${activeTab==='opt'?'on':''}"   onclick="switchTab('opt')">⚡ Optimal</div>
          </div>
          <div class="acts">
            <button class="btn btn-clr" onclick="clearEditor()">Clear</button>
            <button class="btn btn-run" onclick="runCode()" ${pyLoading ? 'disabled' : ''}>
              ${pyLoading ? '<span class="loader"></span> Loading...' : '<span>▶</span> Run'}
            </button>
            <button class="btn btn-sub" onclick="submitAll()">Submit</button>
          </div>
        </div>

        <div class="editor-area">
          <!-- YOUR CODE -->
          <div class="tab-panel ${activeTab==='code'?'on':''}" id="panel-code">
            <textarea class="editor" id="editor" spellcheck="false"
              placeholder="# Write your Python solution here&#10;n = int(input())&#10;">${loadCode(q.id)}</textarea>
          </div>

          <!-- BRUTE FORCE -->
          <div class="tab-panel ${activeTab==='brute'?'on':''}" id="panel-brute">
            <div class="sol-view">
              <div class="sol-hdr">
                <span class="sol-hdr-title">🔨 Brute Force</span>
                <button class="btn-copy" onclick="copyCode(currentQ.bruteForce.code)">📋 Copy</button>
              </div>
              <div class="sol-meta">
                ⏱ Time: <b>${currentQ.bruteForce.time||currentQ.bruteForce.timeComplexity||'—'}</b> &nbsp;|&nbsp;
                💾 Space: <b>${currentQ.bruteForce.space||currentQ.bruteForce.spaceComplexity||'—'}</b><br/>
                <span style="color:var(--tx2);font-size:.85rem">${currentQ.bruteForce.desc||currentQ.bruteForce.approach||''}</span>
              </div>
              <div class="sol-code">${hl(currentQ.bruteForce.code)}</div>
            </div>
          </div>

          <!-- OPTIMAL -->
          <div class="tab-panel ${activeTab==='opt'?'on':''}" id="panel-opt">
            <div class="sol-view">
              <div class="sol-hdr">
                <span class="sol-hdr-title">⚡ Optimal Solution</span>
                <button class="btn-copy" onclick="copyCode(currentQ.optimal.code)">📋 Copy</button>
              </div>
              <div class="sol-meta">
                ⏱ Time: <b>${currentQ.optimal.time||currentQ.optimal.timeComplexity||'—'}</b> &nbsp;|&nbsp;
                💾 Space: <b>${currentQ.optimal.space||currentQ.optimal.spaceComplexity||'—'}</b><br/>
                <span style="color:var(--tx2);font-size:.85rem">${currentQ.optimal.desc||currentQ.optimal.approach||''}</span>
              </div>
              <div class="sol-code">${hl(currentQ.optimal.code)}</div>
            </div>
          </div>
        </div>

        <!-- TEST CASES -->
        <div class="tc-panel">
          <div class="tc-tabs">
            <div class="tc-tab ${activeTcTab==='custom'?'on':''}" onclick="switchTcTab('custom')">Custom</div>
            ${tcTabs}
          </div>
          <!-- custom -->
          <div class="tc-body ${activeTcTab==='custom'?'on':''}" id="tcbody-custom" style="display:${activeTcTab==='custom'?'flex':'none'}">
            <div class="tc-col"><div class="tc-lbl">Custom Input</div>
              <textarea class="tc-in" id="custom-in">${q.examples[0]?.input||''}</textarea></div>
            <div class="tc-col"><div class="tc-lbl">Output</div>
              <div class="tc-out out-idle" id="custom-out">Click ▶ Run</div></div>
          </div>
          ${tcBodies}
        </div>
      </div>
    </div>

    <!-- VERDICT OVERLAY -->
    <div id="veil" onclick="closeVerdict(event)">
      <div class="verdict-box">
        <div class="v-title" id="v-title"></div>
        <div style="color:var(--tx2);font-size:.85rem;margin-bottom:16px" id="v-sub"></div>
        <div id="v-list"></div>
        <button class="v-close" onclick="closeVerdict()">Close</button>
      </div>
    </div>`;

  // wire up editor autosave + tab key
  const ed = document.getElementById('editor');
  ed?.addEventListener('input', () => saveCode(q.id, ed.value));
  ed?.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = ed.selectionStart;
      ed.value = ed.value.slice(0, s) + '    ' + ed.value.slice(ed.selectionEnd);
      ed.selectionStart = ed.selectionEnd = s + 4;
    }
  });
}

// ── TAB SWITCHING ──────────────────────────────────────────
function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-panel').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('on');
  });
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('on'));
  
  const activeEl = document.getElementById(`panel-${tab}`);
  if (activeEl) {
    activeEl.style.display = 'flex';
    activeEl.classList.add('on');
  }
  
  document.querySelectorAll('.tab').forEach(el => {
    if (el.getAttribute('onclick')?.includes(`'${tab}'`))
      el.classList.add('on');
  });
}

function switchTcTab(tab) {
  activeTcTab = tab;
  document.querySelectorAll('.tc-body').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('on');
  });
  document.querySelectorAll('.tc-tab').forEach(el => el.classList.remove('on'));
  
  const bodyId = tab === 'custom' ? 'tcbody-custom' : `tcbody-${tab.replace('tc','')}`;
  const activeEl = document.getElementById(bodyId);
  if (activeEl) {
    activeEl.style.display = 'flex';
    activeEl.classList.add('on');
  }
  
  document.querySelectorAll('.tc-tab').forEach(el => {
    if ((tab === 'custom' && el.textContent === 'Custom') ||
        el.getAttribute('onclick')?.includes(`'${tab}'`))
      el.classList.add('on');
  });
}

// ── RUN / SUBMIT ───────────────────────────────────────────
async function runCode() {
  const code = document.getElementById('editor')?.value || '';
  if (!code.trim()) return;

  if (activeTcTab === 'custom') {
    const inp = document.getElementById('custom-in')?.value || '';
    const out = document.getElementById('custom-out');
    out.className = 'tc-out out-run';
    out.innerHTML = '<span class="loader"></span> Running…';
    const result = await runPython(code, inp);
    out.className = 'tc-out ' + (result.startsWith('ERROR:') ? 'out-err' : 'out-ok');
    out.textContent = result;
  } else {
    const idx = parseInt(activeTcTab.replace('tc', ''));
    const tc  = currentQ.testCases.filter(t => !t.hidden)[idx];
    const out = document.getElementById(`tco-${idx}`);
    out.className = 'tc-out out-run';
    out.innerHTML = '<span class="loader"></span> Running…';
    const result = await runPython(code, tc.input);
    const pass   = result.trim() === tc.expected.trim();
    out.className = 'tc-out ' + (pass ? 'out-ok' : 'out-err');
    out.textContent = result;
    tcResults[idx] = pass;
    updateTcTabs();
  }
}

async function submitAll() {
  const code = document.getElementById('editor')?.value || '';
  if (!code.trim()) { alert('Write some code first!'); return; }

  const btn = document.querySelector('.btn-sub');
  btn.disabled = true;
  btn.innerHTML = '<span class="loader"></span>';

  const all = currentQ.testCases;
  tcResults  = [];
  const rows = [];

  for (let i = 0; i < all.length; i++) {
    const tc  = all[i];
    const out = await runPython(code, tc.input);
    const ok  = out.trim() === tc.expected.trim();
    rows.push({ tc, ok, out, hidden: tc.hidden });
    if (!tc.hidden) {
      const vIdx = currentQ.testCases.filter(t => !t.hidden).indexOf(tc);
      tcResults[vIdx] = ok;
      const el = document.getElementById(`tco-${vIdx}`);
      if (el) { el.className = 'tc-out ' + (ok ? 'out-ok' : 'out-err'); el.textContent = out; }
    }
  }

  btn.disabled = false;
  btn.textContent = 'Submit';
  updateTcTabs();

  const pass = rows.filter(r => r.ok).length;
  const total = rows.length;
  if (pass === total) {
    solved.add(currentQ.id);
    localStorage.setItem('nqt_solved', JSON.stringify([...solved]));
    updateHeader();
    renderSidebar();
  }
  showVerdict(pass, total, rows);
}

function updateTcTabs() {
  const vis = currentQ.testCases.filter(t => !t.hidden);
  document.querySelectorAll('.tc-tab').forEach((el, i) => {
    const idx = i - 1;
    if (idx >= 0 && tcResults[idx] !== undefined) {
      const icon  = tcResults[idx] ? ' ✓' : ' ✗';
      const color = tcResults[idx] ? 'var(--green)' : 'var(--red)';
      el.innerHTML = `Case ${idx+1} <span style="color:${color}">${icon}</span>`;
    }
  });
}

// ── VERDICT ────────────────────────────────────────────────
function showVerdict(pass, total, rows) {
  const all   = pass === total;
  const part  = pass > 0 && !all;
  const title = document.getElementById('v-title');
  title.className = 'v-title ' + (all ? 'v-ok' : part ? 'v-part' : 'v-fail');
  title.textContent = all ? '✓ All Tests Passed!' : `${pass}/${total} Tests Passed`;
  document.getElementById('v-sub').textContent =
    `Score: ${pass}/${total} • ${Math.round(pass/total*100)}%`;
  document.getElementById('v-list').innerHTML = rows.map((r, i) => `
    <div class="v-row ${r.ok ? 'ok' : 'fail'}">
      ${r.ok ? '✓' : '✗'} Test ${i+1}${r.hidden ? ' (Hidden)' : ''}
      ${!r.ok && !r.hidden
        ? `<span style="margin-left:auto;opacity:.7">Expected: ${r.tc.expected} | Got: ${r.out.slice(0,20)}</span>`
        : ''}
    </div>`).join('');
  document.getElementById('veil').classList.add('on');
}

function closeVerdict(e) {
  if (!e || e.target.id === 'veil')
    document.getElementById('veil').classList.remove('on');
}

// ── SIDEBAR ────────────────────────────────────────────────
function renderSidebar() {
  const items = ALL_QUESTIONS.map(q => {
    const diff = (q.difficulty || 'Medium').toLowerCase();
    const initial = (q.difficulty || 'M')[0];
    const num = (q.id || '').split('-')[1] || '?';
    return `
    <div class="sb-item ${currentQ?.id === q.id ? 'active' : ''}" onclick="openQ('${q.id}')">
      <span class="sb-num">${num}</span>
      <span class="sb-name">${q.title}</span>
      <span class="badge ${diff}">${initial}</span>
    </div>`;
  }).join('');

  document.getElementById('sidebar').innerHTML = `
    <div class="sb-label">Arrays (${ALL_QUESTIONS.filter(q=>q.topic==='Arrays').length})</div>
    ${items}
    <div class="sb-divider"></div>
    <div class="sb-label" style="cursor:pointer" onclick="showDashboard()">⌂ Dashboard</div>`;
}

// ── HEADER ─────────────────────────────────────────────────
function updateHeader() {
  const el = document.getElementById('hdr-solved');
  if (el) el.innerHTML = `Solved: <b>${solved.size}/${ALL_QUESTIONS.length}</b>`;
}

function clearEditor() {
  const ed = document.getElementById('editor');
  if (ed) { ed.value = ''; saveCode(currentQ.id, ''); }
}

function copyCode(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = event?.currentTarget;
    if (btn) {
      const old = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { 
        btn.textContent = old; 
        btn.classList.remove('copied');
      }, 1500);
    }
  });
}

// ── BOOT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  showDashboard();
  updateHeader();
  initPy();
});