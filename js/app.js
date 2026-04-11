// ============================================================
//  TCS NQT PREP PLATFORM — app.js
//  Handles: routing, rendering, code execution, test judging
// ============================================================

// ── STATE ──────────────────────────────────────────────────
let currentQ   = null;
let activeTab  = 'code';
let activeTcTab = 'custom';
let tcResults  = [];
let solved     = new Set();
try { solved = new Set(JSON.parse(localStorage.getItem('nqt_solved') || '[]')); } catch(e) {}
let revisions  = {};
try { revisions = JSON.parse(localStorage.getItem('nqt_revisions') || '{}'); } catch(e) {}
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
  
  typeof Q_STRINGS_1 !== 'undefined' ? Q_STRINGS_1 : null,
  typeof Q_STRINGS_2 !== 'undefined' ? Q_STRINGS_2 : null,
  typeof Q_STRINGS_3 !== 'undefined' ? Q_STRINGS_3 : null,
  typeof Q_STRINGS_4 !== 'undefined' ? Q_STRINGS_4 : null,
  typeof Q_STRINGS_5 !== 'undefined' ? Q_STRINGS_5 : null,
  typeof Q_STRINGS_6 !== 'undefined' ? Q_STRINGS_6 : null,
  typeof Q_STRINGS_7 !== 'undefined' ? Q_STRINGS_7 : null,
  typeof Q_STRINGS_8 !== 'undefined' ? Q_STRINGS_8 : null,
  typeof Q_STRINGS_9 !== 'undefined' ? Q_STRINGS_9 : null,
  typeof Q_STRINGS_10 !== 'undefined' ? Q_STRINGS_10 : null,
  typeof Q_STRINGS_11 !== 'undefined' ? Q_STRINGS_11 : null,
  typeof Q_STRINGS_12 !== 'undefined' ? Q_STRINGS_12 : null,
  typeof Q_STRINGS_13 !== 'undefined' ? Q_STRINGS_13 : null,
  typeof Q_STRINGS_14 !== 'undefined' ? Q_STRINGS_14 : null,
  typeof Q_STRINGS_15 !== 'undefined' ? Q_STRINGS_15 : null,
  typeof Q_STRINGS_16 !== 'undefined' ? Q_STRINGS_16 : null,
  typeof Q_STRINGS_17 !== 'undefined' ? Q_STRINGS_17 : null,
  typeof Q_STRINGS_18 !== 'undefined' ? Q_STRINGS_18 : null,
  typeof Q_STRINGS_19 !== 'undefined' ? Q_STRINGS_19 : null,
  typeof Q_STRINGS_20 !== 'undefined' ? Q_STRINGS_20 : null,
  typeof Q_STRINGS_21 !== 'undefined' ? Q_STRINGS_21 : null,
  typeof Q_STRINGS_22 !== 'undefined' ? Q_STRINGS_22 : null,

  typeof Q_SORTING_1 !== 'undefined' ? Q_SORTING_1 : null,
  typeof Q_SORTING_2 !== 'undefined' ? Q_SORTING_2 : null,
  typeof Q_SORTING_3 !== 'undefined' ? Q_SORTING_3 : null,
  typeof Q_SORTING_4 !== 'undefined' ? Q_SORTING_4 : null,
  typeof Q_SORTING_5 !== 'undefined' ? Q_SORTING_5 : null,
  typeof Q_SORTING_6 !== 'undefined' ? Q_SORTING_6 : null,
  typeof Q_SORTING_7 !== 'undefined' ? Q_SORTING_7 : null,
  typeof Q_SORTING_8 !== 'undefined' ? Q_SORTING_8 : null,
  typeof Q_SORTING_9 !== 'undefined' ? Q_SORTING_9 : null,
  typeof Q_SORTING_10 !== 'undefined' ? Q_SORTING_10 : null,
  typeof Q_SORTING_11 !== 'undefined' ? Q_SORTING_11 : null,
  typeof Q_SORTING_12 !== 'undefined' ? Q_SORTING_12 : null,
  typeof Q_SORTING_13 !== 'undefined' ? Q_SORTING_13 : null,
  typeof Q_SORTING_14 !== 'undefined' ? Q_SORTING_14 : null,
  typeof Q_SORTING_15 !== 'undefined' ? Q_SORTING_15 : null,
  typeof Q_SORTING_16 !== 'undefined' ? Q_SORTING_16 : null,
  typeof Q_SORTING_17 !== 'undefined' ? Q_SORTING_17 : null,
  typeof Q_SORTING_18 !== 'undefined' ? Q_SORTING_18 : null,

  typeof Q_NUMBER_1 !== 'undefined' ? Q_NUMBER_1 : null,
  typeof Q_NUMBER_2 !== 'undefined' ? Q_NUMBER_2 : null,
  typeof Q_NUMBER_3 !== 'undefined' ? Q_NUMBER_3 : null,
  typeof Q_NUMBER_4 !== 'undefined' ? Q_NUMBER_4 : null,
  typeof Q_NUMBER_5 !== 'undefined' ? Q_NUMBER_5 : null,
  typeof Q_NUMBER_6 !== 'undefined' ? Q_NUMBER_6 : null,
  typeof Q_NUMBER_7 !== 'undefined' ? Q_NUMBER_7 : null,
  typeof Q_NUMBER_8 !== 'undefined' ? Q_NUMBER_8 : null,
  typeof Q_NUMBER_9 !== 'undefined' ? Q_NUMBER_9 : null,
  typeof Q_NUMBER_10 !== 'undefined' ? Q_NUMBER_10 : null,
  typeof Q_NUMBER_11 !== 'undefined' ? Q_NUMBER_11 : null,
  typeof Q_NUMBER_12 !== 'undefined' ? Q_NUMBER_12 : null,
  typeof Q_NUMBER_13 !== 'undefined' ? Q_NUMBER_13 : null,
  typeof Q_NUMBER_14 !== 'undefined' ? Q_NUMBER_14 : null,
  typeof Q_NUMBER_15 !== 'undefined' ? Q_NUMBER_15 : null,
  typeof Q_NUMBER_16 !== 'undefined' ? Q_NUMBER_16 : null,
  typeof Q_NUMBER_17 !== 'undefined' ? Q_NUMBER_17 : null,
  typeof Q_NUMBER_18 !== 'undefined' ? Q_NUMBER_18 : null,
  typeof Q_NUMBER_19 !== 'undefined' ? Q_NUMBER_19 : null,
  typeof Q_NUMBER_20 !== 'undefined' ? Q_NUMBER_20 : null,
  typeof Q_NUMBER_21 !== 'undefined' ? Q_NUMBER_21 : null,
  typeof Q_NUMBER_22 !== 'undefined' ? Q_NUMBER_22 : null,
  typeof Q_NUMBER_23 !== 'undefined' ? Q_NUMBER_23 : null,
  typeof Q_NUMBER_24 !== 'undefined' ? Q_NUMBER_24 : null,
  typeof Q_NUMBER_25 !== 'undefined' ? Q_NUMBER_25 : null,
  typeof Q_NUMBER_26 !== 'undefined' ? Q_NUMBER_26 : null,
  typeof Q_NUMBER_27 !== 'undefined' ? Q_NUMBER_27 : null,
  typeof Q_NUMBER_28 !== 'undefined' ? Q_NUMBER_28 : null,
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
    // Safely set stdin via globals to avoid string injection issues
    pyodide.globals.set("__stdin_data__", stdin);
    pyodide.runPython(`
import sys
import io
sys.stdin = io.StringIO(__stdin_data__)
sys.stdout = io.StringIO()
    `);
    
    // Use runPythonAsync to allow some concurrency (though main thread still blocks on loops)
    await pyodide.runPythonAsync(code);
    
    return pyodide.runPython("sys.stdout.getvalue()").trim();
  } catch (e) {
    console.error("Python Execution Error:", e);
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

function toggleSidebar() {
  document.querySelector('.shell').classList.toggle('collapsed');
}

function saveRevision(id, status, date) {
  if (status === 'None') {
    delete revisions[id];
  } else {
    revisions[id] = { status, date };
  }
  localStorage.setItem('nqt_revisions', JSON.stringify(revisions));
  if (currentQ && currentQ.id === id) renderQ();
}

function showKanban() {
  currentQ = null;
  renderSidebar();

  document.querySelectorAll('.nav-btn').forEach(b => {
    if (b.textContent === 'Kanban Board') b.classList.add('active');
    else b.classList.remove('active');
  });
  
  const cols = [
    { id: 'To Review', name: '🔴 To Review' },
    { id: 'Revising', name: '🟡 Revising' },
    { id: 'Completed', name: '🟢 Completed' }
  ];
  
  const colHTML = cols.map(c => {
    const qs = Object.entries(revisions).filter(([id, r]) => r.status === c.id);
    const qCards = qs.map(([id, r]) => {
      const q = ALL_QUESTIONS.find(x => x.id === id);
      if (!q) return '';
      return `
        <div class="kb-card" draggable="true" ondragstart="kbOnDragStart(event, '${q.id}')" onclick="openQ('${q.id}')">
          <div class="q-card-meta">
            <span class="q-card-id">#${q.id}</span>
            ${r.date ? `<span style="margin-left:auto;color:var(--amber);font-size:.72rem">📅 ${r.date}</span>` : ''}
          </div>
          <div style="font-size:0.95rem; font-weight:600; margin:8px 0; color:var(--tx)">${q.title}</div>
          <div style="font-size:0.75rem; color:var(--tx3)">📁 ${q.topic}</div>
        </div>`;
    }).join('');
    
    return `
      <div class="kb-col" ondragover="kbOnDragOver(event)" ondrop="kbOnDrop(event, '${c.id}')">
        <div class="kb-col-hdr">
          <span>${c.name}</span>
          <span style="opacity:0.5; font-size:0.8rem">${qs.length}</span>
        </div>
        <div class="kb-list">${qCards || '<div style="color:var(--tx3);font-size:.85rem;text-align:center;padding:20px;">Drop here</div>'}</div>
      </div>`;
  }).join('');
  
  document.getElementById('main').innerHTML = `
    <div class="dash">
      <div class="hero" style="padding:32px 0;">
        <div class="hero-title" style="font-size:2.4rem;">Revision <span class="hl">Kanban</span></div>
        <div class="hero-sub">Drag and drop cards to update their status. Stays synced with your progress.</div>
      </div>
      <div class="kb-grid">${colHTML}</div>
    </div>`;
}

// ── KANBAN DRAG & DROP ──
let kbDraggingId = null;
function kbOnDragStart(e, id) {
  kbDraggingId = id;
  e.dataTransfer.setData('text/plain', id);
  e.currentTarget.classList.add('dragging');
}
function kbOnDragOver(e) { e.preventDefault(); }
function kbOnDrop(e, status) {
  e.preventDefault();
  if (!kbDraggingId) return;
  const date = revisions[kbDraggingId]?.date || '';
  saveRevision(kbDraggingId, status, date);
  kbDraggingId = null;
  showKanban();
}

// ── DASHBOARD ──────────────────────────────────────────────
function showDashboard(topicId = null) {
  currentQ = null;
  renderSidebar();

  try {
    document.querySelectorAll('.nav-btn').forEach(b => {
      if (b.textContent === 'Kanban Board') {
          b.classList.remove('active');
      } else if (!topicId && b.textContent === 'Home') {
          b.classList.add('active');
      } else if (topicId && b.textContent.toLowerCase().replace(' ', '-').includes(topicId)) {
          b.classList.add('active');
      } else {
          b.classList.remove('active');
      }
    });
    const topicCards = TOPICS.map(t => {
      const isActive = topicId === t.id;
      return `
      <div class="topic-card" onclick="showDashboard('${t.id}')" style="cursor:pointer; border-color:${isActive ? t.color : t.color+'33'}; background:${isActive ? 'var(--bg3)' : 'transparent'}; box-shadow:${isActive ? '0 0 12px '+t.color+'44' : 'none'}">
        <div class="topic-icon">${t.icon}</div>
        <div class="topic-name" style="color:${t.color}">${t.name}</div>
        <div class="topic-count">${t.questionFiles.length} questions</div>
      </div>`;
    }).join('');

    let filteredQuestions = [...ALL_QUESTIONS];
    let chartHTML = '';
    
    if (topicId) {
       const topicObj = TOPICS.find(t => t.id === topicId);
       if (topicObj) {
         filteredQuestions = filteredQuestions.filter(q => q.topic === topicObj.name);
         const topicQCount = filteredQuestions.length;
         const topicSolved = filteredQuestions.filter(q => solved.has(q.id)).length;
         const pct = topicQCount > 0 ? Math.round((topicSolved/topicQCount)*100) : 0;
         
         chartHTML = `
           <div style="margin-top: 32px; padding: 24px; background: var(--bg2); border: 1px solid var(--bd2); border-radius: var(--r-lg);">
             <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                <span style="font-weight:600; color:${topicObj.color}">${topicObj.name} Progress Analytics</span>
                <span style="font-family:var(--mono)">${topicSolved} / ${topicQCount} (${pct}%) Completed</span>
             </div>
             <div style="height:10px; background:var(--bg); border-radius:99px; overflow:hidden; border:1px solid var(--bd);">
               <div style="height:100%; width:${pct}%; background:${topicObj.color}; box-shadow:0 0 10px ${topicObj.color}; transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);"></div>
             </div>
           </div>`;
       }
    }

    filteredQuestions.sort((a, b) => {
      const p = { 'To Review': 3, 'Revising': 2, 'Completed': 0 };
      const pa = p[revisions[a.id]?.status] ?? 1;
      const pb = p[revisions[b.id]?.status] ?? 1;
      return pb - pa;
    });

    const qCards = filteredQuestions.map(q => {
      const diff = (q.difficulty || 'Medium').toLowerCase();
      const isSolved = solved.has(q.id);
      const rev = revisions[q.id];
      let revTag = '';
      if (rev) {
          const color = rev.status === 'To Review' ? 'var(--red)' : rev.status === 'Revising' ? 'var(--amber)' : 'var(--green)';
          revTag = `<span style="font-size:0.6rem; padding: 2px 6px; border-radius:4px; background:var(--bg3); border:1px solid ${color}; color:${color}">${rev.status}</span>`;
      }
      return `
      <div class="q-card" onclick="openQ('${q.id}')" style="${isSolved ? 'border-color:rgba(16,255,176,0.2)' : ''}">
        <div class="q-card-meta">
          <span class="q-card-id">#${q.id}</span>
          <span class="badge ${diff}">${q.difficulty || 'Medium'}</span>
          ${revTag}
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
        
        ${chartHTML}

        <div class="sec-heading" style="margin-top: ${chartHTML ? '32px' : '0px'}">📋 ${topicId ? 'Filtered' : 'All'} Problems</div>
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
  setTimeout(syncEditor, 10);
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

        <div style="background:var(--bg2); border:1px solid var(--bd2); border-radius:var(--r); padding:12px 16px; margin:20px 0; display:flex; flex-direction:column; gap:10px;">
          <div style="font-size:0.85rem; font-weight:600; color:var(--tx2)">📋 Kanban Revision Status</div>
          <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
            <select id="rev-status" onchange="saveRevision('${q.id}', this.value, document.getElementById('rev-date').value)" style="background:var(--bg); border:1px solid var(--bd); color:var(--tx); padding:6px 10px; border-radius:4px; font-family:var(--sans); cursor:pointer;">
              <option value="None" ${(!revisions[q.id] || revisions[q.id].status==='None')?'selected':''}>-- Select Status --</option>
              <option value="To Review" ${revisions[q.id]?.status==='To Review'?'selected':''}>🔴 To Review</option>
              <option value="Revising" ${revisions[q.id]?.status==='Revising'?'selected':''}>🟡 Revising</option>
              <option value="Completed" ${revisions[q.id]?.status==='Completed'?'selected':''}>🟢 Completed</option>
            </select>
            <input type="date" id="rev-date" value="${revisions[q.id]?.date || ''}" onchange="saveRevision('${q.id}', document.getElementById('rev-status').value, this.value)" style="background:var(--bg); border:1px solid var(--bd); color:var(--tx); padding:5px 10px; border-radius:4px; font-family:var(--sans); color-scheme:dark; cursor:pointer;" title="Next Revision Date">
          </div>
        </div>

        <div class="sec-lbl">Constraints</div>
        <ul style="padding-left:18px;color:var(--tx2);font-size:.9rem;line-height:1.8">${q.constraints.map(c=>`<li>${c}</li>`).join('')}</ul>

        <div class="sec-lbl">Input Format</div>
        <div class="io-block">${q.inputFormat}</div>
        <div class="sec-lbl">Output Format</div>
        <div class="io-block">${q.outputFormat}</div>
        <div class="sec-lbl">Examples</div>
        ${exHTML}
        <div style="height:40px"></div>
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
            <button class="btn btn-run" id="btn-run" onclick="runCode()" ${pyLoading ? 'disabled' : ''}>
              ${pyLoading ? '<span class="loader"></span> Loading...' : '<span>▶</span> Run'}
            </button>
            <button class="btn btn-sub" id="btn-sub" onclick="submitAll()">Submit</button>
          </div>
        </div>

        <div class="editor-area">
          <!-- YOUR CODE -->
          <div class="tab-panel ${activeTab==='code'?'on':''}" id="panel-code">
            <div class="editor-wrap">
              <div class="editor-display" id="editor-display"></div>
              <textarea class="editor-input" id="editor" spellcheck="false"
                oninput="syncEditor()" onscroll="syncScroll()"
                placeholder="# Write your Python solution here&#10;n = int(input())&#10;">${loadCode(q.id)}</textarea>
            </div>
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

  const btn = document.getElementById('btn-run');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="loader"></span> Running...';
  }

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
    if (out) {
      out.className = 'tc-out out-run';
      out.innerHTML = '<span class="loader"></span> Running…';
    }
    const result = await runPython(code, tc.input);
    const pass   = result.trim() === tc.expected.trim();
    if (out) {
      out.className = 'tc-out ' + (pass ? 'out-ok' : 'out-err');
      out.textContent = result;
    }
    tcResults[idx] = pass;
    updateTcTabs();
  }

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = '<span>▶</span> Run';
  }
}

async function submitAll() {
  const code = document.getElementById('editor')?.value || '';
  if (!code.trim()) { alert('Write some code first!'); return; }

  const btn = document.querySelector('.btn-sub');
  btn.disabled = true;
  btn.innerHTML = '<span class="loader"></span> Running...';

  const all = currentQ.testCases;
  tcResults  = [];
  const rows = [];

  try {
    for (let i = 0; i < all.length; i++) {
      const tc = all[i];
      btn.innerHTML = `<span class="loader"></span> ${tc.hidden ? 'Secret' : 'Test'} ${i+1}/${all.length}...`;
      
      const out = await runPython(code, tc.input);
      const ok  = out.trim() === tc.expected.trim();
      rows.push({ tc, ok, out, hidden: tc.hidden });
      
      if (!tc.hidden) {
        const vIdx = currentQ.testCases.filter(t => !t.hidden).indexOf(tc);
        if (vIdx !== -1) {
          tcResults[vIdx] = ok;
          const el = document.getElementById(`tco-${vIdx}`);
          if (el) { el.className = 'tc-out ' + (ok ? 'out-ok' : 'out-err'); el.textContent = out; }
        }
      }
    }
  } catch (err) {
    console.error("submitAll internal error:", err);
  }

  btn.disabled = false;
  btn.innerHTML = 'Submit';
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
  try {
    const topicSections = TOPICS.map(t => {
      const topicQs = ALL_QUESTIONS.filter(q => q.topic === t.name);
      if (topicQs.length === 0) return '';
      
      const items = topicQs.map(q => {
        const diff = (q.difficulty || 'Medium').toLowerCase();
        const initial = (q.difficulty || 'M')[0];
        const num = (q.id || '').split('-')[1] || '?';
        const isSolved = solved.has(q.id);
        return `
        <div class="sb-item ${currentQ?.id === q.id ? 'active' : ''}" onclick="openQ('${q.id}')">
          <span class="sb-num">${num}</span>
          <span class="sb-name">${q.title}</span>
          ${isSolved ? '<span style="color:var(--green); margin-right:4px;">✓</span>' : ''}
          <span class="badge ${diff}">${initial}</span>
        </div>`;
      }).join('');

      return `
        <div class="sb-label">${t.name} (${topicQs.length})</div>
        ${items}
        <div class="sb-divider"></div>`;
    }).join('');

    document.getElementById('sidebar').innerHTML = `
      ${topicSections}
      <div class="sb-label" style="cursor:pointer" onclick="showDashboard()">⌂ Home Dashboard</div>
      <div class="sb-label" style="cursor:pointer; color:var(--amber)" onclick="showKanban()">📋 Revision Board</div>`;
  } catch(e) {
    console.error('renderSidebar error:', e);
  }
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

function syncEditor() {
  const input = document.getElementById('editor');
  const display = document.getElementById('editor-display');
  if (!input || !display) return;
  display.innerHTML = hl(input.value) + "\n "; 
  saveCode(currentQ.id, input.value);
}

function syncScroll() {
  const input = document.getElementById('editor');
  const display = document.getElementById('editor-display');
  if (!input || !display) return;
  display.scrollTop = input.scrollTop;
  display.scrollLeft = input.scrollLeft;
}

// ── BOOT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  showDashboard();
  updateHeader();
  initPy();
});