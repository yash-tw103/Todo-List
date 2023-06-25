let inputbox = document.getElementById("input-box");
let listcontianer = document.getElementById("list-container");

function addtask(){
    if(inputbox.value === ''){
        alert("You Must Write Something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontianer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputbox.value="";
    saveData();
}

listcontianer.addEventListener("click",function(e){
    if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontianer.innerHTML);
}

function showTask(){
    listcontianer.innerHTML= localStorage.getItem("data");
}

showTask();