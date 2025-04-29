let taskName = document.getElementById("taskName")
let priority = document.getElementById("priority")
let important = document.getElementById("important")
let date = document.getElementById("date")
let submit = document.getElementById("submit")
let taskManager = document.getElementById("taskManager")

submit.addEventListener("click", func1)

function func1(){
    let task = 
    {
        name: `${taskName.value}`,
        priority: `${priority.value}`,
        important: `${important.value}`,
        date: `${date.value}`
    }
    console.log(task)
    let p = document.createElement("p")
    taskManager.appendChild(p)
    p.innerHTML =  `Name: ${task.name}, Priority: ${task.priority}, Importance: ${task.important}, Date: ${task.date}`
    let del = document.createElement("button")
    del.setAttribute("id","delete")
    taskManager.appendChild(del)
    del.textContent = "Delete"

    
}
