const  $ = document.querySelector.bind(document);

const iconBars   = $('.bars');
const iconTimes  = $('.times');
const wrapper    = $('.wrapper');
const sideNavBar = $('.side-navbar') ;

const toggleNavBar = function toggleNavBar() {
    iconBars.classList.toggle('active');
    iconTimes.classList.toggle('active');
    wrapper.classList.toggle('active');
    sideNavBar.classList.toggle('active');
}

iconBars.onclick = toggleNavBar;
iconTimes.onclick = toggleNavBar;
wrapper.onclick = toggleNavBar;