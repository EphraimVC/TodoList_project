
let taskValue = document.getElementById("newTaskInput");
let addButton = document.getElementById("addButton"); // gets the first button
let incompleteTask = document.getElementById("incompletedTasks");
let completeTask = document.getElementById("completedTasks");

let newTask = function (task) { 
    console.log("new task");

    let listItem = document.createElement("li");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let checkBox = document.createElement("input");
    let buttonEdit = document.createElement("button");
    let buttonDelete = document.createElement("button");

    label.innerText = task;
    checkBox.type = "checkbox";
    input.type = "text";
    buttonEdit.innerText = "Edit";
    buttonEdit.className = "edit";
    buttonDelete.innerText = "Delete";
    buttonDelete.className = "delete";

    listItem.appendChild(label);
    listItem.appendChild(checkBox);
    listItem.appendChild(input);
    listItem.appendChild(buttonEdit);
    listItem.appendChild(buttonDelete);
    console.log(listItem);
    return listItem;
    

}

//bindingTasks function binds all the actions in one function
let bindingTasks = function (listedItem, checkboxEvents) { 
    let checkbox = listedItem.querySelector("input[type=checkbox]");
    // let editButton = listedItem.querySelector("button.edit");
    // let deleteButton = listedItem.querySelector("button.delete");

    // editButton.onclick = editTaskAction;
    // deleteButton.onclick = deleteTaskAction;
    checkbox.onchange = checkboxEvents;//chefkbox events are passed to the checkboxEvents parameter

}

// when task is created it is passed to the incompleteTask UL and if checkbox is checked it passes to taskComlpeted UL
let addNewTask = function () { 
    console.log("addNewTask");

    let listItem = newTask(taskValue.value);
    incompleteTask.appendChild(listItem);
    // bindingTasks(listItem, taskCompleted);

    taskValue.value = ""; // this resets the TaskValue input value after creating the new task
}

// let taskCompleted = function () { 
//     let listItem = this.parentNode;
//     completeTask.appendChild(listItem);
//     bindingTasks(listItem, taskIncomplete);
// }

// let taskIncomplete = function () { 
//     let listItem = this.parentNode;
//     incompleteTask.appendChild(listItem);
//     bindingTasks(listItem, taskCompleted);
// }

let buttonTesting = function () { 
    console.log("button testing")
}

// addButton.onclick=addNewTask;
addButton.addEventListener("click", addNewTask);
addButton.addEventListener("click", buttonTesting);

// for (var i = 0; i < incompleteTask.children.length; i++) { 
//     bindingTasks(completedTask.children[i], taskCompleted);
// }

// for (var i = 0; i < completeTask.children.length; i++) { 
//     bindingTasks(IncompleteTask.children[i], taskIncomplete);
// }