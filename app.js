document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slides').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slides').prepend(lists[lists.length - 1]);
};