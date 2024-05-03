// selector lerle içinde ki elemanları seciyoruz 

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

// alert ler
const alertWarnig = document.querySelector("alert-warning");
const alertsuccess = document.querySelector(".alert-success");

// eventler 

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck)

function addTodo(e){
 e.preventDefault(); // tıklandığında sayfa yenilenmesini önlemek için 
const isEmpty = str => !str.trim().length;// bos kutucakları isemptynin içine at 

if(isEmpty(todoInput.value )){
 alertWarnig.style.display = "block";
   // clear todo ınput value
   todoInput.value="";
}else {
    alertsuccess.style.display = "block";


    const todoDIv = document.createElement("div");
    todoDIv.classList.add("todo");
   
    // check mark button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = " <i class='fas fa-check-circle'></i>";
    completedButton.classList.add("complete-btn");
   
    // create todo li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.ariaValue;
    newTodo.classList.add("todo-item");
   todoDIv.appendChild(newTodo)
   
   
   
   //check trash button 
    
   const trashButton = document.createElement("button");
   trashButton.innerHTML = " <i class='fas fa-minus-circle'></i>";
   trashButton.classList.add("trash-btn");
    todoDIv.appendChild(trashButton);
   
    todoList.appendChild(todoDIv);
   
   
   
}



}

function deleteCheck(e){
    const item = e.target;
    // delete todo
    todoButton.classList.add("fall");
   

}