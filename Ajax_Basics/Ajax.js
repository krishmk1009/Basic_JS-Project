console.log("this is ajax js file")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', handleFetchBtnClick);

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', handlePopBtnClick);

function handleFetchBtnClick() {
    //initialise the hxr object
    let xhr = new XMLHttpRequest();


    //open the object 
    // lets see for json data 
    // xhr.open('GET' , 'https://jsonplaceholder.typicode.com/todos/1' , true);

    // lets see for the post request

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // xhr.open('GET' , 'mk.txt' , true);

    // on progress
    xhr.onprogress = function () {
        console.log("on progress");
    }

    // xhr.onreadystatechange = function(){
    //     console.log("ready state is " + xhr.readyState);
    // }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("some error occured");
        }

    }
    xhr.send('{"name":"test","salary":"123","age":"23"}');
    // xhr.send();


}

function handlePopBtnClick() {
    console.log("you have clicked the pop btn");

    let xhr = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts';

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);

            const obj = JSON.parse(this.responseText);
            str = "";

            for(key in obj){
                str+= `<li>${obj[key].title}</li>`;
            }

            let ul = document.getElementById('list');

            ul.innerHTML = str;

        }
    }

    xhr.send();
    console.log("we are done fetching the data");

}
