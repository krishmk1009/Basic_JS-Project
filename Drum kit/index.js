let Number = document.querySelectorAll("button");


for (var i = 0; i < Number.length; i++) {

    Number[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml)
        addAnimation(buttonInnerHtml)
        
    });
    
}

document.addEventListener("keydown",function(event){
    makeSound(event.key)
    addAnimation(event.key)
})


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
    
        default:
            console.log(buttonInnerHtml)
            break;
    }
}

function addAnimation(currentKey){
    // document.querySelector("."+currentKey).setAttribute("class","pressed");
    var active = document.querySelector("."+currentKey);
    active.classList.add("pressed")
    
    setTimeout(function(){
        active.classList.remove("pressed")

    },150)

}


