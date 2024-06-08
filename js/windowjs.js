let window_width = window.innerWidth;
let window_height = window.innerHeight;
document.getElementById("body").style.height = window_height + "px";
document.getElementById("body").style.width = window_width + "px";

window.addEventListener("resize", () => {
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;
    document.getElementById("body").style.height = window_height + "px";
    document.getElementById("body").style.width = window_width + "px";
});


let docTitle = document.title;
window.addEventListener("focus", () => {
    document.title = docTitle;
});
window.addEventListener("blur", () => {
    document.title = "Come Back 😥";
})