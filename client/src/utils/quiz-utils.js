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

  const results = [];

  for (let i = 0; i < restaurants.length; i++) {
    if (
      restaurants[i].dogTypes.includes(answers.dogType) &&
      restaurants[i].sizes.includes(answers.size) &&
      restaurants[i].toppings.includes(answers.topping)
    ) {
      results.push(restaurants[i]);
    }
  }

  return results;
}

// chooseRestaurants({ dogType: "corndog", size: "large", topping: "plain" });

const restaurants = [
  {
    name: "Costco",
    image: "",
    dogTypes: ["hotdog"],
    toppings: ["standard condiments", "plain"],
    sizes: ["large"],
  },
  {
    name: "Sonic",
    image: "",
    dogTypes: ["hotdog", "corndog"],
    toppings: ["chilli/cheese"],
    sizes: ["large"],
  },
  {
    name: "Five Guys",
    image: "",
    dogTypes: ["hotdog"],
    toppings: ["standard", "plain"],
    sizes: ["medium"],
  },
  {
    name: "Krystal",
    image: "",
    dogTypes: ["hotdog", "corndog"],
    toppings: ["chilli/cheese", "plain"],
    sizes: ["small"],
  },
  {
    name: "Cookout",
    image: "",
    dogTypes: ["hotdog", "corndog"],
    toppings: ["chilli/cheese", "standard", "plain", "mexican"],
    sizes: ["medium"],
  },
];
