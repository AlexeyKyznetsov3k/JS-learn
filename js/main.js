// находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasksList');
const emptyList = document.querySelector ('#emptyList');

let task = []; 

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

 //Описывваем задачу в виде объекта
   const newTask ={
    id: Date.now(),
    text: taskText,
    done: false
};

 //Добавляем объект в массив с задачами
 task.push(newTask)

 console.log(task); 

//формируем Css клас
 const cssClass = newTask.done ? "task-title task-title--done": "task-title";

    //Формируем разметку для новой задачи
    const taskHTML = `
    <li id ="${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
    <span class="${cssClass}"> ${newTask.text} </span>
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
function deleteTask (event) {
    //Проверяет что клик был по кнопке 'удалить задачу'
    if (event.target.dataset.action !== 'delete') return;
        
        const parentNode = event.target.closest('.list-group-item');

        // определяем id задачи
        const id = Number(parentNode.id);

        //Находим индекс задачи в массиве
       const index = task.findIndex((task) => task.id === id);
           
        //Удаляем задачу из массива с задачами
        task.splice(index, 1);


        //удаляем задачу из разметки
        parentNode.remove()
    }

    //Проверка.Если в списке задач 1элемент,показываем блок
if (taskList.children.length === 1) {
    emptyList.classList.remove('none');
    }


function doneTask(event) {
    //Проверяем что клик был по кнопке "Задача выполнена"
    if (event.target.dataset.action !=="done" ) return

    //проверяем что клик был по кнопке задача выполнена 
    const parentNode =event.target.closest('.list-group-item');
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done');
    }


