const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
// console.log("clicked")

let hexaColor = "#";
for(let i =  0; i<6;i++){
    let num = getRandom();

    hexaColor += hex[num];
}



color.textContent = hexaColor;
document.body.style.backgroundColor = hexaColor



})

function getRandom(){
    let num =  Math.floor(Math.random()*hex.length)
    return num
}