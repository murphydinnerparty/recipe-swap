console.log("javascript file connected");

function recipetest() {
        fetch ('http://localhost:3000/Recipes')
        .then(resp => resp.json())
        .then(json =>console.log(json))
}

document.addEventListener('DOMContentLoaded', function(){
    recipetest()
});