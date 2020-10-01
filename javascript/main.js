window.onload = () => {

    const menu = document.getElementById('menu');
    const nav = document.querySelector('.navbar');

    menu.onclick = () => {
        nav.classList.toggle('active');
        if(nav.classList.contains('active')) {
            menu.classList.remove('fa-bars');
            menu.classList.add('fa-times');
        }
        else {
            menu.classList.remove('fa-times');
            menu.classList.add('fa-bars');
        }
    }

}