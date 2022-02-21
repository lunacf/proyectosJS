const hexa = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let colorEnHexa = '#';
    for(var i=0;i<6;i++){
        colorEnHexa += hexa[obtenerRandom()];
    }
    color.textContent = colorEnHexa;
    document.body.style.backgroundColor = colorEnHexa;

})

function obtenerRandom(){
    return Math.floor(Math.random() * hexa.length);
}
