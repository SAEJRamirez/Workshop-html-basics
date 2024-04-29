let btn = document.getElementById('header-btn')
let header = document.getElementById('header')
let changed = false

btn.onclick = () => {
    if(changed === false) {
        header.style.background = "linear-gradient(to left, #cd9ffa, #7a60ff)"
        changed = true
    } else {
        header.style.background = "linear-gradient(to left, #7a60ff, #cd9ffa)"
        changed = false
    }
}