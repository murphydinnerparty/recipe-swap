console.log("javascript file connected");

document.addEventListener('DOMContentLoaded', function(){
    const recipeEnter = document.querySelector("#recipe");
    recipeEnter.addEventListener("submit", (e) => {
        e.preventDefault();
        recipeTest()
    })
});

function recipeSection (){
    
}

function recipeTest() {
        fetch ('http://localhost:3000/Recipes')
        .then(resp => resp.json())
        .then(json =>console.log(json))
}

