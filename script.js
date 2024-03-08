const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");
const sideBar = document.querySelector(".sidebar");

menuBtn.addEventListener('click', function () {
    sideBar.classList.add('action');
});

closeBtn.addEventListener('click', function () {
    sideBar.classList.remove('action');
})