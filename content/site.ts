/**
 * Words for the Rishi Coffee site.
 *
 * Change the text here, save, and refresh the page.
 * Photos for the big sections are listed here too.
 * The community photo grid is in content/gallery.ts.
 *
 * The story is a short first draft from what Rishi has shared.
 * Edit it freely. Don't add dates or details that aren't true.
 */

export const instagramUrl = "https://instagram.com/rishicoffee";
export const instagramHandle = "@rishicoffee";

export const nav = [
  { href: "#bottle", label: "the bottle" },
  { href: "#story", label: "our story" },
  { href: "#lineup", label: "lineup" },
  { href: "#community", label: "community" },
];

export const taglines = [
  "small batch. big flavor.",
  "real ingredients. real good coffee.",
  "small batch. made for you.",
  "made in chicago",
  "coffee time.",
  "small batch. bottled by rishi",
];

export const hero = {
  eyebrow: "small batch. bottled by rishi",
  titleLead: "real ingredients.",
  titleRest: "real good coffee.",
  lede: "a vanilla latte in a square 12oz bottle. made at home in chicago, black cap on, and handed to friends and family.",
  cta: "drops coming soon",
  image: "/images/hero-spilled-milk.jpg",
  alt: "A Rishi Coffee bottle in sunlit spilled milk, with a candle and a lake-view living room behind it.",
};

export const bottle = {
  index: "01",
  kicker: "the bottle",
  title: "vanilla latte",
  lede: "milk, espresso, and homemade vanilla syrup. that's the short list printed on the label. one square bottle, black cap, 100 calories.",
  productImage: "/images/bottle-on-beans.jpg",
  productAlt: "A Rishi Coffee vanilla latte bottle lying on coffee beans.",
  labelImage: "/images/label-front.jpg",
  labelAlt:
    "The Rishi Coffee vanilla latte label, with a cartoon coffee cup holding two iced drinks.",
  onTheLabel: ["milk", "espresso", "homemade vanilla syrup"],
  notes: ["shake before enjoying", "keep refrigerated"],
};

/**
 * Numbers copied from the bottle's nutrition panel.
 * The printed panel says "Serving Size: 1 can (12 fl oz)".
 * On the site that line reads "Per 12oz bottle".
 * Rows with no percent are blank on the printed panel too.
 */
export const nutrition = {
  title: "Nutrition Facts",
  serving: "Per 12oz bottle",
  calories: "100",
  rows: [
    { name: "Total Fat", amount: "2g", dailyValue: "3%", emphasis: true },
    { name: "Saturated Fat", amount: "1g", indent: 1 },
    { name: "Trans Fat", amount: "0g", indent: 1 },
    { name: "Cholesterol", amount: "10mg", dailyValue: "3%", emphasis: true },
    { name: "Sodium", amount: "20mg", dailyValue: "1%", emphasis: true },
    {
      name: "Total Carbohydrate",
      amount: "17g",
      dailyValue: "6%",
      emphasis: true,
    },
    { name: "Dietary Fiber", amount: "0g", indent: 1 },
    { name: "Total Sugars", amount: "16g", indent: 1 },
    { name: "Includes 12g Added Sugars", dailyValue: "24%", indent: 2 },
  ],
  protein: "1g",
  footnote: "Percent daily values are based on a 2,000 calorie diet.",
  ingredients:
    "Brewed coffee, A2 whole milk, cane sugar, brown sugar, honey, vanilla extract, cinnamon.",
};

export type NutritionRow = (typeof nutrition.rows)[number];

export const points = {
  index: "02",
  kicker: "the short version",
  title: "three things worth knowing",
  items: [
    {
      title: "real ingredients",
      body: "milk, espresso, and a vanilla syrup made at home. you could read the whole label out loud in the kitchen.",
    },
    {
      title: "bottled by hand",
      body: "small batch. square bottles, black caps, filled and passed along. not a factory run.",
    },
    {
      title: "made in chicago",
      body: "from a home kitchen to a coffee cart. lake light in the window, chicago on the bottle.",
    },
  ],
};

export const story = {
  index: "03",
  kicker: "our story",
  title: "from the kitchen, out the door",
  paragraphs: [
    "lattes at home came first. then the bottles — square, 12 ounces, black cap — started going home with friends and family.",
    "they've turned up at pop-ups and events, including a baby shower with a custom baby brew label. when there's a crowd, the coffee cart comes out.",
    "drops are on the way. this is the first look.",
  ],
  pull: "small batch. made for you.",
  portrait: {
    src: "/images/portrait-rishi.jpg",
    alt: "Rishi smiling in a black sweater, with city lights behind him at night.",
  },
  moments: [
    {
      src: "/images/coffee-cart.jpg",
      alt: "Rishi pulling an espresso shot at a coffee cart, with a chalkboard menu beside him.",
      caption: "the coffee cart, when there's a crowd.",
    },
    {
      src: "/images/baby-brew.jpg",
      alt: "A custom Baby Brew bottle on a dessert table at a baby shower.",
      caption: "a baby brew label, for a baby shower.",
    },
    {
      src: "/images/coffee-time.jpg",
      alt: "Rishi preparing coffee, with the words coffee time on the photo.",
      caption: "coffee time.",
    },
  ],
};

export const lineup = {
  index: "04",
  kicker: "the lineup",
  title: "one bottle out. a few still a secret.",
  lede: "vanilla latte is the one you can already picture. the rest aren't named yet.",
  featured: {
    name: "vanilla latte",
    detail: "milk, espresso, homemade vanilla syrup.",
    meta: "12oz · 100 cal",
    image: "/images/bottle-on-beans.jpg",
    alt: "A Rishi Coffee vanilla latte bottle lying on coffee beans.",
    href: "#bottle",
  },
  comingSoon: [
    {
      name: "mystery flavor",
      detail: "still in the kitchen. the name stays there for now.",
    },
    {
      name: "mystery flavor",
      detail: "another small batch. not ready to tell.",
    },
    {
      name: "mystery flavor",
      detail: "on the way. that's all for now.",
    },
  ],
};

export const community = {
  index: "05",
  kicker: "community",
  title: `tag ${instagramHandle} to be featured`,
  lede: "the bottles get around — the kitchen, the cart, a tuesday table. these photos are the first set. yours can join them.",
};

export const footer = {
  line: "drops coming soon",
  place: "made in chicago",
  note: "a home kitchen in chicago. no shop just yet.",
};
