export const STORE_CONFIG = {
  businessName: "Sumathi's Collections",
  tagline: "Fashion, Comfort & Care — Made for You & Your Family",
  description: "Explore women's apparel, sarees, Jaipur dresses, blouses, kids' wear, fine perfumes, and handmade herbal personal-care powders.",
  
  // Real business contact information
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919597008868",
  whatsappDisplayNumber: "+91 95970 08868",
  
  contactPhone: "+91 95970 08868",
  contactEmail: "sumathi.collections@gmail.com",
  location: "SPB Colony, Kumarapalayam, Namakkal, Tamil Nadu, India",
  operatingHours: "Mon - Sat: 9:00 AM - 8:30 PM | Sun: 10:00 AM - 5:00 PM",
  
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919597008868'}`
  },

  trustBadges: [
    { title: "100% Quality Assured", desc: "Handpicked premium fabrics and pure natural herbal ingredients." },
    { title: "Easy WhatsApp Order", desc: "No complex payment forms. Order directly via WhatsApp chat." },
    { title: "Personal Customer Care", desc: "Direct confirmation of stock, delivery charges, and timing from Sumathi." },
    { title: "Safe Local Delivery", desc: "Fast delivery to SPB Colony, Kumarapalayam, and across India." }
  ],

  naturalCareDisclaimer: "This product is a traditional handmade herbal powder prepared with selected natural botanical ingredients (including Hibiscus and natural flowers). It is intended solely for routine personal care and external cosmetic use. Patch test recommended prior to use. Individual results may vary."
};
