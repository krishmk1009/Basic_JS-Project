var count = 0;
const value = document.querySelector("#value");


const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const target = e.currentTarget.classList;

        if(target.contains("decrease")){
            count --;
        }
        else if(target.contains("increase")){
            count ++;
        }
        else{
            count =0;
        }

        if(count>0){
            value.style.color = "green"
        }
        if(count<0){
            value.style.color = "red"
        }
        if(count===0){
            value.style.color = "black"

        }
        
        value.textContent = count
    })
})