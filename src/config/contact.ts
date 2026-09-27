const RAW_NUMBER = "18764140016"; // Digits only with country code

export const contact = {
  email: "streetfoodsaturdays@gmail.com",

  // Beautiful UI display
  phone: "+1 (876) 414-0016",

  // Click-to-call link for phones
  phoneHref: `tel:+${RAW_NUMBER}`,

  // WhatsApp click-to-chat link
  whatsapp: "+1 (876) 414-0016",
  whatsappHref: `https://wa.me/${RAW_NUMBER}`,

  address: "Mt. James District (by the bridge), Golden Spring, West Rural St. Andrew, Jamaica",

  maps: "https://maps.apple.com/place?map=hybrid&coordinate=18.118940%2C-76.778190&name=Mt%20James%20District%20Golden%20Spring%20West%20Rural%20St%20Andrews",

  businessHours: {
    weekdays: "By Online Reservation Only",
    saturday: "Event Days: 11:00 AM - 4:00 PM (1st Seating 11AM | 2nd Seating 2PM)",
    sunday: "Select Event Days Only (By Reservation)",
  },
};

export default contact;