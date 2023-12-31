// Algorithm:
// We want to choose restaurants given some quiz answers.

// 1. what's the input? (parameter(s))
//  quiz answers
// 2. what's the output? (return value)
//  restaurants

// Homework:
// 1. Research JSDoc

/**
 * Returns an array of restaurants that serve hotdogs which match the given answers.
 * @param {{
 *  dogType: "hotdog"|"corndog",
 *  topping: "standard condiments"|"chilli/cheese"|"mexican"|"plain",
 *  size: "small"|"medium"|"large"
 * }} answers
 *
 * @returns {{
 *  name: string,
 *  image: string,
 *  dogTypes: string[],
 *  toppings: string[],
 *  sizes: string[]
 * }[]}
 */

export function chooseRestaurants(answers) {
  // TODO: Find all the restaurants that include `answers.dogType` in their `dogTypes` array
  console.log(answers.dogType);
  console.log(answers.topping);
  console.log(answers.size);

  const results = [];

  for (let i = 0; i < restaurants.length; i++) {
    console.log("Size:", answers.size, "Restaurant Sizes:", restaurants[i].sizes);
    console.log(restaurants[i].name);
    console.log(restaurants[i].dogTypes.includes(answers.dogType));
    console.log(restaurants[i].sizes.includes(answers.size));
    console.log(restaurants[i].toppings.includes(answers.topping))
    if (
      restaurants[i].dogTypes.includes(answers.dogType) &&
      restaurants[i].sizes.includes(answers.size) &&
      restaurants[i].toppings.includes(answers.topping)
    ) {
      results.push(restaurants[i]);
      console.log('Match found!');
    } else {
      console.log('No matches for this restaurant!');
    }
  }
  if (results.length === 0) {
    console.log("hit")
    const defaultRestaurant = {
      name: "Cookout",
      image: "/CookOut-Sign.png",
      link: 'https://cookout.com/',
      dogTypes: ["Hotdog", "Corndog"],
      toppings: ["Chilli/cheese", "Standard", "Plain", "Mexican"],
      sizes: ["Medium"],
    };
    results.push(defaultRestaurant);
  }

  return results;
}

// chooseRestaurants({ dogType: "corndog", size: "large", topping: "plain" });

const restaurants = [
  {
    name: "Costco",
    image: '/costco.jpg',
    link: 'https://www.costco.com/',
    dogTypes: ["Hotdog"],
    toppings: ["Standard Condiments", "Plain"],
    sizes: ["Large"],
  },
  {
    name: "Sonic",
    image: "/sonic-drive-in.jpg",
    link: 'https://www.sonicdrivein.com/',
    dogTypes: ["Hotdog", "Corndog"],
    toppings: ["Chilli/Cheese"],
    sizes: ["Large"],
  },
  {
    name: "Five Guys",
    image: "/Five-Guys-Logo.jpg",
    link: 'https://www.fiveguys.com/',
    dogTypes: ["Hotdog"],
    toppings: ["Standard Condiments", "Plain"],
    sizes: ["Medium"],
  },
  {
    name: "Krystal",
    image: "/Krystal_Restaurants_Logo.jpg",
    link: 'https://www.krystal.com/menu/',
    dogTypes: ["Hotdog", "Corndog"],
    toppings: ["Chilli/Cheese", "Plain", "Standard Condiments"],
    sizes: ["Small"],
  },
  {
    name: "Cookout",
    image: "/CookOut-Sign.png",
    link: 'https://cookout.com/',
    dogTypes: ["Hotdog", "Corndog"],
    toppings: ["Chilli/cheese", "Standard", "Plain", "Mexican"],
    sizes: ["Medium"],
  },
];
