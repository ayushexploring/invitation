# Wedding Invitation

A single-page, fully static wedding invitation website. Guests open the link on
their phone, tap a wax seal, the envelope opens, and the invitation scrolls.

No backend, no build step, no dependencies. Just HTML, CSS and one JS file.

---

## What's on the page

| Section | Notes |
|---|---|
| Envelope opening screen | Tap the gold wax seal to open. Starts the music. |
| Hero | Both names, parents, qualifications, profession |
| Scratch to Reveal | Scratch the heart with a finger to uncover the date |
| Our forever begins | Animated heart outline + the date |
| Photo gallery | Optional — hidden until you add photos |
| Countdown | Live ticking countdown to the ceremony |
| Program Timeline | Arrival / ceremony / reception |
| Venue | Address + a "View on Google Maps" button |
| Dress Code | Optional |
| Pre-Wedding Events | Mehendi / Haldi / Sangeet — optional |
| Transportation, Accommodation, Gifts | Each optional |
| Closing | Sign-off message |

Floating controls: **music toggle** (top-right) and **English / हिन्दी toggle**
(bottom-left). The language choice is remembered on that guest's phone.

---

## 1. Put in your own details

**Edit `js/data.js` — that is the only file you need to touch.**

Every piece of text is written twice, once per language:

```js
name: { en: "Ayush", hi: "आयुष" },
```

Change both. If you don't want Hindi at all, set this near the bottom of the file:

```js
language: {
  enabled: false,     // hides the toggle, English only
  ...
}
```

### The date

One value drives the countdown:

```js
weddingDateTime: "2026-09-10T10:30:00+05:30",
```

`+05:30` is India Standard Time — leave it as-is unless you're marrying in
another timezone. The human-readable date shown on the page is separate:

```js
weddingDateText: { en: "September 10, 2026", hi: "10 सितम्बर, 2026" },
```

Keep those two in agreement.

### Hiding sections

Any section with a `show` flag can be switched off:

```js
dressCode: { show: false, ... }
```

For the gallery, leave `photos: []` empty and the whole section disappears.

---

## 2. Add your photos (optional)

Drop images into `assets/images/`, then list them in `js/data.js`:

```js
gallery: {
  heading: { en: "Our Moments", hi: "हमारे पल" },
  photos: [
    { src: "assets/images/photo-1.jpg", alt: "Engagement" },
    { src: "assets/images/photo-2.jpg", alt: "Pre-wedding shoot" }
  ]
}
```

The **first** photo is displayed inside a heart shape and spans the full width;
the rest fall into a two-column grid.

**Resize before uploading.** Anything above ~1200px wide is wasted on a phone
and makes the page slow on mobile data. Aim for under 300 KB per photo.

### WhatsApp link preview

When you share the link, WhatsApp looks for `assets/images/preview.jpg`.
Add one (1200×630, under 300 KB) and your invite gets a proper preview card.

---

## 3. Add background music (optional)

Put an `.mp3` at `assets/audio/music.mp3`. It starts when the guest taps the
seal — phones block audio before a tap, so that's the only reliable moment.

To turn the feature off entirely, in `js/data.js`:

```js
music: { enabled: false, ... }
```

To have it start silent (guest taps the speaker to play): `startMuted: true`.

> Use music you have the right to use. A copyrighted film song on a public page
> is a real risk of a takedown, and the site is public once it's on Pages.

---

## 4. Change the hero background

The hero is a CSS gradient (night garden) by default. To use a photo, open
`css/style.css`, find `.hero-bg`, and replace the `background:` line with:

```css
background: url("../assets/images/hero.jpg") center/cover;
```

Use a **dark** image — the names are printed in white over it.

---

## 5. Preview it locally

Open a terminal in this folder and run:

```bash
python -m http.server 5500
```

Then visit <http://localhost:5500>.

Opening `index.html` by double-clicking mostly works, but a local server is
closer to the real thing.

### If the page doesn't load

Usually the port is already taken by something else. The server prints
`Address already in use` — or worse, another program answers and you get a
blank page. Just pick a different number:

```bash
python -m http.server 5501
```

To see what is holding a port on Windows:

```bash
netstat -ano | findstr :5500
```

Stop the server with `Ctrl+C` in that terminal.

### Test it the way your guests will see it

In Chrome: `F12` → click the phone icon (device toolbar) → pick a phone size.
The scratch-off needs a touch or a click-and-drag.

---

## 6. Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Wedding invitation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then, once, in the repo on github.com:

**Settings → Pages → Build and deployment → Source → "GitHub Actions"**

That's it. `.github/workflows/deploy.yml` publishes on every push to `main`.
The first deploy takes a minute or two; watch it under the **Actions** tab.

Your link will be:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

### Making changes later

Edit `js/data.js`, then:

```bash
git add .
git commit -m "Update venue"
git push
```

The site updates itself in about a minute. Tell guests to pull down to refresh
if they had it open.

### A shorter link

If you own a domain, **Settings → Pages → Custom domain**. Otherwise, name the
repo something short — `github.com/ayush/wedding` gives you
`ayush.github.io/wedding`, which reads fine in a WhatsApp message.

---

## Before you send the link

- [ ] Both names, parents' names and spellings are correct
- [ ] `weddingDateTime` and `weddingDateText` agree with each other
- [ ] The Google Maps link opens the right place
- [ ] Every date in the timeline and events list is right
- [ ] Opened it on a real phone, not just the desktop browser
- [ ] Checked the Hindi toggle — no untranslated English left behind
- [ ] Photos are resized (page loads fast on mobile data)

> **The page is public.** Anyone with the URL can open it, and GitHub Pages
> repos are public on the free tier. Don't put your home address, phone numbers
> or anything you wouldn't hand to a stranger on it.

---

## File layout

```
index.html              page structure
css/style.css           all styling
js/data.js              >>> your content goes here <<<
js/main.js              envelope, scratch, countdown, language, music
assets/images/          your photos
assets/audio/           your music
.github/workflows/      auto-deploy to GitHub Pages
.nojekyll               tells Pages to serve files as-is
```
