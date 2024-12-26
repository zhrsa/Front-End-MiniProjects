const submit = document.querySelector('.add-todo');   //button
const todo = document.getElementById('todo');     //input
const list = document.querySelector('.list');

submit.addEventListener('mouseover' , () => {
    if(todo.value != ''){
        let myItem = document.createElement('li');
        myItem.className = "todo-item";
        myItem.innerHTML = 
                '<div class="desc">'
                + todo.value
                + '</div> <div class="options"> <button class="todo-btn"> <i class="far fa-trash-alt"></i>'
                + ' </button> <button class="todo-btn"> <i class="far fa-edit"></i> </button> <button class="todo-btn">'
                + '<i class="fas fa-check"></i> </button> </div>';
        list.prepend(myItem);
        todo.value = '';
    }
})