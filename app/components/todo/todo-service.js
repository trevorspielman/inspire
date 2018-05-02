function TodoService() {
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/tspielman'


	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
	}

	function Task(form) {
		this.task = form.task.value
		this.completed = false
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
			.then(function (res) {
				todoList.unshift(res.data)
				cb(todoList)
			})
	}

	this.toggleTaskStatus = function toggleTaskStatus(taskId, callBack) {
		for (let i = 0; i < todoList.length; i++) {
			const task = todoList[i];
			if (task.id == taskId) {
				task.completed = !task.completed
				$.ajax({
					method: 'PUT',
					contentType: 'application/json',
					url: baseUrl + '/' + taskId,
					data: JSON.stringify(task),
				})
					.then(res => {
						this.getTasks(callBack)
					})
					.fail(logError)
			}
		}
	}

	this.removeTask = function removeTask(taskId, callBack) {
		$.ajax({
			url: baseUrl + '/' + taskId,
			method: 'DELETE'
		})
			.then(res => {
				this.getTasks(callBack)
			})
	}

}
