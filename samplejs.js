/*:::::::::::::::::::::::::;;toggle icon navabr::::::::::::::::::: */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*::::::::::::::;scroll reveal(for displaying animated landing objects on refresh)::::::::::::::::*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
