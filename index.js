let getCount = document.querySelector("h1")
let count = 0
let input = document.querySelector("#text")

document.onkeydown = function (e) {
    e = e || window.event;
    count ++
    getCount.textContent = count
    input.textContent += e.key
};