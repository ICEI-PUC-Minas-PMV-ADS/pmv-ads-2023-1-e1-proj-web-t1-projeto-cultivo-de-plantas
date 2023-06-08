function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
}

const button = document.querySelector("form button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}
