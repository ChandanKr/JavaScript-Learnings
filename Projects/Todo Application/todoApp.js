let inputBox = document.querySelector(".inputBox");
let addButton = document.querySelector(".addBtn");
let allTasksDiv = document.querySelector(".allTasksDiv");
let deleteBtn = document.querySelector(".deleteBtn");

const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("myTodoListItems"));
}

const addTodoListLocalStorage = (localTodoList) => {
    return localStorage.setItem('myTodoListItems', JSON.stringify(localTodoList));
};

let localTodoList = getTodoListFromLocal() || [];

const addTodoDynamicElement = (curElem) => {
    let divElem = document.createElement("div");   
    divElem.innerHTML = `<p>${curElem}</p><button class="deleteBtn">Delete</button>`;
    allTasksDiv.append(divElem);
};

const addTodoList = () => {

    const todoListValue =  inputBox.value.trim();

    inputBox.value = "";

    if(todoListValue !== "" && !localTodoList.includes(todoListValue)){
        localTodoList.push(todoListValue);
        localTodoList = [...new Set(localTodoList)]; // to remove duplicate elements
        // console.log(localTodoList);
        localStorage.setItem("myTodoListItems",JSON.stringify(localTodoList));

        addTodoDynamicElement(todoListValue);
    }
};

const showTodoList = () => {
    console.log(localTodoList);
    localTodoList.forEach((curElem) => {
        addTodoDynamicElement(curElem);
    });
};

showTodoList();

const removeTodoElem = () => {
    const todoToRemove = event.target;
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    let parentElem = todoToRemove.parentElement;
    // console.log(todoListContent);

    localTodoList = localTodoList.filter((currentTodo) => {
        return currentTodo !== todoListContent.toLowerCase();
    });
    addTodoListLocalStorage(localTodoList);
    parentElem.remove();
};


addButton.addEventListener("click", addTodoList);

allTasksDiv.addEventListener("click", (event) => {
    if(event.target.classList.contains("deleteBtn")){
        removeTodoElem();
    }
});
