// Зміна кольору заголовка при кліку
document.querySelector('.header').addEventListener('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === 'blue' ? '#333' : 'blue';
});

// Зміна розміру тексту в боковій колонці при наведенні
document.querySelector('.sidebar').addEventListener('mouseenter', function () {
    this.style.fontSize = '1.5em';
});
document.querySelector('.sidebar').addEventListener('mouseleave', function () {
    this.style.fontSize = '1em';
});

// Зміна фону сторінки при натисканні клавіші "Space"
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        document.body.style.backgroundColor =
            document.body.style.backgroundColor === 'lightblue' ? '#f20505' : 'lightblue';
    }
});

// Анімація кольору заголовка
let hue = 0;
setInterval(() => {
    hue = (hue + 1) % 360; // Обертання відтінків кольору
    document.querySelector('.header').style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
}, 50);
