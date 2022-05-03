let btn = document.querySelector('.button')
let btn2 = document.querySelector('.button2')
let container = document.querySelector('.container')

let c = (e) => document.querySelector(e)
let cs = (e) => document.querySelectorAll(e)

function hoursFunc() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let all = `${fixZero(h)}:${fixZero(m)}:${fixZero(s)}`

    c('.hours-opened').innerHTML = all

}

function fixZero(time) {
    if (time < 10) {
        return '0'+time
    } else {
        return time
    }
}

let timer = setInterval(hoursFunc, 1)

btn.addEventListener('click', () => {
    c('.button').style.opacity = 1
        setTimeout ( () =>{
            c('.button').style.display = 'none'
            c('.button').style.opacity = 0
        }),1

        if ( c('#modal1').style.display = 'none' ) {
            c('#modal1').style.display = 'flex'
        }
        
        if ( c('#modal1').classList.contains('modal') ) {
            c('#modal1').classList.remove('modal')
        } else {
            c('#modal1').classList.add('modal')
        }

        if ( c('.container').classList.contains('.container-opened') ) {
            c('.container').classList.remove('container-opened')
        } else {
            c('.container').classList.add('container-opened')
        }
    
        if ( c('#modal1').classList.contains('modal-opened') ) {
            c('#modal1').classList.remove('modal-opened')
        } else {
            c('#modal1').classList.add('modal-opened')
        }
    
        if ( c('.hours').classList.contains('hours-opened') ) {
            c('.hours').classList.remove('hours-opened')
            c('.hours').innerHTML = ''
        } else {
            c('.hours').classList.add('hours-opened')
            c('.hours-opened').innerHTML = ''
        }
    
        if ( c('.button2').classList.contains('button2-opened') ) {
            c('.button2').classList.remove('button2-opened')
            c('.button2 ').style.display = 'none'
        } else {
            c('.button2').classList.add('button2-opened')
            c('.button2').style.display = 'flex'
        }

        setTimeout ( () => {
            c('.modal-opened').style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        },1) 

})

btn2.addEventListener('click', () => {
    c('.button').style.opacity = 0
        setTimeout ( () =>{
            c('.button').style.display = 'flex'
            c('.button').style.opacity = 1
        }),1

        c('.modal-opened').style.backgroundColor = "rgba(0, 0, 0, 0.0)"
        c('.modal-opened').style.transition = "0.3s";

        setTimeout ( () => {
            c('#modal1').style.display = 'none'
        },300)
    c('#modal1').classList.remove('modal-opened')
    c('#modal1').classList.remove('modal')
    c('.hours').classList.remove('hours-opened')
    c('.button2').classList.remove('button2-opened')
    c('.button2 ').style.display = 'none'
})

let count = 1
document.querySelector('#slide1').checked = true;

setInterval ( () => {
    nextImage();
},5000)

function nextImage() {
    count++;
        if ( count > 3 ) {
            count = 1;
        }

        document.querySelector('#slide'+count).checked = true;
    
}

function next() {
    nextImage()
}

function prev() {
    count--;
        if ( count < 1 ) {
            count = 3;
        }

        document.querySelector('#slide'+count).checked = true;
}