console.log("javascript file connected");

document.addEventListener('DOMContentLoaded', function(){
    const recipeEnter = document.getElementById("recipe");
    recipeEnter.addEventListener("submit", (e) => {
        e.preventDefault();
        recipeTest()
    })
    recipeEnter.reset();
});

function recipeSection (completeRecipe){
    const main = document.getElementById('Recipe 1');
    completeRecipe.forEach(recipe => {
        const h2 = document.createElement('h2');
        h2.innerHTML = recipe.meal;
        main.appendChild(h2);
        const li = document.createElement('li');
        li.innerHTML = returnIngredients(recipe);
        main.appendChild(li);
    })
    
}

function returnIngredients(){

}

function recipeTest() {

    const recipeArray = fetch ('http://localhost:3000/Recipes')
        .then(resp => resp.json())
        .then(json => recipeSection(json))
    return recipeArray
}

