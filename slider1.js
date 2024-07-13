var btn = document.getElementsByClassName('btn');
var slide = document.getElementById('slide');
var currentIndex = 0;

function moveToSlide(index) {
    slide.style.transform = `translateX(-${index * 800}px)`;
    for (var i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
    }
    btn[index].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 4;
    moveToSlide(currentIndex);
}

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        currentIndex = i;
        moveToSlide(currentIndex);
    }
}

setInterval(nextSlide, 3000);
