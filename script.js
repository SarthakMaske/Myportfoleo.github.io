let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle ('bx-x');
    navbar.classList.toggle('active');
};


const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
registerLink.onclick = ()=> {
    wrapper.classList.add('active');
}
loginLink.onclick = ()=> {
    wrapper.classList.remove('active');
}