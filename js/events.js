const nextNode = document.getElementById('next');
const prevNode = document.getElementById('prev');

nextNode.onclick = function () {
    Slider.next();
};

prevNode.onclick = function () {
    Slider.prev();
};
