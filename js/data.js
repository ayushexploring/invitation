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
      en: "Ayush & Yashika - Wedding Invitation",
      hi: "आयुष एवं यशिका - विवाह निमंत्रण"
    },
    description: {
      en: "We are honored to invite you to our wedding celebration.",
      hi: "हम आपको अपने विवाह समारोह में सादर आमंत्रित करते हैं।"
    }
  },

  /* ---------- 2. THE COUPLE ---------- */
  couple: {
    groom: {
      name:    { en: "Ayush Verma",             hi: "आयुष वर्मा" },
      parents: { en: "Son of Mr. & Mrs. Verma", hi: "श्री एवं श्रीमती वर्मा के सुपुत्र" }
    },
    bride: {
      name:    { en: "Yashika Sharma",                hi: "यशिका शर्मा" },
      parents: { en: "Daughter of Mr. & Mrs. Sharma", hi: "श्री एवं श्रीमती शर्मा की सुपुत्री" }
    }
  },

  /* ---------- 3. THE BIG DATE ----------
     IMPORTANT: this ONE value drives the countdown timer and
     everything else that needs the actual date/time.
     Format: YYYY-MM-DDTHH:MM:SS+05:30   (+05:30 = India Standard Time) */
  weddingDateTime: "2026-12-11T10:30:00+05:30",

  // How the date is spelled out on the page
  weddingDateText: { en: "December 11, 2026",  hi: "11 दिसम्बर, 2026" },
  weddingDayText:  { en: "Friday",             hi: "शुक्रवार" },
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
        when:  { en: "Dec 11, 2026 - 10:00 AM", hi: "11 दिसम्बर, 2026 - प्रातः 10:00" },
        note:  { en: "We warmly welcome you.",  hi: "आपका हार्दिक स्वागत है।" }
      },
      {
        title: { en: "Wedding Ceremony",        hi: "विवाह संस्कार" },
        when:  { en: "Dec 11, 2026 - 10:30 AM", hi: "11 दिसम्बर, 2026 - प्रातः 10:30" },
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
    name:    { en: "Aloha on the Ganges", hi: "आलोहा ऑन द गंगेस" },
    address: {
      en: "Rishikesh,\nUttarakhand",
      hi: "ऋषिकेश,\nउत्तराखंड"
    },
    // Paste ANY Google Maps share link here
    mapsUrl:   "https://maps.google.com/?q=Aloha+on+the+Ganges+Rishikesh",
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
        when:  { en: "Dec 8, 2026 - 9:30 PM", hi: "8 दिसम्बर, 2026 - रात्रि 9:30" },
        where: { en: "At Bride's Residence",  hi: "वधू निवास पर" }
      },
      {
        title: { en: "Haldi",                 hi: "हल्दी" },
        when:  { en: "Dec 9, 2026 - 8:30 AM", hi: "9 दिसम्बर, 2026 - प्रातः 8:30" },
        where: { en: "At Groom's Residence",  hi: "वर निवास पर" }
      },
      {
        title: { en: "Sangeet",               hi: "संगीत" },
        when:  { en: "Dec 10, 2026 - 8:00 PM", hi: "10 दिसम्बर, 2026 - रात्रि 8:00" },
        where: { en: "Aloha on the Ganges",   hi: "आलोहा ऑन द गंगेस" }
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
        en: "Rishikesh is about a 45 minute drive from Jolly Grant Airport, Dehradun. Do tell us if you need help arranging a pickup.",
        hi: "ऋषिकेश, जॉली ग्रांट हवाई अड्डा, देहरादून से लगभग 45 मिनट की दूरी पर है। आने-जाने में सहायता हेतु हमें अवश्य बताएँ।"
      }
    },
    accommodation: {
      show: true,
      heading: { en: "Accommodation", hi: "ठहरने की व्यवस्था" },
      text: {
        en: "Rooms are arranged at Aloha on the Ganges for guests travelling in. Please let us know your dates.",
        hi: "बाहर से आने वाले अतिथियों हेतु आलोहा ऑन द गंगेस में ठहरने की व्यवस्था है। कृपया अपनी तिथियाँ बताएँ।"
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
    signature: { en: "Ayush & Yashika", hi: "आयुष एवं यशिका" }
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
