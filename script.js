
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-links');
if(menuButton && menu){
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
