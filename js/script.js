// js/script.js

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Função para fazer Mario pular
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Função para verificar a colisão entre Mario e o tubo
const checkCollision = () => {
    const marioRect = mario.getBoundingClientRect();
    const pipeRect = pipe.getBoundingClientRect();

    return !(marioRect.right < pipeRect.left || 
             marioRect.left > pipeRect.right || 
             marioRect.bottom < pipeRect.top || 
             marioRect.top > pipeRect.bottom);
};

// Função principal do jogo
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Verifica se Mario colidiu com o tubo
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mariot.gif'; // Corrigido o caminho da imagem
        mario.style.width = '120px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); // Para o loop de verificação
    }
}, 10);

// Adiciona o evento de pulo quando a tecla de espaço é pressionada
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});
