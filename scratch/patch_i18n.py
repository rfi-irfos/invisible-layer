import re

with open('assets/js/fr.js', 'r', encoding='utf-8') as f:
    fr_content = f.read()

with open('assets/js/i18n.js', 'r', encoding='utf-8') as f:
    i18n = f.read()

# Insert fr: block before the closing brace of STRINGS
i18n = re.sub(r'(\s*)\}\s*;\s*var SUPPORTED', r',\n' + fr_content + r'\n\1};\n\n  var SUPPORTED', i18n)

# Update SUPPORTED
i18n = i18n.replace("var SUPPORTED = ['en', 'de'];", "var SUPPORTED = ['en', 'de', 'fr'];")

# Update detectLang
detect_new = """  function detectLang() {
    var saved = localStorage.getItem('il-lang');
    if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.indexOf('de') === 0) return 'de';
    if (nav.indexOf('fr') === 0) return 'fr';
    return 'en';
  }"""
i18n = re.sub(r'  function detectLang\(\) \{[\s\S]*?return \'en\';\n  \}', detect_new, i18n)

# Update the toggle button logic
toggle_old = """    // update lang toggle button label
    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';"""
toggle_new = """    // update lang toggle button label
    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang.toUpperCase();"""
i18n = i18n.replace(toggle_old, toggle_new)

# Update the toggle action
action_old = """      var cur = localStorage.getItem('il-lang') || detectLang();
      applyLang(cur === 'de' ? 'en' : 'de');"""
action_new = """      var cur = localStorage.getItem('il-lang') || detectLang();
      var nextIdx = (SUPPORTED.indexOf(cur) + 1) % SUPPORTED.length;
      applyLang(SUPPORTED[nextIdx]);"""
i18n = i18n.replace(action_old, action_new)

with open('assets/js/i18n.js', 'w', encoding='utf-8') as f:
    f.write(i18n)
