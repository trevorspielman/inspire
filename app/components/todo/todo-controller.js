function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	var taskListElem = document.getElementById('taskList')

	// Use this getTodos function as your callback for all other edits
	function getTasks(){
		todoService.getTasks(drawTasks)
	}

	function drawTasks(taskList) {
		var taskTemplate = `<h4>Tasks Remaining: ${taskList.length} </h4>`
		taskList.forEach(task =>{
			taskTemplate += `
			<div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="task">
			<label class="form-check-label" for="task">${task.task}</label>
			<i onclick="app.controllers.todoController.removeTask('${task.id}')" class="action remove fa fa-fw fa-sm fa-trash text-red"></i>
			</div>
			`
		})
		taskListElem.innerHTML = taskTemplate
	}

	this.addTask = function (event) {
		event.preventDefault()
		var form = event.target
		console.log(form)
		todoService.addTask(form, drawTasks)
		form.reset()
	}

	this.toggleTaskStatus = function (taskId) {
		todoService.toggleTaskStatus(taskId, getTasks)
	}

	this.removeTask = function (taskId) {
		todoService.removeTask(taskId, drawTasks)
	}

getTasks()
}
