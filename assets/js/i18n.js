(function() {
  var STRINGS = {
    en: {
      // nav / header
      'nav.title': 'invisible layer',
      'nav.github': 'GitHub',
      'nav.filter.all': 'all',
      'nav.filter.rf': 'rf & radio',
      'nav.filter.acoustic': 'acoustic',
      'nav.filter.motion': 'motion',
      'nav.filter.light': 'light',
      'nav.filter.meta': 'meta layer',

      // hero
      'hero.h1': 'your phone<br>is <em>already</em><br>watching.',
      'hero.sub': 'Right now, your device is reading a dozen physical layers of reality simultaneously — electromagnetic fields, acoustic signatures, motion, radio broadcasts from every device around you. Most people have no idea. 25 experiments that change that.',
      'hero.cta.meta': '⊙ open meta layer',
      'hero.cta.ble': 'BLE scanner',
      'hero.mobile-prompt': 'This site works best on a mobile device. The experiments use sensors your phone has but your laptop doesn\'t — camera, gyroscope, magnetometer, barometer.',

      // sensor strip
      'sc.motion': 'tap an experiment',
      'sc.geo.idle': 'not requested',

      // section headers
      'section.rf': 'rf & radio',
      'section.acoustic': 'acoustic',
      'section.motion': 'motion & position',
      'section.light': 'light & optics',
      'section.meta': 'the meta layer',

      // exp header
      'exp.back': 'invisible layer',
      'exp.theme': 'toggle theme',

      // meta layer start screen
      'meta.eyebrow': 'invisible layer / meta layer',
      'meta.title': 'this is what<br>AI sees.',
      'meta.sub': 'Every invisible signal, field, and force around you — rendered on the world.',
      'meta.sub.strong': 'Sound waves. Magnetic fields. Gravity. RF broadcasts. Atmospheric pressure. All at once.',
      'meta.btn': '⊙ open all sensors',
      'meta.warn': 'grants camera, microphone, and motion access. all processing stays on-device.',

      // footer
      'footer.rights': '© 2025 rfi-irfos. open source.',
    },

    de: {
      // nav / header
      'nav.title': 'invisible layer',
      'nav.github': 'GitHub',
      'nav.filter.all': 'alle',
      'nav.filter.rf': 'HF & Radio',
      'nav.filter.acoustic': 'Akustik',
      'nav.filter.motion': 'Bewegung',
      'nav.filter.light': 'Licht',
      'nav.filter.meta': 'Meta-Ebene',

      // hero
      'hero.h1': 'Dein Handy<br><em>beobachtet</em><br>schon längst.',
      'hero.sub': 'Gerade jetzt liest dein Gerät ein Dutzend physikalische Schichten der Realität — elektromagnetische Felder, akustische Signaturen, Bewegung, Funksignale von allen Geräten um dich herum. Die meisten Menschen wissen das nicht. 25 Experimente ändern das.',
      'hero.cta.meta': '⊙ Meta-Ebene öffnen',
      'hero.cta.ble': 'BLE-Scanner',
      'hero.mobile-prompt': 'Diese Seite funktioniert am besten auf einem Mobilgerät. Die Experimente nutzen Sensoren deines Handys, die dein Laptop nicht hat — Kamera, Gyroskop, Magnetometer, Barometer.',

      // sensor strip
      'sc.motion': 'Experiment antippen',
      'sc.geo.idle': 'nicht angefordert',

      // section headers
      'section.rf': 'HF & Radio',
      'section.acoustic': 'Akustik',
      'section.motion': 'Bewegung & Position',
      'section.light': 'Licht & Optik',
      'section.meta': 'Die Meta-Ebene',

      // exp header
      'exp.back': 'invisible layer',
      'exp.theme': 'Design wechseln',

      // meta layer start screen
      'meta.eyebrow': 'invisible layer / Meta-Ebene',
      'meta.title': 'So sieht<br>KI die Welt.',
      'meta.sub': 'Jedes unsichtbare Signal, Feld und jede Kraft um dich herum — auf die Welt projiziert.',
      'meta.sub.strong': 'Schallwellen. Magnetfelder. Schwerkraft. Funksignale. Luftdruck. Alles auf einmal.',
      'meta.btn': '⊙ Alle Sensoren öffnen',
      'meta.warn': 'benötigt Kamera-, Mikrofon- und Bewegungszugriff. alle Berechnungen bleiben auf dem Gerät.',

      // footer
      'footer.rights': '© 2025 rfi-irfos. Open Source.',
    }
  };

  var SUPPORTED = ['en', 'de'];

  function detectLang() {
    var saved = localStorage.getItem('il-lang');
    if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.indexOf('de') === 0) return 'de';
    return 'en';
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) < 0) lang = 'en';
    var strings = STRINGS[lang];
    document.documentElement.lang = lang;
    localStorage.setItem('il-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) {
        el.innerHTML = strings[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (strings[key] !== undefined) {
        el.placeholder = strings[key];
      }
    });

    // update lang toggle button label
    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  window.IL_I18N = {
    detect: detectLang,
    apply: applyLang,
    strings: STRINGS,
    toggle: function() {
      var cur = localStorage.getItem('il-lang') || detectLang();
      applyLang(cur === 'de' ? 'en' : 'de');
    }
  };

  // auto-apply on load
  applyLang(detectLang());
})();
