import { 
  Flame, 
  Wine, 
  Sparkles, 
  Fish, 
  Beef, 
  Cookie, 
  GlassWater, 
  Crown 
} from "lucide-react";

export interface MenuItem {
  id: string;
  name: string; 
  description: string;
  price: string;
  category: "woodfire" | "seafood" | "sides" | "drinks" | "dessert";
  isSignature?: boolean;
  spiceLevel?: 1 | 2 | 3; // 1 = Mild, 2 = Medium, 3 = Authentic Jamaican Heat
  tags?: string[];
  image: string; // Dynamic path for easy updating
  imageAlt: string;
  imageCaption?: string;
}

export interface MenuCategory {
  id: "all" | "woodfire" | "seafood" | "sides" | "drinks" | "dessert";
  label: string;
  icon: any;
  description: string;
}

export const menuData = {
  hero: {
    badge: "Pimento Wood & River Smoke",
    title: "Feast Your Senses",
    subtitle:
      "Every dish is seasoned with authentic Jamaican herbs and slow-roasted over raw logwood and pimento embers. Savor the crisp mountain air and river views with every bite.",
    bgImage: "/images/menu/hero-grill-spread.jpg", // RECOMMENDED IMAGE: Overhead flat-lay of a wooden table loaded with jerk chicken, grilled lobster, festival, and colorful cocktails
  },

  categories: [
    {
      id: "all",
      label: "Full Feast",
      icon: Sparkles,
      description: "Explore the complete Street Food Saturdays culinary lineup.",
    },
    {
      id: "woodfire",
      label: "Woodfire Pit",
      icon: Flame,
      description: "Slow-smoked over pimento wood for that authentic mountain flavor.",
    },
    {
      id: "seafood",
      label: "River Seafood",
      icon: Fish,
      description: "Freshly caught lobster, snapper, and garlic butter shrimp.",
    },
    {
      id: "sides",
      label: "Sides & Bites",
      icon: Cookie,
      description: "Crispy festival, fried bammy, plantains, and roasted corn.",
    },
    {
      id: "drinks",
      label: "Craft Cocktails",
      icon: Wine,
      description: "Freshly squeezed tropical juices and overproof rum blends.",
    },
  ] as MenuCategory[],

  items: [
    // --- WOODFIRE PIT ---
    {
      id: "jerk-chicken-platter",
      name: "Golden Spring Jerk Chicken",
      description: "Quarter chicken marinated for 48 hours in Scotch bonnet and fresh pimento berries, slow-smoked over burning logwood.",
      price: "$2,200 JMD",
      category: "woodfire",
      isSignature: true,
      spiceLevel: 3,
      tags: ["Chef Special", "Woodfire Pick"],
      image: "/images/menu/jerk-chicken.png", // RECOMMENDED IMAGE: Close-up of glossy, caramelised jerk chicken quarter on parchment paper with charred skin
      imageAlt: "Golden Spring Jerk Chicken over woodfire",
    },
    {
      id: "smoked-pork-belly",
      name: "Pimento Smoked Pork Belly",
      description: "Succulent pork belly slabs with a crispy mahogany crackling skin, served with spiced pineapple reduction sauce.",
      price: "$3,400 JMD",
      category: "woodfire",
      isSignature: true,
      spiceLevel: 2,
      tags: ["Local Favorite"],
      image: "/images/menu/smoked-pork-belly.png", // RECOMMENDED IMAGE: Sliced smoked pork belly showing crisp skin and juicy layers on a wooden board
      imageAlt: "Pimento Smoked Pork Belly",
    },
    {
      id: "woodfire-bbq-ribs",
      name: "Riverfront BBQ Pork Ribs",
      description: "Fall-off-the-bone tender rack glaze-brushed with our house rum barbecue sauce right on the open grate.",
      price: "$3,800 JMD",
      category: "woodfire",
      spiceLevel: 1,
      tags: ["Glaze Pick"],
      image: "/images/menu/bbq-ribs.png", // RECOMMENDED IMAGE: Half rack of ribs glistening with barbecue glaze resting on wire grill grates
      imageAlt: "Riverfront BBQ Ribs",
    },

    // --- SEAFOOD ---
    {
      id: "grilled-stuffed-lobster",
      name: "Pimento Garlic Butter Lobster",
      description: "Fresh Caribbean spiny lobster tail split down the middle, stuffed with herb garlic butter and flame-grilled.",
      price: "$5,500 JMD",
      category: "seafood",
      isSignature: true,
      spiceLevel: 1,
      tags: ["Market Fresh", "Premium"],
      image: "/images/menu/grilled-lobster.png", // RECOMMENDED IMAGE: Whole grilled lobster tail bursting with garlic butter and fresh parsley garnishes
      imageAlt: "Grilled Garlic Butter Lobster",
    },
    {
      id: "escovitch-snapper",
      name: "Escovitch Whole Red Snapper",
      description: "Crispy fried whole snapper topped with pickled julienne carrots, onions, pimento berries, and fiery Scotch bonnet peppers.",
      price: "$4,200 JMD",
      category: "seafood",
      spiceLevel: 3,
      tags: ["Authentic Jamaican"],
      image: "/images/menu/escovitch-snapper.png", // RECOMMENDED IMAGE: Crispy fried snapper dressed in colorful pickled peppers and onions
      imageAlt: "Escovitch Whole Snapper",
    },
    {
      id: "garlic-pepper-shrimp",
      name: "Mountain Stream Pepper Shrimp",
      description: "Jumbo shrimp tossed in hot pepper butter, scallions, and thyme, cooked in a smoking skillet.",
      price: "$3,200 JMD",
      category: "seafood",
      spiceLevel: 3,
      tags: ["Spicy"],
      image: "/images/menu/pepper-shrimp.png", // RECOMMENDED IMAGE: Cast iron pan filled with sizzling orange pepper shrimp
      imageAlt: "Mountain Stream Pepper Shrimp",
    },

    // --- SIDES & BITES ---
    {
      id: "festival-basket",
      name: "Sweet Cornmeal Festivals (4pcs)",
      description: "Golden fried sweet cornmeal dough fingers—the ultimate pairing for jerk chicken and pepper shrimp.",
      price: "$600 JMD",
      category: "sides",
      spiceLevel: 1,
      tags: ["Must-Have"],
      image: "/images/menu/festivals.png", // RECOMMENDED IMAGE: Basket of golden fried festivals dusted lightly with powdered cornmeal
      imageAlt: "Sweet Cornmeal Festivals",
    },
    {
      id: "grilled-butter-corn",
      name: "Fire-Roasted Sweet Corn",
      description: "Local sweet corn roasted in husk over woodfire, slathered with coconut butter and toasted spices.",
      price: "$500 JMD",
      category: "sides",
      spiceLevel: 1,
      tags: ["Vegetarian"],
      image: "/images/menu/roasted-corn.png", // RECOMMENDED IMAGE: Charred corn cob brushed with melting herb butter
      imageAlt: "Fire-Roasted Sweet Corn",
    },
    {
      id: "pressed-bammy-triangles",
      name: "Coconut Fried Bammy",
      description: "Cassava bammy wedges soaked in rich coconut milk and pan-fried to a golden crunch.",
      price: "$700 JMD",
      category: "sides",
      spiceLevel: 1,
      tags: ["Gluten-Free Option"],
      image: "/images/menu/fried-bammy.png", // RECOMMENDED IMAGE: Crispy golden bammy triangles arranged on banana leaf
      imageAlt: "Coconut Fried Bammy",
    },

    // --- DRINKS ---
    {
      id: "golden-spring-rum-punch",
      name: "Golden Spring Signature Rum Punch",
      description: "A potent blend of Appleton Estate rum, fresh lime juice, white rum, and ruby pimento syrup.",
      price: "$1,200 JMD",
      category: "drinks",
      isSignature: true,
      tags: ["House Special"],
      image: "/images/menu/rum-punch.png", // RECOMMENDED IMAGE: Tall iced glass of red rum punch with mint sprig and orange wheel by the river
      imageAlt: "Golden Spring Rum Punch",
    },
    {
      id: "coconut-water-cooler",
      name: "Fresh Jelly Coconut Water",
      description: "Chilled natural jelly coconut chopped fresh to order right at the bar.",
      price: "$400 JMD",
      category: "drinks",
      tags: ["100% Organic"],
      image: "/images/menu/jelly-coconut.png", // RECOMMENDED IMAGE: Fresh green coconut cut open with straw inserted
      imageAlt: "Fresh Jelly Coconut Water",
    },
  ] as MenuItem[],

  // 3. Featured Platter Box Highlight
  megaPlatter: {
    title: "The Mt. James Woodfire Feast",
    subtitle: "Serves 3 - 4 Guests | Perfect for Groups",
    description: "Includes Half Jerk Chicken, 1/2 lb Smoked Pork Belly, Whole Escovitch Snapper, 6 Festivals, 4 Roasted Corns, and a Pitcher of Signature Rum Punch.",
    price: "$14,500 JMD",
    image: "/images/menu/mega-platter.png", // RECOMMENDED IMAGE: Huge wooden sharing tray loaded with all meats, seafood, and sides
  },
};