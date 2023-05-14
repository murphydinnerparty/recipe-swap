console.log("javascript file connected");

document.addEventListener('DOMContentLoaded', function(){
    const recipeEnter = document.querySelector("#recipe_search");
    recipeEnter.addEventListener("submit", (event) => {
        event.preventDefault();
    })
});

function recipeSection (){
    
}

function recipetest() {
        fetch ('http://localhost:3000/Recipes')
        .then(resp => resp.json())
        .then(json =>console.log(json))
}

