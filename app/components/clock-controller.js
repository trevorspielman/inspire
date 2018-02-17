function ClockController() {
    var clockElem = document.getElementById('clock')
    
    
    function drawClock(format) {
        var now = new Date()
        var hour = now.getHours()
        var minute = now.getMinutes()
        if(minute < 10){
            minute = '0'+minute
        }
        format == 'twelve' && hour > 12 ? hour - 12 : hour + 12
        format == 'twenty-four' && hour < 12 ? hour = '0' + hour : true
        var clockTemplate = `
        <h1>${hour}:${minute}</h1>
        <p onclick="app.controllers.clockController.clockUnit('twelve')" >12 Hour</p> 
        <p onclick="app.controllers.clockController.clockUnit('twenty-four')">24 Hour</p>
        `
        clockElem.innerHTML = clockTemplate
        setTimeout(drawClock, 6000)
    }

    this.clockUnit = function clockUnit(format){
         drawClock(format)
    }


drawClock()
}
