function TodoController() {
	var todoService = new TodoService()
	var taskListElem = document.getElementById('taskList')

	// Use this getTodos function as your callback for all other edits
	function getTasks() {
		todoService.getTasks(drawTasks)
	}

	function drawTasks(taskList) {
		var taskTemplate = `<h4>Tasks Remaining: ${taskList.length} </h4>`
		taskList.forEach(task => {
			taskTemplate += `
			<div class="tasks">
			<i class="action fas fa-check fa-sm" onclick="app.controllers.todoController.toggleTaskStatus('${task.id}')"></i>
			<p id="${task.id}">${task.task}</p>
			<i onclick="app.controllers.todoController.removeTask('${task.id}')" class="action remove fa fa-fw fa-sm fa-trash text-red"></i>
			</div>
			`
		})
		taskListElem.innerHTML = taskTemplate
		for (let i = 0; i < taskList.length; i++) {
			const task = taskList[i];
			if (task.completed == true) {
				document.getElementById(task.id).classList.add("completed")
			}
			else if(task.completed == false){
				document.getElementById(task.id).classList.remove("completed")
			}
		}
	}

	this.addTask = function (event) {
		event.preventDefault()
		var form = event.target
		todoService.addTask(form, drawTasks)
		form.reset()
	}

	this.toggleTaskStatus = function (taskId) {
		todoService.toggleTaskStatus(taskId, drawTasks)
	}

	this.removeTask = function (taskId) {
		todoService.removeTask(taskId, drawTasks)
	}

	getTasks()
}
