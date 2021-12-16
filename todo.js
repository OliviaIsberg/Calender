function addEventListeners() {
    let form = document.querySelector('form');
    form.addEventListener('submit', inputFieldToDoList);
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', toggleForm)
    form.addEventListener('submit', addTodo);

    // document.querySelector('.deleteBtnToDo').addEventListener('click', changeToDoWhenButtonPress); //trycka på todo för att ändra

}

function inputFieldToDoList(e) {
    let textInput = document.getElementById('text');
    console.log(textInput.value);
    e.preventDefault();
}

function toggleForm() {
    const form = document.getElementsByClassName('todo-box')[0];
    form.classList.toggle('hide')


}


//funktionen som skapar list-elementet.
function addtTodoToList() {
    // Hämta UL från html,
    const ulTodo = document.getElementById('todoULDOM');
    ulTodo.innerHTML = "";
    updateLs(todos)

    // loopa igenom arrayen med "todo" objekten
    for (const todo of todos) {

        //skapar ett list-element ("Li") för varje  objekt "todo" ur arrayen todos och skriver ut "title" ur objektet i DOMen. samt
        // lägger till en knapp som har funktion on click.
        const liTodo = document.createElement("li");
        liTodo.innerHTML = todo.title + `<button onclick=deleteTodoFromList() class="deleteTodo">X</button>`;
        liTodo.className = "list-item"
        saveToLs(todo.title, todo.date)


        // lägg till li-elementet i UL'en
        ulTodo.append(liTodo);

    }
}

function changeToDoWhenButtonPress() {
    let deleteBtn = document.createElement('button');
    deleteBtn.classList = 'deleteBtnToDo';
    document.querySelector('.list-item').append(deleteBtn);
    deleteBtn.innerText = 'Ändra';


}

/**
 * Save content to Localstorage
 */

function saveToLs(keyname, keyvalue) {
    localStorage.setItem(keyname, keyvalue);

}
function updateLs(stuff) {
    stuff.forEach(element => {
        console.log(element)
        localStorage.setItem(element.title, element.date)
    })

}

function loadFromLS() {


}


//funktionen som gör så att ett nytt list-element skapas.
function addTodo() {
    let todo = document.getElementById('text');
    if (todo.value.trim() === '') {

        return

    }
    console.log(todo.value);
    let date = document.getElementById('help').value
    todos.push({title: todo.value, date: date});//nu så läggs "date" objektet till med datumet det är i nutid när man trycker på knappen. // det kvarstår nu att lösa så att den lägg tills med rätt datum.

    addtTodoToList()
    console.log(todos)
    todo.value = ''


}

// en funktion som tar bort "todo" från listan samt tar bort onjektet från arrayen. från arrayen.
function deleteTodoFromList() {
    let buttons = document.getElementsByClassName("deleteTodo")
    console.log(buttons)

    let removeTodo = document.getElementsByClassName("deleteTodo");

    for (let i = 0; i < removeTodo.length; i++) {
        removeTodo[i].onclick = function (e) {
            let todo = this.parentNode;
            todo.style.display = "none";
            let index = e.target.getAttribute('value');// title = ex "baka en tårta"
            todos.splice(index, 1);
            console.log(todos)
            localStorage.clear()
        }
    }
}

const todos = [
    {
        title: 'baka en tårta',
        date: '2021-12-09',
    },
    {
        title: 'baka en tårta',
        date: '2021-12-10',
    },
    {
        title: 'baka en tårta',
        date: '2021-12-11',
    }
];

console.log(todos)

const todosByDay = todos.filter((todo) => todo.date === "2021-12-10")