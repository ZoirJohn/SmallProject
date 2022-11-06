'use strict';
// console.clear();
// Magic header
// const  = document.querySelector('');
// window.addEventListener('scroll', fixing);
// function fixing() {
//    if (scrollY <= .getBoundingClientRect().height * 2) {
//       .style.transform = `translate(0,-${scrollY}px)`;
//       .classList.remove('p');
//    } else {
//       .classList.add('p');
//    }
// }

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const burgerFunction = () => {
   burger.classList.toggle('active_');
   nav.classList.toggle('active_');
	nav.closest('body').classList.toggle('active_')
};
burger.addEventListener('click', burgerFunction);
