let todoList = [];

function addTodo(){

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;

    if(name === '' || dueDate === ''){
        alert("Please enter task and date");
        return;
    }

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
}

function renderTodoList(){

    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){

        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="deleteButton" onclick="
                todoList.splice(${i},1);
                renderTodoList();
            ">Delete</button>
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}