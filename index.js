console.log("javascript file connected");

document.addEventListener('DOMContentLoaded', function(){
    const recipe = document.getElementById("recipe");
    recipe.addEventListener("submit", (e) => {
        e.preventDefault();
        recipeTest()
    })
    recipe.reset();
});

function recipeFilter(chooseRecipe){
    const recipeChoice = chooseRecipe.filter()
}

function recipeSection (completeRecipe){
    const main = document.getElementById('recipeContainer');
    completeRecipe.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.class = 'recipes';
        const h2 = document.createElement('h2');
        h2.innerHTML = recipe.meal;
        const li = document.createElement('li');
        li.innerHTML = recipe.mainIngredients;
        const img = document.createElement('img')
        img.src = recipe.recipeImage
        recipeCard.append(h2,li,img);
        main.append(recipeCard);
    })
    
}

function returnIngredients(ingredients){
  
   
}

function recipeTest() {

    const recipeArray = fetch ('http://localhost:3000/Recipes')
        .then(resp => resp.json())
        .then(json => recipeSection(json))
    return recipeArray
}

