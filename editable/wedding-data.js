/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Edit this file to update couple names, dates, events, itinerary, venue, blessing, and contacts.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Sonam",
    brideShort: "Sonam",
    groom: "Abhishek",
    groomShort: "Abhishek",
    hashtag: "#SonamWedsAbhishek",
  },

  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their Bariksha & Ring Ceremony",
  },

  event: {
    title: "Bariksha & Ring Ceremony",
    startsAt: "2026-11-16T18:00:00+05:30",
    endsAt: "2026-11-16T23:30:00+05:30",
    dateLabel: "16 . 11 . 2026",
    dayLabel: "Monday",
    timeLabel: "06.00 PM Onwards",
    note: "Dinner & Celebrations to follow",
  },

  venue: {
    name: "Tribhuvan Palace",
    address: "GNS 48, Indira Nagar Road, Kalyanpur, Kanpur, Uttar Pradesh 208026 (Near Shakti Bakery)",
    mapsQuery: "Tribhuvan Palace, GNS 48, Indira Nagar Road, Kalyanpur, Kanpur, Uttar Pradesh 208026 Near Shakti Bakery",
    mapsUrl: "https://maps.app.goo.gl/jCJPdLeAk1onSCXx7",
    lat: 26.5037,
    lng: 80.2525,
  },

  story: [
    {
      year: "16 November",
      title: "BARIKSHA & GODH BHARAI",
      text: "06.00 PM Onwards, Tribhuvan Palace, Kanpur",
      image: "story-2",
    },
    {
      year: "16 November",
      title: "RING CEREMONY",
      text: "07.30 PM Onwards, Tribhuvan Palace, Kanpur",
      image: "story-1",
    },
    {
      year: "16 November",
      title: "CAKE - CUTTING",
      text: "08.00 PM, Tribhuvan Palace, Kanpur",
      image: "story-3",
    },
  ],

  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation: "Two souls, two families, united with love and blessings for a lifetime of joy and togetherness.",
    source: "A blessing from both families",
  },

  footer: {
    families: `With Blessings & Warm Regards,\n\nLate Mrs. Poonam Shukla & Mr. Santosh Shukla & Family\n(Bride's Family)\n\n&\n\nLate Mrs. Prema Devi Shukla & Late Mr. Shyam Gopal Shukla\n(Groom's Grandparents)\n\nMrs. Anamika Shukla & Mr. Anil Kumar Shukla & Family\n(Groom's Family)`,
    contacts: [
      { name: "Groom's Family", phone: "9455043621" },
      { name: "Groom's Family", phone: "9793140908" },
    ],
  },

  images: {
    heroArch: "./editable/assets/hero-arch.webp",
    gatePanel: "./editable/assets/gate-panel.webp",
    mapPreview: "./editable/assets/map-preview.webp",
    footerFloral: "./editable/assets/footer-floral.webp",
    story1: "./editable/assets/story-1.webp",
    story2: "./editable/assets/story-2.webp",
    story3: "./editable/assets/story-3.webp",
  },

  music: {
    src: "./editable/assets/bg.mp3",
    title: "Banke Tera Jogi",
    autoplay: true,
    loop: true,
  },
};
