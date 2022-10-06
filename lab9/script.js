const links = document.querySelector('#navigation > ul');
const linklist = links.classList;

window.addEventListener('click', (event) => {
    if (!event.target.matches('#navbutton') && !event.target.matches('li')) {
        linklist.remove("shown");
    }
 });
document.querySelector('#navbutton').addEventListener('click', () => { linklist.toggle("shown"); });