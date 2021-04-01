let dog = '';
let iScore = 0;

window.onload = () => {
    changePage('homepage');

    const start = document.querySelector('.start');
    start.addEventListener('click', () => changePage('setting'));

    const img_area = document.querySelectorAll('.img_area div');
    img_area.forEach((div) => {
        div.addEventListener('click', () => {
            dog = `./img/dog_${div.dataset.img}.png`;
            changePage('game');
            addDog();
        });
    });

    const img = document.querySelectorAll('#game img');
};

function changePage(id) {
    const show = document.querySelector('.show');
    if (show) {
        show.classList.remove('show');
    }

    const elements = document.getElementById(id);
    elements.classList.add('show');
}

function addDog() {
    const width = window.innerWidth - 100;
    const height = window.innerHeight - 200;
    const game = document.getElementById('game');
    let img = document.createElement('img');
    let top = Math.random() * height + 50;
    let left = Math.random() * width + 50;

    top = top < 50 ? 50 : top;
    left = left < 50 ? 50 : left;

    img.src = dog;
    img.style.top = `${top}px`;
    img.style.left = `${left}px`;
    img.style.transform = `rotate(${Math.random() * 360}deg)`;
    game.append(img);

    img.addEventListener('click', (e) => {
        countScore();
        e.target.remove();
        window.setTimeout(() => addDog(), 100);
        window.setTimeout(() => addDog(), 300);
    });
}

function countScore() {
    let score = document.querySelector('.score');
    iScore = iScore+1;
    score.innerText = iScore;
}
