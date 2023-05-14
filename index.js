console.log("javascript file connected");

document.addEventListener('DOMContentLoaded', function(){
    recipetest()
});

function recipeSection (){
    
}

function recipetest() {
        fetch ('http://localhost:3000/Recipes')
        .then(resp => resp.json())
        .then(json =>console.log(json))
}

