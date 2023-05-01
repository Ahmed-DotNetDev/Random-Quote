let quate = document.getElementById("quote");
let auther = document.getElementById("author");
let btn = document.getElementById("btn");
const URL = "https://api.quotable.io/random";

let getQuate = () => {
    quate.classList.remove("fade");
    auther.classList.remove("fade");
    fetch(URL)
        .then((data) => data.json())
        .then((item) => {
            quate.innerHTML = item.content;
            auther.innerHTML = item.author;
            quate.classList.add("fade");
            auther.classList.add("fade");

        });
}
window.addEventListener("load", getQuate);
btn.addEventListener("click", getQuate);