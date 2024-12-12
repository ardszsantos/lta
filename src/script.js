const laranja = document.querySelector(".laranja");
const topDiv = document.querySelector(".orange.top");
const bottomDiv = document.querySelector(".orange.bottom");

laranja.addEventListener("click", () => {
    // Animate the orange SVG
    laranja.style.transform = "rotate(360deg) scale(1.5)";
    laranja.style.opacity = "0";

    // Animate the top and bottom divs
    setTimeout(() => {
        topDiv.style.transform = "translateY(-100%)";
        bottomDiv.style.transform = "translateY(100%)";
    }, 400);

    // Remove the SVG after animation
    setTimeout(() => {
        laranja.style.display = "none";
    }, 800);
});
