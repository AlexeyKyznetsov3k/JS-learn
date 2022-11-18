// находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasksList');
const emptyList = document.querySelector ('#emptyList');

//добавление задачи 
form.addEventListener('submit',addTask);


//Удаление задачи

taskList.addEventListener('click',deleteTask)

//Отмечяем задачу завершенной
taskList.addEventListener('click',doneTask)

//функции:
//Добавляет 
function addTask (event) {
    //отменяем отправку формы
    event.preventDefault();  
    
    //Достаем текст задачи из поля ввода 
   const taskText = taskInput.value;

    //Формируем разметку для новой задачи
    const taskHTML = `
    <li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title"> ${taskText} </span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
</li>`;

//Добавляем задачу на страницу 
    taskList.insertAdjacentHTML('beforeend',taskHTML);

//Очищаем поле ввода и возвращаем на него фокус
    taskInput.value ="";
    taskInput.focus();

//Проверка Если в списке задач более одного элемента скрываем блок
if (taskList.children.length > 1) {
    emptyList.classList.add('none');
    }
}

//Удаляет 
function deleteTask (event){
    //Проверяет что клик был по кнопке 'удалить задачу'
    if (event.target.dataset.action === 'delete') {
        console.log('delete');
        const parenNode = event.target.closest('.list-group-item');
        parenNode.remove()
    }

    //Проверка.Если в списке задач 1элемент,показываем блок
if (taskList.children.length === 1) {
    emptyList.classList.remove('none');
    }
}

function doneTask(event) {
    //Проверяем что клик был по кнопке "Задача выполнена"
    if (event.target.dataset.action ==="done" ){
        console.log('done111');
    }
}

