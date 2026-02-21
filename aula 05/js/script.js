const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')
        
    }, 500);
}

const loop = setInterval(()=> {

    const pipe_position = pipe.offsetleft;

    if (pipe_position =< 120) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipe_position}px`;
    } 
},10);

document.addEventListener('keydown', jump)