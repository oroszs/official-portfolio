//This branch is in development, and will include seperate pages for each project

const modal = (imgSrc) => {
    let hider = document.querySelector('#modal-hider');
    let modalDiv = document.createElement('div');
    modalDiv.className += 'modal';
    let modalImg = document.createElement('img');
    modalImg.className += 'modalImg';
    modalImg.src = imgSrc;
    modalDiv.appendChild(modalImg);
    hider.appendChild(modalDiv);
    document.body.appendChild(hider);
    hider.addEventListener('click', () => {
        modalDiv.remove();
        hider.className = 'hide';
    });
    hider.className = 'show';
}
const init = () => {
    const snakeDiv = document.querySelector('#snake');
    snakeDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003275208_0ae1513d85_o.png');
    });
    const eyeDiv = document.querySelector('#eye');
    eyeDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003470769_f80bd65f19_o.jpg');
    });
    const alienDiv = document.querySelector('#alien');
    alienDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003274593_b39acb736f_o.png');
    });
    const octopusDiv = document.querySelector('#octopus');
    octopusDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52002198357_78712b196f_o.jpg');
    });
    const plantDiv = document.querySelector('#plant');
    plantDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003476884_f2f373f983_o.jpg');
    });
    const teethDiv = document.querySelector('#teeth');
    teethDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003471409_e1df9f409e_o.jpg');
    });
    const coralDiv = document.querySelector('#coral');
    coralDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003281123_124963d3e1_o.jpg');
    });
    const ufoDiv = document.querySelector('#ufo');
    ufoDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003281448_a94ccb1531_o.jpg');
    });
}
window.onload = () => {
    init();
};