// ── Theme ──
const THEMES = ['dark', 'light', 'hc'];
let themeIdx = 0;
const THEME_ICONS = ['dark', 'light', 'hc'];

function applyTheme(name) {
  document.documentElement.dataset.theme = name;
  localStorage.setItem('il-theme', name);
  themeIdx = THEMES.indexOf(name);
  // header icons
  document.getElementById('theme-icon-dark').style.display  = name === 'dark'  ? '' : 'none';
  document.getElementById('theme-icon-light').style.display = name === 'light' ? '' : 'none';
  document.getElementById('theme-icon-hc').style.display    = name === 'hc'    ? '' : 'none';
  // drawer buttons
  ['dark','light','hc'].forEach(t => {
    const el = document.getElementById('dt-' + t);
    if (el) el.classList.toggle('active', t === name);
  });
}
function cycleTheme() { applyTheme(THEMES[(themeIdx + 1) % THEMES.length]); }
function setTheme(name) { applyTheme(name); }

// Load saved theme on startup
(function() {
  const saved = localStorage.getItem('il-theme');
  if (saved && THEMES.includes(saved)) applyTheme(saved);
  else applyTheme('dark');
})();

// ── Mobile menu ──
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobile-drawer').classList.toggle('open', menuOpen);
  document.getElementById('menu-icon-open').style.display  = menuOpen ? 'none' : '';
  document.getElementById('menu-icon-close').style.display = menuOpen ? '' : 'none';
}
function closeMenu() {
  menuOpen = false;
  document.getElementById('mobile-drawer').classList.remove('open');
  document.getElementById('menu-icon-open').style.display  = '';
  document.getElementById('menu-icon-close').style.display = 'none';
}
// Close drawer on outside click
document.addEventListener('click', function(e) {
  if (menuOpen && !document.getElementById('mobile-drawer').contains(e.target)
                && !document.getElementById('menu-btn').contains(e.target)) {
    closeMenu();
  }
});

// ── Filter ──
function filter(cat, btn) {
  document.querySelectorAll('.filter-btn, .drawer-filter-btn').forEach(b => b.classList.remove('active'));
  // mark both the top-bar and drawer buttons active
  document.querySelectorAll('.filter-btn').forEach(b => {
    if (b.textContent.trim().toLowerCase().startsWith(cat === 'all' ? 'all' : cat.split(' ')[0]))
      b.classList.add('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('.experiments .section-label').forEach(el => {
    el.style.display = cat === 'all' || el.dataset.cat === cat ? '' : 'none';
  });
  document.querySelectorAll('.card').forEach(el => {
    el.style.display = cat === 'all' || el.dataset.cat === cat ? '' : 'none';
  });
  document.querySelectorAll('.grid').forEach(grid => {
    const visible = [...grid.children].some(c => c.style.display !== 'none');
    grid.style.display = visible ? '' : 'none';
  });
}

// ── Language picker dropdown ──
let langPickerOpen = false;

function toggleLangPicker() {
  langPickerOpen = !langPickerOpen;
  const dropdown = document.getElementById('lang-dropdown');
  const btn = document.getElementById('lang-btn');
  dropdown.classList.toggle('open', langPickerOpen);
  btn.setAttribute('aria-expanded', langPickerOpen);
}

function closeLangPicker() {
  langPickerOpen = false;
  const dropdown = document.getElementById('lang-dropdown');
  const btn = document.getElementById('lang-btn');
  if (dropdown) dropdown.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function pickLang(lang) {
  IL_I18N.apply(lang);
  // update button label
  document.getElementById('lang-btn').textContent = lang.toUpperCase();
  // mark active option
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
    o.setAttribute('aria-selected', o.dataset.lang === lang);
  });
  closeLangPicker();
}

// Close on outside click
document.addEventListener('click', function(e) {
  const picker = document.getElementById('lang-picker');
  if (langPickerOpen && picker && !picker.contains(e.target)) closeLangPicker();
});

// Sync active option when i18n auto-applies on load
document.addEventListener('DOMContentLoaded', function() {
  const cur = localStorage.getItem('il-lang') || 'de';
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = cur.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === cur);
  });
});

// ── Micro-animations ──
function triggerUpdate(id) {
  const el = document.getElementById(id);
  if(el) {
    el.classList.remove('value-update');
    void el.offsetWidth;
    el.classList.add('value-update');
  }
}

