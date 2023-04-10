const container = document.querySelector('.container');
const splashImg = document.getElementById('splash');

container.addEventListener('click', (e) => {
    const splash = document.createElement('img');
    splash.src = 'https://www.w3schools.com/howto/img_splash.png';
    splash.classList.add('splash');
    splash.style.left = e.clientX - 50 + 'px';
    splash.style.top = e.clientY - 50 + 'px';
    container.appendChild(splash);
    setTimeout(() => {
        splash.remove();
    }, 500);
})