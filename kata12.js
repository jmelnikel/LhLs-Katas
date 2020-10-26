// The Great Codeville Bake-off - Recipe Matcher
// Create a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array). The chooseRecipe() function should return the name of the correct recipe.

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  for (let i = 0; i < recipes.length; i++) {
    if (matchRecipeAndBakery(bakeryA, recipes[i]) && matchRecipeAndBakery(bakeryB, recipes[i])) {
      return recipes[i]["name"];
    }
  }
};

const matchRecipeAndBakery = (bakery, recipe) => {
  for (let ingredient of bakery) {
    if (recipe["ingredients"].includes(ingredient)) return true;
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));