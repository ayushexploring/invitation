/* ============================================================
   WEDDING INVITATION - CONTENT & SETTINGS
   ------------------------------------------------------------
   This is the ONLY file you need to edit.
   Every value below is plain text - just change what is inside
   the quotes, and keep the comma at the end of the line.
   ============================================================ */

const WEDDING = {

  /* ---------- 1. BROWSER TAB / LINK PREVIEW ---------- */
  site: {
    // Shown in the browser tab and when the link is shared on WhatsApp
    title:       "Ayush & Yashika - Wedding Invitation",
    description: "We are honored to invite you to our wedding celebration."
  },

  /* ---------- 2. THE OPENING SCREEN BACKGROUND ----------
     Leave image as "" and the hero uses the built-in garden-at-dusk
     gradient. To use your own photo instead, put it in assets/images/
     and set the path here, e.g. "assets/images/hero.jpg".
     Choose a DARK photo - the names are printed in white over it.
     Raise overlay (0 to 1) to darken a photo that is too bright. */
  hero: {
    image:   "assets/images/hero.jpg",
    overlay: 0.42
  },

  /* ---------- 3. THE COUPLE ---------- */
  couple: {
    groom: {
      name:    "Ayush Verma",
      parents: "Son of Mr. & Mrs. Verma"
    },
    bride: {
      name:    "Yashika Sharma",
      parents: "Daughter of Mr. & Mrs. Sharma"
    }
  },

  /* ---------- 4. THE BIG DATE ----------
     IMPORTANT: this ONE value drives the countdown timer.
     Format: YYYY-MM-DDTHH:MM:SS+05:30   (+05:30 = India Standard Time) */
  weddingDateTime: "2026-12-04T17:00:00+05:30",

  // How the date is spelled out on the page. Keep it in step with the above.
  weddingDateText: "December 4 & 5, 2026",
  weddingDayText:  "Friday & Saturday",

  // Used for the "Save the Date" calendar file
  calendar: {
    title:    "Wedding of Ayush & Yashika",
    hours:    4,
    location: "Naturoville Wellness Resort, Dehradun Road, Rishikesh, Uttarakhand"
  },

  /* ---------- 5. SECTION: SCRATCH TO REVEAL ---------- */
  scratch: {
    heading: "Scratch to Reveal",
    hint:    "Scratch the heart with your finger",
    // Text on the button that saves the date to the guest's calendar
    saveLabel: "SAVE THE DATE"
  },

  /* ---------- 6. SECTION: PHOTO GALLERY ----------
     Drop your photos into  assets/images/  and list the filenames here.
     Leave the list empty  ( photos: [] )  to hide the gallery entirely.
     This renders as a collage, not a plain grid: the first photo is
     always the big heart-masked one, and every photo after it cycles
     through a tall pair, a wide banner, then a square pair - repeating
     for however many you add. Six photos (this one plus five more)
     fills that pattern exactly once with nothing left over, which is
     why six is the number that looks most deliberate - but any count
     works, including just one or two. */
  gallery: {
    heading: "Our Moments",
    /* Order here IS the layout - position decides which tile each photo
       becomes. Current roles, in order:
         1 heart  2 tall  3 tall  4 wide banner  5 square  6 square  7 tall */
    photos: [
      { src: "assets/images/photo-1.jpg", alt: "Ayush and Yashika on a hill road" },
      { src: "assets/images/photo-3.jpg", alt: "Ayush and Yashika among the pines" },
      { src: "assets/images/photo-4.jpg", alt: "Ayush and Yashika in the mountains" },
      { src: "assets/images/photo-5.jpg", alt: "Ayush and Yashika at the beach" },
      { src: "assets/images/photo-2.jpg", alt: "Ayush and Yashika together" },
      { src: "assets/images/photo-6.jpg", alt: "Ayush and Yashika on the balcony" },
      { src: "assets/images/photo-7.jpg", alt: "Ayush and Yashika at a cafe" }
    ]
  },

  /* ---------- 7. SECTION: COUNTDOWN ---------- */
  countdown: {
    heading:  "Counting Down to Forever",
    finished: "Today is the day!"
  },

  /* ---------- 8. SECTION: PROGRAM TIMELINE ---------- */
  timeline: {
    heading: "Program Timeline",
    items: [
      {
        title: "Haldi",
        when:  "Dec 5, 2026 - 9:00 AM",
        note:  "Join us for a morning of turmeric, laughter and love."
      },
      {
        title: "Baarat",
        when:  "Dec 5, 2026 - 6:00 PM",
        note:  "Dance with us as the baarat arrives."
      }
    ]
  },

  /* ---------- 9. SECTION: VENUE ---------- */
  venue: {
    heading: "Venue",
    name:    "Naturoville Wellness Resort",
    address: "Dehradun Road,\nRishikesh, Uttarakhand",
    // Paste ANY Google Maps share link here
    mapsUrl:   "https://maps.google.com/?q=Naturoville+Wellness+Resort+Dehradun+Road+Rishikesh+Uttarakhand",
    // Google Maps > Share > Embed a map: paste just the src="..." URL
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d78.1666201!3d30.1156692!2m2!1f0!2f90!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x39093bf76b9eb5b3%3A0x553f170729e3fc0d!2sNaturoville%20Wellness%20Resort!4v1792871216215",
    mapsLabel: "View on Google Maps"
  },

  /* ---------- 11. SECTION: PRE-WEDDING EVENTS ----------
     Delete entries from  items  or set  show: false  to hide. */
  events: {
    show: true,
    heading: "Pre-Wedding Events",
    items: [
      {
        title: "Engagement",
        when:  "Dec 4, 2026 - 5:00 PM",
        where: "Naturoville Wellness Resort"
      },
      {
        title: "Sangeet",
        when:  "Dec 4, 2026 - 6:00 PM",
        where: "Naturoville Wellness Resort"
      }
    ]
  },

  /* ---------- 12. SECTION: INFO CARDS ----------
     Any card with  show: false  disappears from the page. */
  info: {
    transportation: {
      show: true,
      heading: "Transportation",
      text: "Naturoville Wellness Resort is on Dehradun Road in Rishikesh, close to Jolly Grant Airport."
    },
    accommodation: {
      show: true,
      heading: "Accommodation",
      text: "Rooms are arranged at Naturoville Wellness Resort for guests travelling in. Please let us know your dates."
    },
    gifts: {
      show: true,
      heading: "Gifts",
      text: "Your love, blessings and presence are the greatest gifts we could ask for."
    }
  },

  /* ---------- 13. CLOSING ---------- */
  closing: {
    message: "We can't wait to\ncelebrate with you!",
    // Leave blank to fall back to "Groom & Bride"
    signature: "Ayush & Yashika"
  },

  /* ---------- 14. BACKGROUND MUSIC ----------
     Put an .mp3 in  assets/audio/  and set the path below.
     Set  enabled: false  to remove the speaker button entirely.
     Music starts when the guest taps the wax seal (browsers block
     autoplay before a tap, so this is the only reliable moment). */
  music: {
    // Turn this on AFTER you have put an mp3 at the path below.
    enabled: false,
    src: "assets/audio/music.mp3",
    startMuted: false
  },

  /* ---------- 15. FIXED UI LABELS ---------- */
  ui: {
    tapToOpen:     "Tap",
    youAreInvited: "You Are Invited",
    welcome:       "We are honored to welcome you to\nthe wedding ceremony of",
    scroll:        "Scroll",
    days:          "Days",
    hours:         "Hours",
    minutes:       "Minutes",
    seconds:       "Seconds"
  }
};
