function ClockController() {
    var clockElem = document.getElementById('clock')

    function drawClock() {
        var now = new Date()
        var hour = now.getHours()
        var minute = now.getMinutes()
        var clockTemplate = `<h1>${hour}:${minute}</h1>`

        clockElem.innerHTML = clockTemplate
        setTimeout(drawClock, 6000)
    }

drawClock()
}
