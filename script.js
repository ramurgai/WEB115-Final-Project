//buttons and inputs to javascript variables + date cause he's special
let taskName = document.getElementById("taskName")
let priority = document.getElementById("priority")
let important = document.getElementById("important")
let date = new Date()
let submit = document.getElementById("submit")
let taskManager = document.getElementById("taskManager")
console.log(important.checked)
//define the event listener for the main function triggered by clicking the submit button
submit.addEventListener("click", func1)
//task list that gets stringified
let tasks = []
//id that will be incremented for each task
let id = 1
//changing the values because the only thing that will update is checked and not value
//declaration of the main function
function func1(){
    //try that will test if they gave the task a name
    try{
        if(!taskName.value.trim()){
            throw new Error("Please enter a value for name")
        }
        //code that runs if the name if properly entered
        else{
            if(important.checked === true){
                important.value = "Important"
            }
            else{
                important.value = "Not Important"
            }
            
            
            //task object that records all the values
            let task =
            {
                id: id,
                name: `${taskName.value}`,
                priority: `${priority.value}`,
                important: important.checked,
                isCompleted: false,
                date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
            }
            //p element that will contain everything we need
            let p = document.createElement("p")
            taskManager.appendChild(p)
            //span element that can have its innerHTML changed safely without affecting anything else
            let text = document.createElement("span")
            p.appendChild(text)
            text.innerHTML =  `|Name: ${task.name}-------------Priority: ${task.priority}-------------Importance: ${important.value}-------------Date: ${task.date}| `

            //if they check the important checkbox the background color will change to red
            if(important.checked === true){
                p.style.backgroundColor = "red"
            }
            
            //creating the delete button, giving it attributes, and appending it to the p element
            let del = document.createElement("button")
            del.setAttribute("id","delete")
            p.appendChild(del)
            del.textContent = "Delete"

            //the delete event listener and functin declaration 
            del.addEventListener("click", delfunc)
            function delfunc(){
                //first we remove the p tag from the document which clears all the other elements
                p.remove()
                //get a variable with the index of the specific task that is being deleted
                let i = tasks.indexOf(task)
                //conditional statement
                if (i !== -1){
                    //deletes the specific task from the list
                    tasks.splice(i,1)
                }
                //gives a little update message
                console.log("tasks after deletion")
                //stringifies the task list
                console.log(JSON.stringify(tasks))
            }

            //creating the completed label button, giving it attributes, and appending it to the p element. This serves as the label for the completed checkbox.
            let complabel = document.createElement("label")
            complabel.setAttribute("for","completed")
            complabel.setAttribute("id","complabel")
            complabel.textContent = "Completed?"
            p.appendChild(complabel)
            
            //creating the completed checkbox, giving it attributes, and appending it to the p element.
            let completed = document.createElement("input")
            completed.setAttribute("type","checkbox")
            completed.setAttribute("id","completed")
            p.appendChild(completed)


            //adding the event listener for the completed checkbox
            completed.addEventListener("change",compfunc)
            
            //define the completed function
            function compfunc(){
                //if they check it this runs
                if (completed.checked === true){
                    //putting a strikethrough tag in their to have the strikethrough effect. You need innerHTML to affect the code directly. Text content will not work.
                    text.innerHTML = `<s>${text.innerHTML}</s>`
                    //it is now completed so we change that iscompleted to true
                    task.isCompleted = true
                    //update message + stringification
                    console.log("completed update")
                    console.log(JSON.stringify(tasks))
                    console.log("")
                }
                //if they uncheck it this runs
                else{
                    //set it back to default text
                    text.innerHTML = `|Name: ${task.name},-------------Priority: ${task.priority}-------------Importance: ${important.value}-------------Date: ${task.date}| `
                    //because it is uncompleted iscompleted goes back to being false
                    task.isCompleted = false
                    //update message + stringification
                    console.log("uncompleted update")
                    console.log(JSON.stringify(tasks))
                    console.log("")

                }
            }
            //adding the tasks to the list
            tasks.push(task)
            //stringification
            console.log(JSON.stringify(tasks))
            console.log("")
            //id being incremented so on the next instance of the function the id will be 2
            id += 1
        }
    }
    //if they didn't enter a name the error message will show up and they will not be able to add the task or do anything else.
    catch(error){
            window.alert(error.message)
    }
}