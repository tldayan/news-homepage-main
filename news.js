"use strict"

    let hamburger = document.querySelector(`.hamburger`)
    let nav = document.querySelector(`nav`)
    let closeIcon = document.querySelector(`.close_nav`)

function openNav() {
    closeIcon.style.display = `block`
    nav.style.display = `block`
    hamburger.style.display = `none`

}

function closeNav() {
    closeIcon.style.display = `none`
    hamburger.style.display = `block`
    nav.style.display = `none`
}