function TodoService() {
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/tspielman'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	function Task(form){
		this.task = form.task.value
	}

	this.getTasks = function (callBack) {
		$.get(baseUrl)
			.then(function (res) {
				todoList = res
				callBack(todoList)
			})
	}

	this.addTask = function addTask(form, cb) {
		var task = new Task(form)
		$.post(baseUrl, task)
			.then(function(res){
				todoList.unshift(res.data)
				cb(todoList)
			}) 
	}

	this.toggleTaskStatus = function toggleTaskStatus (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(YOURTODOVARIABLEHERE)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTask = function removeTask (taskId, callBack) {
		$.ajax({
            url: baseUrl + '/' + taskId,
            method: 'DELETE'
        })
            .then(res => {
                this.getTasks(callBack)
            })
	}

}
