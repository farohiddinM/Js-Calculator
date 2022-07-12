var Screen = document.getElementById('screen')

function ishla(son) {
    
    Screen.value += son
}

function Teng(params) {
    Screen.value = eval(Screen.value)
    
}

function toza() {
    Screen.value = ''
    
    
}

function bitta() {
    Screen.value = Screen.value.slice(0, Screen.value.length-1)
}
bitta()


// document.onkeypress = function (event) {
//     console.log(event);
// }

window.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter') {
        Screen.value = eval(Screen.value)
        console.log(321332);
    }else if (event.keyCode === 8) {
        Screen.value = Screen.value.slice(0, Screen.value.length-1)
    }else if (event.keyCode === 46) {
        Screen.value = ''
        console.log(12);
    }
    else if (event.key == '+' ) {
        alert('das')
    }
    else{
        Screen.value += event.key
    }
})



