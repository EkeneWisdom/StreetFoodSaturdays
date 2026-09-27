import { 
  Flame, 
  Waves, 
  Music, 
  Sun, 
  Moon, 
  Sparkles, 
  Heart, 
  Utensils, 
  Volume2,
  Smile
} from "lucide-react";

export interface ExperiencePhase {
  id: string;
  timeframe: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  highlights: string[];
  image: string; // Dynamic path for easy updating
  imageAlt: string;
}

export interface VibePillar {
  title: string;
  description: string;
  icon: any;
  tag: string;
  bgImage: string;
}

export const experienceData = {
  hero: {
    badge: "The Saturday Ritual",
    title: "More Than Food. It’s A Sanctuary.",
    subtitle:
      "Lose track of time where crystal-clear spring waters meet authentic woodfire smoke. An open-air, multi-sensory gathering in the heart of Golden Spring, Mt. James.",
    bgImage: "/images/experience/hero-golden-hour.png", // RECOMMENDED IMAGE: Wide panoramic shot of guests dining by the river at dusk with ambient string lights reflecting on the water
  },

  // 1. Day-to-Night Sensory Journey Timeline 
  timeline: [
    {
      id: "afternoon-chill",
      timeframe: "12:00 PM – 3:00 PM",
      badge: "The River Dip",
      title: "Cool Waters & Chill Grooves",
      subtitle: "Kick off your Saturday by the river bank",
      description:
        "Arrive early to claim your riverside table. Ease into the weekend with fresh jelly coconut water, lounge in natural stream pools, and soak up smooth roots reggae.",
      icon: Sun,
      highlights: [
        "Crystal spring water wading",
        "Acoustic & dub vinyl selections",
        "Fresh coconut & appetizer round",
      ],
      image: "/images/experience/afternoon-river.png", // RECOMMENDED IMAGE: Guests relaxing in shallow river water holding fresh jelly coconuts with lush green backdrop
      imageAlt: "Afternoon river lounging at Golden Spring",
    },
    {
      id: "peak-savor",
      timeframe: "3:00 PM – 6:30 PM",
      badge: "The Woodfire Rush",
      title: "Sizzle, Smoke & Savor",
      subtitle: "When the grills are in full swing",
      description: "The aroma of burning pimento wood fills the air as signature platters roll out. Gather around sharing trays, sip cold rum punches, and enjoy live DJ sets.",
      icon: Flame,
      highlights: [
        "Freshly chopped jerk & lobster platters",
        "High-energy afro-dancehall beats",
        "Craft rum punch pitchers",
      ],
      image: "/images/experience/peak-grill.png", // RECOMMENDED IMAGE: Chefs plating glowing jerk platters next to smiling guests around a long wooden table
      imageAlt: "Peak dinner hour woodfire feast",
    },
    {
      id: "dusk-glow",
      timeframe: "6:30 PM Till Late",
      badge: "Nightfall Vibe",
      title: "Starlight & Ember Glow",
      subtitle: "Where Saturdays turn magical",
      description:
        "As the sun sets over Mt. James, string lights illuminate the riverside. The bass gets warmer, the pit fires glow, and the gathering turns into an open-air celebration.",
      icon: Moon,
      highlights: [
        "Fairylight canopy river illumination",
        "Nighttime cocktail bar & lounge",
        "Warm bonfire pit gathering",
      ],
      image: "/images/experience/night-glow.png", // RECOMMENDED IMAGE: Night scene with warm string lights glowing over river tables under a starry sky
      imageAlt: "Evening atmosphere at Street Food Saturdays",
    },
  ] as ExperiencePhase[],

  // 2. Pillars of the Atmosphere
  pillars: [
    {
      title: "Pimento Smoke & Fire",
      subtitle: "Authentic Live-Fire Cooking",
      description: "No gas, no short cuts. Raw logwood and pimento coals imbue deep, unforgettable flavors into every cut.",
      icon: Flame,
      tag: "Culinary Art",
      bgImage: "/images/experience/pillar-fire.png", // RECOMMENDED IMAGE: Close up shot of glowing red embers with smoke wafting
    },
    {
      title: "Natural Spring Stream",
      subtitle: "Cool Mountain Waters",
      description: "Pure water flowing straight from Mt. James. Dip your feet in between courses to stay completely refreshed.",
      icon: Waves,
      tag: "Nature's Spa",
      bgImage: "/images/experience/pillar-river.png", // RECOMMENDED IMAGE: Crystal clear water rushing over smooth river rocks
    },
    {
      title: "Curated Island Soundscape",
      subtitle: "Roots, Reggae & Afro-Beats",
      description: "Handpicked local selectors set the mood with a balanced audio experience—loud enough to dance, soft enough to talk.",
      icon: Music,
      tag: "Sonic Vibe",
      bgImage: "/images/experience/pillar-dj.png", // RECOMMENDED IMAGE: DJ turntable setup on wooden table with river backdrop
    },
  ],

  // 3. Audio & Mood Preview Quote
  quote: {
    text: "You don't just eat at Street Food Saturdays. You feel the river current under your toes, taste the woodfire smoke, and lose all sense of weekday stress.",
    speaker: "Regular Saturday Guest",
  },
};