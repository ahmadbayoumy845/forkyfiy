let recipesContainer = document.getElementById("recipesContainer");
let pizza = document.getElementById("pizza");
let burger = document.getElementById("burger");
let pasta = document.getElementById("pasta");
let salad = document.getElementById("salad");
let chicken = document.getElementById("chicken");
let input = document.getElementById("search");
let btnsearch = document.getElementById("btn-search");

function fetchRecipes(food) {
  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${food}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.data.recipes);
      let data = result.data.recipes;
      recipesContainer.innerHTML = "";
      data.forEach((recipe) => {
        console.log(recipe.title);
        console.log(recipe.image_url);
        recipesContainer.innerHTML += `
        <div class="recipe-card">
            <img src="${recipe.image_url}" alt="" class="recipe-img">
            <div class="recipe-info">
                <div>
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipepublsher">By:</p>
                </div>
                <a href="#" class="btn-view">${recipe.publisher}</a>
            </div>
         </div>
        `;
      });
    });
}

pizza.addEventListener("click", function () {
  fetchRecipes("pizza");
});
burger.addEventListener("click", function () {
  fetchRecipes("burger");
});
pasta.addEventListener("click", function () {
  fetchRecipes("pasta");
});
salad.addEventListener("click", function () {
  fetchRecipes("salad");
});
chicken.addEventListener("click", function () {
  fetchRecipes("chicken");
});
btnsearch.addEventListener("click", function () {
  console.log("search");
  fetchRecipes(input.value);
  search = "";
});
