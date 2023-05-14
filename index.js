console.log("javascript file connected");

document.addEventListener('DOMContentLoaded', function(){
    recipeSection(listRecipe);
});

function recipeSection (listRecipe){
    document.createElement(listRecipe);
}

function recipetest() {
        fetch ('http://localhost:3000/Recipes')
        .then(resp => resp.json())
        .then(json =>console.log(json))
}

