function ClockController() {
    var clockElem = document.getElementById('clock')
    
    
    function drawClock(format) {
        var now = new Date()
        var hour = now.getHours()
        var minute = now.getMinutes()
        var period = ''
        var timeOfDay = (now.getHours() < 12 ) ? "AM" : "PM"
        minute < 10 ? minute = '0'+minute : true
        format == 'twelve' && hour > 12 ? hour = hour - 12 : true
        format == 'twenty-four' && hour < 10 ? hour = '0' + hour : true
        now.getHours() < 12 ? period = 'Morning' : true
        now.getHours() >= 12 ? period = 'Afternoon' : true
        now.getHours() >= 17 ? period = 'Evening' : true
        var clockTemplate = `
        <div class="row">
        <div class="col-6">
        <p onclick="app.controllers.clockController.clockUnit('twelve')" >12 Hour </p>
        </div>
        <div class="col-6">
        <p onclick="app.controllers.clockController.clockUnit('twenty-four')">24 Hour</p>
        </div>
        </div>
        <h1>${hour}:${minute} ${timeOfDay}</h1>
        <h3>Good ${period}</h3>
        `
        clockElem.innerHTML = clockTemplate
        setTimeout(drawClock, 60000)
    }


    this.clockUnit = function clockUnit(format){
         drawClock(format)
    }

    drawClock('twenty-four')
}
