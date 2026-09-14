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
  weddingDateTime: "2026-12-11T10:30:00+05:30",

  // How the date is spelled out on the page. Keep it in step with the above.
  weddingDateText: "December 11, 2026",
  weddingDayText:  "Friday",
  weddingTimeText: "10:30 AM onwards",

  // Used for the "Save the Date" calendar file
  calendar: {
    title:    "Wedding of Ayush & Yashika",
    hours:    4,
    location: "Pleasant Tree Hotels, Jamniwala, Guniyal Gaon, Dehradun, Uttarakhand"
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
     Leave the list empty  ( photos: [] )  to hide the gallery entirely. */
  gallery: {
    heading: "Our Moments",
    photos: [
      { src: "assets/images/photo-1.jpg", alt: "Ayush and Yashika in the hills" },
      { src: "assets/images/photo-2.jpg", alt: "Ayush and Yashika together" }
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
        title: "Guest Arrival",
        when:  "Dec 11, 2026 - 10:00 AM",
        note:  "We warmly welcome you."
      },
      {
        title: "Wedding Ceremony",
        when:  "Dec 11, 2026 - 10:30 AM",
        note:  "Your gracious presence is requested."
      },
      {
        title: "Reception",
        when:  "Dec 12, 2026 - 7:30 PM",
        note:  "Dinner and celebration from 7:30 PM onwards."
      }
    ]
  },

  /* ---------- 9. SECTION: VENUE ---------- */
  venue: {
    heading: "Venue",
    name:    "Pleasant Tree Hotels",
    address: "Near Abhimanyu Cricket Academy, Jamniwala,\nGuniyal Gaon, Dehradun, Uttarakhand 248001",
    // Paste ANY Google Maps share link here
    mapsUrl:   "https://maps.google.com/?q=Pleasant+Tree+Hotels+Jamniwala+Guniyal+Gaon+Dehradun+Uttarakhand",
    mapsLabel: "View on Google Maps"
  },

  /* ---------- 10. SECTION: DRESS CODE ----------
     Set  show: false  to hide this whole section. */
  dressCode: {
    show: true,
    heading: "Dress Code",
    women: {
      label: "Women",
      text:  "Elegant formal attire in pastel or jewel tones."
    },
    men: {
      label: "Men",
      text:  "Suit or traditional formal wear."
    }
  },

  /* ---------- 11. SECTION: PRE-WEDDING EVENTS ----------
     Delete entries from  items  or set  show: false  to hide. */
  events: {
    show: true,
    heading: "Pre-Wedding Events",
    items: [
      {
        title: "Mehendi",
        when:  "Dec 8, 2026 - 9:30 PM",
        where: "At Bride's Residence"
      },
      {
        title: "Haldi",
        when:  "Dec 9, 2026 - 8:30 AM",
        where: "At Groom's Residence"
      },
      {
        title: "Sangeet",
        when:  "Dec 10, 2026 - 8:00 PM",
        where: "Pleasant Tree Hotels"
      }
    ]
  },

  /* ---------- 12. SECTION: INFO CARDS ----------
     Any card with  show: false  disappears from the page. */
  info: {
    transportation: {
      show: true,
      heading: "Transportation",
      text: "Pleasant Tree Hotels is close to Dehradun's Jolly Grant Airport, on the road toward Mussoorie. Do tell us if you need help arranging a pickup."
    },
    accommodation: {
      show: true,
      heading: "Accommodation",
      text: "Rooms are arranged at Pleasant Tree Hotels for guests travelling in. Please let us know your dates."
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
