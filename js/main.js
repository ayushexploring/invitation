/* ============================================================
   WEDDING INVITATION - BEHAVIOUR
   You should not need to edit this file. All content lives
   in js/data.js.
   ============================================================ */

(function () {
  'use strict';

  var LANG_KEY = 'wedding-lang';
  var lang = WEDDING.language.default === 'hi' ? 'hi' : 'en';

  try {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'hi') lang = saved;
  } catch (e) { /* private mode - ignore */ }

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- resolve "venue.name" against WEDDING ---------- */
  function get(path) {
    return path.split('.').reduce(function (o, k) {
      return (o == null) ? undefined : o[k];
    }, WEDDING);
  }

  /* ---------- pick the current language out of {en,hi} ---------- */
  function t(v) {
    if (v == null) return '';
    if (typeof v === 'object') return v[lang] || v.en || '';
    return String(v);
  }


  /* ============================================================
     RENDER - fills every data-field / data-ui in the document
     ============================================================ */

  function render() {
    document.documentElement.lang = lang;

    /* --- document title + link preview --- */
    var title = t(WEDDING.site.title);
    var desc  = t(WEDDING.site.description);
    document.title = title;
    var md = $('meta[name="description"]'); if (md) md.content = desc;
    var ot = $('#og-title'); if (ot) ot.content = title;
    var od = $('#og-desc');  if (od) od.content = desc;

    /* --- simple bindings --- */
    $$('[data-field]').forEach(function (el) {
      el.textContent = t(get(el.getAttribute('data-field')));
    });
    $$('[data-ui]').forEach(function (el) {
      el.textContent = t(WEDDING.ui[el.getAttribute('data-ui')]);
    });

    /* --- venue map link --- */
    var maps = $('#mapsBtn');
    if (maps) {
      if (WEDDING.venue.mapsUrl) {
        maps.href = WEDDING.venue.mapsUrl;
        maps.hidden = false;
      } else {
        maps.hidden = true;
      }
    }

    renderTimeline();
    renderEvents();
    renderGallery();
    renderInfo();

    /* --- dress code section --- */
    $('#dressSec').hidden = !WEDDING.dressCode.show;

    /* --- closing signature --- */
    var sign = t(WEDDING.closing.signature);
    if (!sign) {
      sign = t(WEDDING.couple.groom.name) + '  &  ' + t(WEDDING.couple.bride.name);
    }
    $('#closingSign').textContent = sign;

    /* --- language toggle label --- */
    var lbl = $('#langLabel');
    if (lbl) lbl.textContent = WEDDING.language.labels[lang] || '';
  }

  function renderTimeline() {
    var list = $('#timelineList');
    list.innerHTML = '';
    (WEDDING.timeline.items || []).forEach(function (it) {
      var li = document.createElement('li');
      li.innerHTML =
        '<div class="tl-title"></div>' +
        '<div class="tl-when"></div>' +
        '<div class="tl-note"></div>';
      $('.tl-title', li).textContent = t(it.title);
      $('.tl-when',  li).textContent = t(it.when);
      var note = t(it.note);
      if (note) { $('.tl-note', li).textContent = note; }
      else      { $('.tl-note', li).remove(); }
      list.appendChild(li);
    });
  }

  function renderEvents() {
    var sec  = $('#eventsSec');
    var list = $('#eventsList');
    var items = WEDDING.events.items || [];
    sec.hidden = !WEDDING.events.show || items.length === 0;
    list.innerHTML = '';
    items.forEach(function (ev) {
      var div = document.createElement('div');
      div.className = 'ev';
      div.innerHTML =
        '<div class="ev-title"></div>' +
        '<div class="ev-when"></div>' +
        '<div class="ev-where"></div>';
      $('.ev-title', div).textContent = t(ev.title);
      $('.ev-when',  div).textContent = t(ev.when);
      $('.ev-where', div).textContent = t(ev.where);
      list.appendChild(div);
    });
  }

  function renderGallery() {
    var sec  = $('#gallerySec');
    var grid = $('#galleryGrid');
    var photos = WEDDING.gallery.photos || [];
    sec.hidden = photos.length === 0;
    if (!photos.length) return;
    grid.innerHTML = '';
    photos.forEach(function (p) {
      var fig = document.createElement('figure');
      var img = document.createElement('img');
      img.src = p.src;
      img.alt = p.alt || '';
      img.loading = 'lazy';
      fig.appendChild(img);
      grid.appendChild(fig);
    });
  }

  function renderInfo() {
    $('#cardTransport').hidden = !WEDDING.info.transportation.show;
    $('#cardStay').hidden      = !WEDDING.info.accommodation.show;
    $('#cardGifts').hidden     = !WEDDING.info.gifts.show;
    $('#infoSec').hidden =
      !WEDDING.info.transportation.show &&
      !WEDDING.info.accommodation.show &&
      !WEDDING.info.gifts.show;
  }


  /* ============================================================
     ENVELOPE
     ============================================================ */

  var screenEl = $('#envelopeScreen');
  var envelope = $('#envelope');
  var burst    = $('#lightBurst');
  var opened   = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;

    startMusic();                       // a tap is the only moment browsers allow this
    screenEl.classList.add('opening');
    envelope.classList.add('open');

    setTimeout(function () {
      burst.classList.add('flash');
      envelope.classList.add('launch');
    }, 1450);

    setTimeout(function () {
      screenEl.classList.add('gone');
      document.body.classList.remove('locked');
      document.body.classList.add('opened');
      revealVisible();                  // animate in whatever is already on screen
    }, 2050);

    setTimeout(function () { screenEl.hidden = true; }, 2900);
  }

  $('#seal').addEventListener('click', openEnvelope);
  envelope.addEventListener('click', openEnvelope);


  /* ============================================================
     BACKGROUND MUSIC
     ============================================================ */

  var audio   = $('#bgm');
  var soundBtn = $('#soundBtn');
  var musicOn = false;

  function initMusic() {
    if (!WEDDING.music.enabled || !WEDDING.music.src) {
      soundBtn.hidden = true;
      return;
    }
    soundBtn.hidden = false;
    audio.src = WEDDING.music.src;
    audio.volume = 0.55;
    setMusicIcon(!WEDDING.music.startMuted);
  }

  function setMusicIcon(on) {
    musicOn = on;
    soundBtn.classList.toggle('muted', !on);
  }

  function startMusic() {
    if (!WEDDING.music.enabled || !WEDDING.music.src) return;
    if (WEDDING.music.startMuted) { setMusicIcon(false); return; }
    audio.play().then(function () {
      setMusicIcon(true);
    }).catch(function () {
      setMusicIcon(false);              // browser or file said no - show it as muted
    });
  }

  soundBtn.addEventListener('click', function () {
    if (musicOn) { audio.pause(); setMusicIcon(false); }
    else { audio.play().then(function(){ setMusicIcon(true); }).catch(function(){}); }
  });


  /* ============================================================
     LANGUAGE TOGGLE
     ============================================================ */

  var langBtn = $('#langBtn');

  if (WEDDING.language.enabled) {
    langBtn.hidden = false;
    langBtn.addEventListener('click', function () {
      lang = (lang === 'en') ? 'hi' : 'en';
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      render();
    });
  } else {
    langBtn.hidden = true;
  }


  /* ============================================================
     FALLING PETALS
     ============================================================ */

  function initPetals() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var box = $('#petals');
    var n = window.innerWidth < 520 ? 12 : 18;
    for (var i = 0; i < n; i++) {
      var p = document.createElement('span');
      p.className = 'petal';
      p.style.left            = (Math.random() * 100) + 'vw';
      p.style.animationDuration = (9 + Math.random() * 10) + 's';
      p.style.animationDelay    = (-Math.random() * 18) + 's';
      p.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
      var s = 7 + Math.random() * 8;
      p.style.width = s + 'px';
      p.style.height = s + 'px';
      p.style.opacity = 0.3 + Math.random() * 0.4;
      box.appendChild(p);
    }
  }


  /* ============================================================
     SCROLL REVEAL
     ============================================================ */

  var io = null;

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach(function (el) { el.classList.add('in'); });
      return;
    }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    $$('.reveal').forEach(function (el) { io.observe(el); });
  }

  function revealVisible() {
    $$('.reveal').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) el.classList.add('in');
    });
  }


  /* ============================================================
     COUNTDOWN
     ============================================================ */

  function initCountdown() {
    var target = Date.parse(WEDDING.weddingDateTime);
    var grid = $('#countGrid');
    var done = $('#countDone');

    if (isNaN(target)) {
      console.warn('weddingDateTime could not be parsed:', WEDDING.weddingDateTime);
      return;
    }

    var els = {
      d: $('#cdDays'), h: $('#cdHours'), m: $('#cdMins'), s: $('#cdSecs')
    };

    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        grid.hidden = true;
        done.hidden = false;
        clearInterval(timer);
        return;
      }
      var sec = Math.floor(diff / 1000);
      els.d.textContent = Math.floor(sec / 86400);
      els.h.textContent = pad(Math.floor(sec / 3600) % 24);
      els.m.textContent = pad(Math.floor(sec / 60) % 60);
      els.s.textContent = pad(sec % 60);
    }

    tick();
    var timer = setInterval(tick, 1000);
  }


  /* ============================================================
     SCRATCH TO REVEAL
     ============================================================ */

  function initScratch() {
    var wrap   = $('#scratchHeart');
    var canvas = $('#scratchCanvas');
    var hint   = $('#scratchHint');
    if (!wrap || !canvas) return;

    var ctx = canvas.getContext('2d');
    var revealed = false;
    var drawing  = false;
    var last     = null;
    var checkCounter = 0;

    function paintCover() {
      var rect = wrap.getBoundingClientRect();
      if (!rect.width) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = Math.round(rect.width  * dpr);
      canvas.height = Math.round(rect.height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = 'source-over';

      var g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      g.addColorStop(0,   '#E9AFAA');
      g.addColorStop(0.5, '#D08C89');
      g.addColorStop(1,   '#B96C6E');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // glitter speckles
      for (var i = 0; i < 260; i++) {
        var x = Math.random() * rect.width;
        var y = Math.random() * rect.height;
        var r = Math.random() * 1.5 + 0.3;
        ctx.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.55 + 0.12) + ')';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'destination-out';
    }

    function pos(e) {
      var rect = canvas.getBoundingClientRect();
      var pt = e.touches ? e.touches[0] : e;
      return { x: pt.clientX - rect.left, y: pt.clientY - rect.top };
    }

    function scratchTo(p) {
      ctx.lineWidth = 34;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      if (last) { ctx.moveTo(last.x, last.y); } else { ctx.moveTo(p.x - 0.1, p.y); }
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      last = p;
    }

    /* percentage of the cover that has been scratched away */
    function clearedRatio() {
      var img = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      var clear = 0, total = 0;
      for (var i = 3; i < img.length; i += 4 * 24) {   // sample every 24th pixel
        total++;
        if (img[i] < 40) clear++;
      }
      return total ? clear / total : 0;
    }

    /* The canvas is a rectangle but the visible area is clipped to a heart,
       which covers roughly 65% of it. The corners can never be scratched,
       so the threshold is set against what is actually reachable - and kept
       low, because the point is to reward a swipe, not demand a full scrub. */
    function maybeFinish() {
      if (revealed) return;
      if (clearedRatio() > 0.2) {
        revealed = true;
        canvas.classList.add('done');
        hint.classList.add('hide');
      }
    }

    function start(e) {
      if (revealed) return;
      drawing = true; last = null;
      scratchTo(pos(e));
      e.preventDefault();
    }
    function move(e) {
      if (!drawing || revealed) return;
      scratchTo(pos(e));
      if (++checkCounter % 6 === 0) maybeFinish();
      e.preventDefault();
    }
    function end() {
      if (!drawing) return;
      drawing = false; last = null;
      maybeFinish();
    }

    canvas.addEventListener('mousedown',  start);
    canvas.addEventListener('mousemove',  move);
    window.addEventListener('mouseup',    end);
    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove',  move,  { passive: false });
    window.addEventListener('touchend',   end);

    paintCover();

    var rt;
    window.addEventListener('resize', function () {
      if (revealed) return;
      clearTimeout(rt);
      rt = setTimeout(paintCover, 250);
    });
  }


  /* ============================================================
     BOOT
     ============================================================ */

  document.body.classList.add('locked');

  render();
  initMusic();
  initPetals();
  initReveal();
  initCountdown();
  initScratch();

})();
