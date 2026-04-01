import glob, re
for path in glob.glob('questions/arrays/*.js'):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    text = re.sub(r"(bruteForce:\s*\{[^}]*?code:\s*')[^']*(\'\s*\})", r"\1print('')\2", text, flags=re.S)
    text = re.sub(r"(optimal:\s*\{[^}]*?code:\s*')[^']*(\'\s*\})", r"\1print('')\2", text, flags=re.S)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)
print('sanitized', len(glob.glob('questions/arrays/*.js')), 'files')
