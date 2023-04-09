const bar = document.getElementById('bar');
const nav = document.querySelector('#navbar');
const active = document.getElementsByClassName('active');


if(bar){
    bar.addEventListener('click', () => {
        console.log(active);
        nav.classList.add('active');
    })
}