const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){


const randNum = rNum() ;

document.body.style.backgroundColor = colors[randNum];
color.textContent = colors[randNum]
})

function rNum(){
    const generateNum = Math.floor(Math.random()*colors.length)
    return generateNum
}