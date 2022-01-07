
let taskValue = document.getElementById("newTaskInput");
let addButton = document.getElementById("addButton"); // gets the first button
let incompleteTask = document.getElementById("incompletedTasks");
let completeTask = document.getElementById("completedTasks");

let newTask = function (task) { 
    console.log("new task created");

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

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(buttonEdit);
    listItem.appendChild(buttonDelete);
    console.log(listItem);
    return listItem;
}

//bindingTasks function binds all the actions in one function
let bindingTasks = function (listedItem, checkboxEvents) { 
    let checkbox = listedItem.querySelector("input[type=checkbox]");
    let editButton = listedItem.querySelector("button.edit");
    let deleteButton = listedItem.querySelector("button.delete");

    editButton.onclick = editTaskAction;
    deleteButton.onclick = deleteTaskAction;
    checkbox.onchange = checkboxEvents;//checkbox events are passed to the checkboxEvents parameter

}

// when task is created it is passed to the incompleteTask UL and if checkbox is checked it passes to taskComlpeted UL
let addNewTask = function () { 

    
    
    if (taskValue.value === "") {
        console.log("no new task created");
        let input = document.getElementById("newTaskInput");
        let placeHolder = document.createAttribute("placeholder");
        placeHolder.value = "Give your task a name";
        input.setAttributeNode(placeHolder);
    } else { 
        let listItem = newTask(taskValue.value);
        incompleteTask.appendChild(listItem);
        bindingTasks(listItem, taskCompleted);
        console.log("New task added");
    }

    taskValue.value = ""; // this resets the TaskValue input value after creating the new task
}

let editTaskAction = function () { 
    console.log("editing task");
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('input[type=checkbox]');
    let editButton = listItem.querySelector("button.edit");
    let editInput = listItem.querySelector('input[type=text]');
    let label = listItem.querySelector("label");
    let addClass = listItem.classList.contains("editClass");
    if (addClass) {
        label.innerText = editInput.value;
        editButton.innerText = "Edit";
        checkbox.style.display = "";
    } else { 
        editInput.value = label.innerText;
        editButton.innerText = "Save";
        checkbox.style.display = "none";
    }
    listItem.classList.toggle("editClass");
}
let deleteTaskAction = function () { 
    console.log("task deleted");
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let taskCompleted = function () { 
    let listItem = this.parentNode;
    completeTask.appendChild(listItem);
    bindingTasks(listItem, taskIncomplete);
}

let taskIncomplete = function () { 
    let listItem = this.parentNode;
    incompleteTask.appendChild(listItem);
    bindingTasks(listItem, taskCompleted);
}

let buttonTesting = function () { 
    console.log("add button working")
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