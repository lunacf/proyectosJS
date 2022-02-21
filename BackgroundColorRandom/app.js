const colores= ["blue", "red", 
"pink","yellow","purple"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    //random entre 0 - 3
    const random = obtenerRandom();
    console.log(random);

    document.body.style.backgroundColor = colores[random];
    color.textContent = colores[random];
});

function obtenerRandom() {
    return Math.floor(Math.random() * colores.length);
}