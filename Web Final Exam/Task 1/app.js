const hamburgerBtn = document.getElementById("hamburger");
const xmarkBtn = document.getElementById("x-mark");
const hamburgerContent = document.getElementsByClassName("hamburger-content");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.style.transition = "opacity 0.3s";
    hamburgerBtn.style.opacity = "0"; 
    setTimeout(() => {
        hamburgerBtn.style.display = "none";
    }, 1000)
    xmarkBtn.style.opacity = "1";
    xmarkBtn.style.display = "flex";
    const hamburgerArray = Array.from(hamburgerContent);
    hamburgerArray.forEach(element => {
        element.style.display = "flex";
    });
});

xmarkBtn.addEventListener("click", () => {
    xmarkBtn.style.transition = "opacity 0.3s";
    xmarkBtn.style.opacity = "0"; 
    setTimeout(() => {
        xmarkBtn.style.display = "none";
    }, 1000)
    hamburgerBtn.style.opacity = "1";
    hamburgerBtn.style.display = "flex";
    const hamburgerArray = Array.from(hamburgerContent);
    hamburgerArray.forEach(element => {
        element.style.display = "none";
    });
});