const modal = (imgSrc) => {
    let modalDiv = document.createElement('div');
    modalDiv.className += 'modal';
    let modalImg = document.createElement('img');
    modalImg.className += 'modalImg';
    modalImg.src = imgSrc;
    modalDiv.appendChild(modalImg);
    document.body.prepend(modalDiv);
}
const init = () => {
    const snakeDiv = document.querySelector('#snake');
    snakeDiv.addEventListener('click', () => {
        modal('https://live.staticflickr.com/65535/52003275208_0ae1513d85_o.png');
    });
}
window.onload = () => {
    init();
};