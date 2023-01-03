let startBtn = document.querySelector('#start')
let resumeBtn = document.querySelector('#resume')
let reset = document.querySelector('#reset')
let sec = document.querySelector('#sec')
let min = document.querySelector('#min')


sec.innerHTML = '59'
min.innerHTML = '9'



startBtn.addEventListener('click', function () {
    let sec_function = setInterval(() => {
        sec.innerHTML--
        if (sec.innerHTML < 0) {
            sec.innerHTML = '59'
        }
    }, 1000)


    let min_function = setInterval(() => {
        min.innerHTML--
        if (min_function < 0) {
            clearInterval(min_function)
        }
    }, 60000)
})


reset.addEventListener('click', function () {
    sec.innerHTML = '59'
    min.innerHTML = '09'
})

