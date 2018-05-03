function ClockController() {
    var clockElem = document.getElementById('clock')


    function standardClock() {
        var now = new Date()
        var hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
        var amPm = now.getHours() >= 12 ? 'PM' : 'AM'
        var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        var time = hours + ':' + minutes + ' ' + amPm
        var template = `
        <h3 onclick="app.controllers.clockController.toggleClock()">24 Hour</h3>
        <h1>${time}</h1>`
        if (now.getHours() < 12) {
            template += `<h3 class="">Good Morning</h3>`
        } else if (now.getHours() >= 12 && now.getHours() < 18) {
            template += `<h3 class="">Good Afternoon</h3>`
        } else if (now.getHours() >= 18) {
            template += `<h3 class="">Good Evening</h3>`
        }
        document.getElementById('standard-time').innerHTML = template

        setTimeout(standardClock, 60000);
    }

    function militaryClock() {
        var now = new Date()
        var hours = now.getHours()
        var minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        var time = hours + ':' + minutes
        var template = `
        <h3 onclick="app.controllers.clockController.toggleClock()">12 Hour</h3>
        <h1>${time}</h1>`
        if (hours < 12) {
            template += `<h3 class="">Good Morning</h3>`
        } else if (hours >= 12 && hours < 18) {
            template += `<h3 class="">Good Afternoon</h3>`
        } else if (hours >= 18) {
            template += `<h3 class="">Good Evening</h3>`
        }
        document.getElementById('military-time').innerHTML = template

        setTimeout(militaryClock, 60000);
    }


    this.toggleClock = function toggleClock(){
        var twelve = document.getElementById('standard-time')
        var twentyfour = document.getElementById('military-time')
        if (twelve.classList.contains('hidden')){
            twelve.classList.remove('hidden')
            twentyfour.classList.add('hidden')
        } else {
            twelve.classList.add('hidden')
            twentyfour.classList.remove('hidden')
        }
    }

    standardClock()
    militaryClock()
}
