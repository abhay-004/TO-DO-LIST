let inputBox = document.querySelector("#input-box")
let listContainer = document.querySelector("#list-container")

function addTask(){

    if(inputBox.value===""){
        alert("You must write something!");
    }
    else{
        
        //Create & Add new Task

        let li = document.createElement("li"); 
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        
        //Create & Display cross icon
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //cross icon code
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


listContainer.addEventListener("click",(e)=>{
    
    //Checked & Unchecked Line on click

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //Remove Task on click 

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//Save Data

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//Show Saved Data

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


