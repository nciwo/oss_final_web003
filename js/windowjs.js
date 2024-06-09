window_width = window.innerWidth;
window_height = window.innerHeight;
document.body.style.height = window_height + "px";
document.body.style.width = window_width + "px";

window.addEventListener("resize", () => {
    window_width = window.innerWidth;
    window_height = window.innerHeight;
    document.body.style.height = window_height + "px";
    document.body.style.width = window_width + "px";
    
    console.log("resized " + window.innerWidth + ", " + window.innerHeight);
    console.log("body: " + document.body.style.width + ", " + document.body.style.height);
});


let docTitle = document.title;
window.addEventListener("focus", () => {
    document.title = docTitle;
});
window.addEventListener("blur", () => {
    document.title = "Come Back 😥";
});