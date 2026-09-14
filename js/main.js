/* ============================================================
   WEDDING INVITATION - BEHAVIOUR
   You should not need to edit this file. All content lives
   in js/data.js.
   ============================================================ */

(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- resolve "venue.name" against WEDDING ---------- */
  function get(path) {
    return path.split('.').reduce(function (o, k) {
      return (o == null) ? undefined : o[k];
    }, WEDDING);
  }

  /* ---------- a missing value renders as empty, never "undefined" ---------- */
  function t(v) {
    return (v == null) ? '' : String(v);
  }


  /* ============================================================
     RENDER - fills every data-field / data-ui in the document
     ============================================================ */

  function render() {
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

    renderHeroImage();
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
  }

  /* Swap the built-in gradient for the couple's own photo, if they set one.
     The dark overlay rides on top so white text stays readable whatever
     the photo looks like. */
  function renderHeroImage() {
    var cfg = WEDDING.hero || {};
    if (!cfg.image) return;
    var bg = $('.hero-bg');
    if (!bg) return;
    var shade = Math.min(Math.max(Number(cfg.overlay) || 0, 0), 1);
    bg.style.backgroundImage =
      'linear-gradient(rgba(18,14,22,' + shade + '), rgba(12,10,18,' + (shade + 0.18) + ')),' +
      'url("' + cfg.image + '")';
    bg.style.backgroundSize = 'cover, cover';
    bg.style.backgroundPosition = 'center, center';
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

  /* A collage, not a uniform grid: the first photo is the heart-masked
     hero (full width), then tiles cycle through a tall portrait pair,
     a full-width wide banner, and a square pair - repeating for however
     many photos follow. Six photos (the hero plus one full cycle) tiles
     perfectly with nothing left over; other counts still lay out fine,
     see the "lone tile" handling below. */
  var GALLERY_CYCLE = ['half-tall', 'half-tall', 'wide', 'half-sq', 'half-sq'];

  function renderGallery() {
    var sec  = $('#gallerySec');
    var grid = $('#galleryGrid');
    var photos = WEDDING.gallery.photos || [];
    sec.hidden = photos.length === 0;
    if (!photos.length) return;
    grid.innerHTML = '';

    photos.forEach(function (p, i) {
      var role = (i === 0) ? 'hero' : GALLERY_CYCLE[(i - 1) % GALLERY_CYCLE.length];
      var fig = document.createElement('figure');
      fig.className = 'g-' + role;
      var img = document.createElement('img');
      img.src = p.src;
      img.alt = p.alt || '';
      img.loading = 'lazy';
      fig.appendChild(img);
      grid.appendChild(fig);
    });

    /* A half-width tile is left alone in its row only when it is the
       very last photo AND it was meant to be the FIRST half of its pair
       (cycle position 0 or 3) - its partner would have been the next
       photo, which does not exist. Widen and center it instead of
       leaving an empty gap beside it. */
    var lastIndex = photos.length - 1;
    if (lastIndex > 0) {
      var relIndex = (lastIndex - 1) % GALLERY_CYCLE.length;
      if (relIndex === 0 || relIndex === 3) {
        grid.lastElementChild.classList.add('g-lone');
      }
    }
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
     SAVE THE DATE
     Builds a calendar file in the browser and hands it to the guest.
     No server involved - the whole file is a few hundred bytes of text.
     ============================================================ */

  function initSaveDate() {
    var btn = $('#saveDateBtn');
    if (!btn) return;

    var start = new Date(WEDDING.weddingDateTime);
    if (isNaN(start.getTime())) { btn.hidden = true; return; }

    /* iCalendar wants UTC as YYYYMMDDTHHMMSSZ */
    function stamp(d) {
      return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    }
    /* Long values must be folded at 75 octets, and , ; \ are escaped. */
    function esc(s) {
      return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;')
                      .replace(/,/g, '\\,').replace(/\n/g, '\\n');
    }

    btn.addEventListener('click', function () {
      var cal  = WEDDING.calendar || {};
      var hours = Number(cal.hours) || 3;
      var end  = new Date(start.getTime() + hours * 3600 * 1000);
      var name = t(cal.title) ||
                 (t(WEDDING.couple.groom.name) + ' & ' + t(WEDDING.couple.bride.name));

      var lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//wedding-invitation//EN',
        'CALSCALE:GREGORIAN',
        'BEGIN:VEVENT',
        'UID:' + start.getTime() + '@wedding-invitation',
        'DTSTAMP:' + stamp(new Date()),
        'DTSTART:' + stamp(start),
        'DTEND:' + stamp(end),
        'SUMMARY:' + esc(name),
        'LOCATION:' + esc(t(cal.location) || t(WEDDING.venue.name)),
        'DESCRIPTION:' + esc(t(WEDDING.site.description)),
        'END:VEVENT',
        'END:VCALENDAR'
      ];

      var blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
      var url  = URL.createObjectURL(blob);
      var a    = document.createElement('a');
      a.href = url;
      a.download = 'save-the-date.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);

      /* brief acknowledgement - the download itself is invisible on phones */
      btn.classList.add('saved');
      setTimeout(function () { btn.classList.remove('saved'); }, 2200);
    });
  }


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
     FALLING PETALS
     ============================================================ */

  function initPetals() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var box = $('#petals');
    var n = window.innerWidth < 520 ? 14 : 20;
    for (var i = 0; i < n; i++) {
      var p = document.createElement('span');
      p.className = 'petal';
      /* Two nested animations: the wrapper falls, the petal inside sways
         and tumbles. Each on its own clock, so no two petals match. */
      var inner = document.createElement('i');
      p.appendChild(inner);

      p.style.left              = (Math.random() * 100) + 'vw';
      p.style.animationDuration = (11 + Math.random() * 11) + 's';
      p.style.animationDelay    = (-Math.random() * 20) + 's';

      inner.style.animationDuration = (2.6 + Math.random() * 3.4) + 's';
      inner.style.animationDelay    = (-Math.random() * 6) + 's';
      inner.style.setProperty('--sway', (14 + Math.random() * 26) + 'px');
      inner.style.setProperty('--spin', (Math.random() < 0.5 ? -1 : 1) * (180 + Math.random() * 360) + 'deg');

      var s = 7 + Math.random() * 8;
      inner.style.width  = s + 'px';
      inner.style.height = s + 'px';
      inner.style.opacity = 0.26 + Math.random() * 0.38;
      box.appendChild(p);
    }
  }


  /* ============================================================
     HERO PARALLAX + SCROLL STATE
     ============================================================ */

  function initScrollEffects() {
    var heroBg = $('.hero-bg');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var ticking = false;

    /* The background already animates `transform` (the slow drift) and the
       arch uses `transform` for its entrance, so parallax is written to the
       separate `translate` property instead. The two compose rather than
       overwrite each other. Browsers without it simply get no parallax. */
    function frame() {
      ticking = false;
      var y = window.scrollY || 0;

      /* mark the first movement so the scroll cue can fade away */
      document.body.classList.toggle('scrolled', y > 24);

      if (reduce || !heroBg) return;

      /* only while the hero is still on screen - past that it is wasted work */
      var vh = window.innerHeight;
      if (y < vh * 1.3) {
        heroBg.style.translate = '0 ' + ((y / vh) * 18).toFixed(2) + '%';
      }
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    }, { passive: true });

    frame();
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

    /* Only touch the DOM when a digit actually changes, and give it a small
       lift as it does - a whole grid re-rendering every second reads as noise. */
    function set(el, value) {
      if (el.textContent === value) return;
      el.textContent = value;
      el.classList.add('tick');
      setTimeout(function () { el.classList.remove('tick'); }, 220);
    }

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        grid.hidden = true;
        done.hidden = false;
        clearInterval(timer);
        return;
      }
      var sec = Math.floor(diff / 1000);
      set(els.d, String(Math.floor(sec / 86400)));
      set(els.h, pad(Math.floor(sec / 3600) % 24));
      set(els.m, pad(Math.floor(sec / 60) % 60));
      set(els.s, pad(sec % 60));
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
  initSaveDate();
  initMusic();
  initPetals();
  initReveal();
  initScrollEffects();
  initCountdown();
  initScratch();

})();
