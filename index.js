let inputIdElement = document.getElementById("todo-id-input");
let addButtonIdElement = document.getElementById("todo-id-addButton");
let ulIdElement = document.getElementById("todoList-id");

let todoList= [
    {
        text:" Learn Html ",
        id:1
    },
    {
        text:" Learn Css ",
        id:2
    },
    {
        text:" Learn JS ",
        id:3
    },
]
let todoListLength = todoList.length;
function onChangeStatus(labelId){
let todoLabelElementId = document.getElementById(labelId);
todoLabelElementId.classList.toggle("checked");
}


function onDeleteTodo(todoId){
let todoDeleteElementId = document.getElementById(todoId);
ulIdElement.removeChild(todoDeleteElementId);
}

function createAndAppendTodo(todo){ 
let todoId="todo"+todo.id;
let checkboxId="checkbok"+todo.id;
let labelId="label"+todo.id;


let liElement = document.createElement("li");
liElement.classList.add("todo-li-class");
liElement.id=todoId;
ulIdElement.appendChild(liElement);

let inputElement = document.createElement("input");
inputElement.type="checkbox";
inputElement.id=checkboxId;
inputElement.classList.add("checkboxClassInput");
liElement.appendChild(inputElement);

inputElement.onclick=function(){
    onChangeStatus(labelId)
}

let divlabelContainer = document.createElement("div");
divlabelContainer.classList.add("todo-divElement");
liElement.appendChild(divlabelContainer);

let labelElement = document.createElement("label");
labelElement.textContent=todo.text;
labelElement.setAttribute("for",checkboxId);
labelElement.classList.add("labelClassInput");
labelElement.id=labelId;
divlabelContainer.appendChild(labelElement);

let divDeleteIconContainer = document.createElement("div");
divDeleteIconContainer.classList.add("delete-div-container");
divlabelContainer.appendChild(divDeleteIconContainer);

let DeleteIconElement = document.createElement("i");
DeleteIconElement.classList.add("ri-delete-bin-fill", "delete-icon" );
divDeleteIconContainer.appendChild(DeleteIconElement);

DeleteIconElement.onclick=function(){
onDeleteTodo(todoId);
}

}

for(let todo of todoList)
{
createAndAppendTodo(todo);
}

function  onAddTodo(){
    let inputElementValue = inputIdElement.value;
    if(inputElementValue == "")
    {
    alert("Please Enter The Value");
    return
    }
    todoListCount = todoListLength+1;
    let TodoIncreaseCount=
    {
        text:inputElementValue,
        id:todoListCount
    }
    createAndAppendTodo(TodoIncreaseCount);
    inputIdElement.value=" ";
}


addButtonIdElement.onclick=function(){
    onAddTodo();
}