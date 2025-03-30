const body = document.body.firstChild;
console.log(body);

const menu = document.getElementById('menu_btn')
const enlaces = document.getElementById('nav_links')
const menuIcono = menu.querySelector('i')

menu.addEventListener('click', (e)=>{
    enlaces.classList.toggle('open');
    const isopen = enlaces.classList.contains('open');
    menuIcono.setAttribute("class", isopen? "ri-close-line":"ri-menu-line");
});
enlaces.addEventListener('click', (e)=>{
    enlaces.classList.remove('open');
     
    menuIcono.setAttribute("class", "ri-menu-line");
});
