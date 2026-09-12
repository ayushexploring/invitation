/* ============================================================
   WEDDING INVITATION - CONTENT & SETTINGS
   ------------------------------------------------------------
   This is the ONLY file you need to edit for your own wedding.
   Every text has an { en: "...", hi: "..." } pair.
   en = English, hi = Hindi
   ============================================================ */

const WEDDING = {

  /* ---------- 1. BROWSER TAB / LINK PREVIEW ---------- */
  site: {
    // Shown in the browser tab and when the link is shared on WhatsApp
    title: {
      en: "Ayush & Ananya - Wedding Invitation",
      hi: "आयुष एवं अनन्या - विवाह निमंत्रण"
    },
    description: {
      en: "We are honored to invite you to our wedding celebration.",
      hi: "हम आपको अपने विवाह समारोह में सादर आमंत्रित करते हैं।"
    }
  },

  /* ---------- 2. THE COUPLE ---------- */
  couple: {
    groom: {
      name:          { en: "Ayush",                    hi: "आयुष" },
      parents:       { en: "Son of Mr. & Mrs. Sharma", hi: "श्री एवं श्रीमती शर्मा के सुपुत्र" },
      qualification: { en: "B.Tech, M.Tech",           hi: "बी.टेक, एम.टेक" },
      profession:    { en: "Software Engineer",        hi: "सॉफ़्टवेयर इंजीनियर" }
    },
    bride: {
      name:          { en: "Ananya",                      hi: "अनन्या" },
      parents:       { en: "Daughter of Mr. & Mrs. Verma", hi: "श्री एवं श्रीमती वर्मा की सुपुत्री" },
      qualification: { en: "B.Tech, MBA",                 hi: "बी.टेक, एम.बी.ए" },
      profession:    { en: "Advocate, High Court",        hi: "अधिवक्ता, उच्च न्यायालय" }
    }
  },

  /* ---------- 3. THE BIG DATE ----------
     IMPORTANT: this ONE value drives the countdown timer and
     everything else that needs the actual date/time.
     Format: YYYY-MM-DDTHH:MM:SS+05:30   (+05:30 = India Standard Time) */
  weddingDateTime: "2026-12-10T10:30:00+05:30",

  // How the date is spelled out on the page
  weddingDateText: { en: "December 10, 2026",  hi: "10 दिसम्बर, 2026" },
  weddingDayText:  { en: "Thursday",           hi: "गुरुवार" },
  weddingTimeText: { en: "10:30 AM onwards",   hi: "प्रातः 10:30 बजे से" },

  /* ---------- 4. SECTION: SCRATCH TO REVEAL ---------- */
  scratch: {
    heading: { en: "Scratch to Reveal", hi: "खुरचकर देखिए" },
    hint:    { en: "Scratch the heart with your finger", hi: "हृदय को अपनी उँगली से खुरचें" }
  },

  /* ---------- 5. SECTION: OUR FOREVER BEGINS ---------- */
  forever: {
    heading:  { en: "Our forever begins", hi: "हमारा सदा-सदा आरंभ होता है" },
    subtitle: { en: "You Are Invited",    hi: "सादर आमंत्रण" }
  },

  /* ---------- 6. SECTION: PHOTO GALLERY ----------
     Drop your photos into  assets/images/  and list the filenames here.
     Leave the list empty  ( photos: [] )  to hide the gallery entirely. */
  gallery: {
    heading: { en: "Our Moments", hi: "हमारे पल" },
    photos: [
      // { src: "assets/images/photo-1.jpg", alt: "Engagement" },
      // { src: "assets/images/photo-2.jpg", alt: "Pre-wedding shoot" },
      // { src: "assets/images/photo-3.jpg", alt: "Together" }
    ]
  },

  /* ---------- 7. SECTION: COUNTDOWN ---------- */
  countdown: {
    heading:  { en: "Counting Down to Forever", hi: "सदा-सदा की उलटी गिनती" },
    finished: { en: "Today is the day!",        hi: "आज का दिन आ गया है!" }
  },

  /* ---------- 8. SECTION: PROGRAM TIMELINE ---------- */
  timeline: {
    heading: { en: "Program Timeline", hi: "कार्यक्रम" },
    items: [
      {
        title: { en: "Guest Arrival",           hi: "अतिथि आगमन" },
        when:  { en: "Dec 10, 2026 - 10:00 AM", hi: "10 दिसम्बर, 2026 - प्रातः 10:00" },
        note:  { en: "We warmly welcome you.",  hi: "आपका हार्दिक स्वागत है।" }
      },
      {
        title: { en: "Wedding Ceremony",        hi: "विवाह संस्कार" },
        when:  { en: "Dec 10, 2026 - 10:30 AM", hi: "10 दिसम्बर, 2026 - प्रातः 10:30" },
        note:  { en: "Your gracious presence is requested.", hi: "आपकी उपस्थिति प्रार्थनीय है।" }
      },
      {
        title: { en: "Reception",              hi: "प्रीतिभोज" },
        when:  { en: "Dec 12, 2026 - 7:30 PM", hi: "12 दिसम्बर, 2026 - सायं 7:30" },
        note:  { en: "Dinner and celebration from 7:30 PM onwards.", hi: "सायं 7:30 बजे से भोज एवं उत्सव।" }
      }
    ]
  },

  /* ---------- 9. SECTION: VENUE ---------- */
  venue: {
    heading: { en: "Venue",            hi: "स्थान" },
    name:    { en: "The Grand Palace", hi: "द ग्रैंड पैलेस" },
    address: {
      en: "Apollo Bandar, Colaba,\nMumbai, Maharashtra 400001",
      hi: "अपोलो बंदर, कोलाबा,\nमुंबई, महाराष्ट्र 400001"
    },
    // Paste ANY Google Maps share link here
    mapsUrl:   "https://maps.google.com/?q=The+Taj+Mahal+Palace+Mumbai",
    mapsLabel: { en: "View on Google Maps", hi: "गूगल मैप्स पर देखें" }
  },

  /* ---------- 10. SECTION: DRESS CODE ----------
     Set  show: false  to hide this whole section. */
  dressCode: {
    show: true,
    heading: { en: "Dress Code", hi: "परिधान" },
    women: {
      label: { en: "Women", hi: "महिलाएँ" },
      text:  { en: "Elegant formal attire in pastel or jewel tones.",
               hi: "पेस्टल अथवा गहरे रंगों में सुरुचिपूर्ण पारंपरिक परिधान।" }
    },
    men: {
      label: { en: "Men", hi: "पुरुष" },
      text:  { en: "Suit or traditional formal wear.",
               hi: "सूट अथवा पारंपरिक औपचारिक परिधान।" }
    }
  },

  /* ---------- 11. SECTION: PRE-WEDDING EVENTS ----------
     Delete entries from  items  or set  show: false  to hide. */
  events: {
    show: true,
    heading: { en: "Pre-Wedding Events", hi: "विवाह पूर्व कार्यक्रम" },
    items: [
      {
        title: { en: "Mehendi",               hi: "मेहंदी" },
        when:  { en: "Dec 7, 2026 - 9:30 PM", hi: "7 दिसम्बर, 2026 - रात्रि 9:30" },
        where: { en: "At Bride's Residence",  hi: "वधू निवास पर" }
      },
      {
        title: { en: "Haldi",                 hi: "हल्दी" },
        when:  { en: "Dec 8, 2026 - 8:30 AM", hi: "8 दिसम्बर, 2026 - प्रातः 8:30" },
        where: { en: "At Groom's Residence",  hi: "वर निवास पर" }
      },
      {
        title: { en: "Sangeet",               hi: "संगीत" },
        when:  { en: "Dec 9, 2026 - 8:00 PM", hi: "9 दिसम्बर, 2026 - रात्रि 8:00" },
        where: { en: "The Grand Palace",      hi: "द ग्रैंड पैलेस" }
      }
    ]
  },

  /* ---------- 12. SECTION: INFO CARDS ----------
     Any card with  show: false  disappears from the page. */
  info: {
    transportation: {
      show: true,
      heading: { en: "Transportation", hi: "आवागमन" },
      text: {
        en: "Shuttle service will be available from the city centre to the venue. Pickup from Central Station at 7:00 PM.",
        hi: "शहर के केंद्र से कार्यक्रम स्थल तक शटल सेवा उपलब्ध रहेगी। सेंट्रल स्टेशन से सायं 7:00 बजे प्रस्थान।"
      }
    },
    accommodation: {
      show: true,
      heading: { en: "Accommodation", hi: "ठहरने की व्यवस्था" },
      text: {
        en: "Special rates at The Grand Palace (5 minutes from the venue). Use code WEDDING2026 when booking.",
        hi: "द ग्रैंड पैलेस में विशेष दरें (कार्यक्रम स्थल से 5 मिनट)। बुकिंग के समय कोड WEDDING2026 का प्रयोग करें।"
      }
    },
    gifts: {
      show: true,
      heading: { en: "Gifts", hi: "उपहार" },
      text: {
        en: "Your love, blessings and presence are the greatest gifts we could ask for.",
        hi: "आपका स्नेह, आशीर्वाद एवं उपस्थिति ही हमारे लिए सबसे बड़ा उपहार है।"
      }
    }
  },

  /* ---------- 13. CLOSING ---------- */
  closing: {
    message: {
      en: "We can't wait to\ncelebrate with you!",
      hi: "हम आपके साथ यह उत्सव\nमनाने के लिए उत्सुक हैं!"
    },
    // Leave blank to fall back to "Groom & Bride"
    signature: { en: "", hi: "" }
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

  /* ---------- 15. LANGUAGE ---------- */
  language: {
    enabled: true,   // false = English only, hides the toggle pill
    default: "en",   // "en" or "hi"
    labels: { en: "हिन्दी", hi: "English" }   // text shown ON the toggle button
  },

  /* ---------- 16. FIXED UI LABELS ---------- */
  ui: {
    tapToOpen:     { en: "Tap",             hi: "खोलें" },
    youAreInvited: { en: "You Are Invited",  hi: "सादर आमंत्रण" },
    welcome: {
      en: "We are honored to welcome you to\nthe wedding ceremony of",
      hi: "हम आपको सादर आमंत्रित करते हैं\nविवाह समारोह में"
    },
    scroll:  { en: "Scroll",  hi: "नीचे देखें" },
    days:    { en: "Days",    hi: "दिन" },
    hours:   { en: "Hours",   hi: "घंटे" },
    minutes: { en: "Minutes", hi: "मिनट" },
    seconds: { en: "Seconds", hi: "सेकंड" }
  }
};