// ── Live sensors ──
(function() {
  // Accelerometer
  if (typeof DeviceMotionEvent !== 'undefined') {
    if (typeof DeviceMotionEvent.requestPermission !== 'function') {
      window.addEventListener('devicemotion', function(e) {
        const a = e.accelerationIncludingGravity;
        if (a && (a.x || a.y || a.z)) {
          document.getElementById('sc-motion').textContent =
            (a.x||0).toFixed(1) + ' / ' + (a.y||0).toFixed(1) + ' / ' + (a.z||0).toFixed(1);
          document.getElementById('sc-motion').classList.remove('dim');
          triggerUpdate('sc-motion');
        }
      });
    } else {
      document.getElementById('sc-motion').textContent = 'tap to enable';
    }
  }

  // Orientation (compass + gyro angles)
  window.addEventListener('deviceorientation', function(e) {
    if (e.alpha !== null) {
      const el = document.getElementById('sc-compass');
      const newVal = (e.alpha||0).toFixed(0) + '° / ' + (e.beta||0).toFixed(0) + '° / ' + (e.gamma||0).toFixed(0) + '°';
      if (el.textContent !== newVal) {
        el.textContent = newVal;
        el.classList.remove('dim');
        triggerUpdate('sc-compass');
      }
    }
  });

  // Network
  const nc = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (nc) {
    document.getElementById('sc-net').textContent =
      (nc.effectiveType || nc.type || '?') + (nc.downlink ? ' · ' + nc.downlink + 'Mb' : '');
  } else {
    document.getElementById('sc-net').textContent = 'hidden';
    document.getElementById('sc-net').classList.add('dim');
  }

  // Battery
  if (navigator.getBattery) {
    navigator.getBattery().then(function(b) {
      const upd = () => {
        const el = document.getElementById('sc-bat');
        const newVal = Math.round(b.level * 100) + '%' + (b.charging ? ' +' : '');
        if (el.textContent !== newVal) {
          el.textContent = newVal;
          triggerUpdate('sc-bat');
        }
      };
      upd();
      b.addEventListener('levelchange', upd);
      b.addEventListener('chargingchange', upd);
    }).catch(() => {
      document.getElementById('sc-bat').textContent = 'hidden';
      document.getElementById('sc-bat').classList.add('dim');
    });
  } else {
    document.getElementById('sc-bat').textContent = 'hidden';
    document.getElementById('sc-bat').classList.add('dim');
  }

  // Screen info
  document.getElementById('sc-screen').textContent =
    screen.width + 'x' + screen.height + '@' + (window.devicePixelRatio || 1).toFixed(1) + 'x';

  // Platform (hardware concurrency, memory)
  const cores = navigator.hardwareConcurrency || '?';
  const mem   = navigator.deviceMemory      ? navigator.deviceMemory + 'GB' : null;
  document.getElementById('sc-platform').textContent = cores + ' cores' + (mem ? ' / ' + mem : '');

  // UA entropy
  const tokens = navigator.userAgent.split(/[\s;()\/]/).filter(Boolean).length;
  document.getElementById('sc-ua').textContent = tokens + ' tokens';

  // BLE availability
  document.getElementById('sc-ble').textContent = navigator.bluetooth ? 'available' : 'blocked';
  document.getElementById('sc-ble').classList.toggle('dim', !navigator.bluetooth);

  // Geolocation (passive check, don't request yet)
  document.getElementById('sc-geo').textContent = navigator.geolocation ? 'available' : 'blocked';
  document.getElementById('sc-geo').classList.toggle('dim', !navigator.geolocation);

  // Show desktop prompt
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  if (!isMobile) document.getElementById('mobile-prompt').style.display = 'block';

  // Sensor count
  let count = 2;
  if (nc) count++;
  if (navigator.getBattery) count++;
  if (navigator.bluetooth) count++;
  if (navigator.geolocation) count++;
  if (navigator.hardwareConcurrency) count++;
  document.getElementById('sensor-count-label').textContent = '— ' + count + '+ sensors readable now';
})();

// ── Particles Background ──
(function(){
  const canvas = document.getElementById('hero-particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = canvas.offsetWidth;
  let h = canvas.height = canvas.offsetHeight;
  const particles = Array.from({length: 40}, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  }));
  window.addEventListener('resize', () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  });
  function animate() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--green').trim() || '#22c55e';
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if(p.x < 0 || p.x > w) p.dx *= -1;
      if(p.y < 0 || p.y > h) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();
