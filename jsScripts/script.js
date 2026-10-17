document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const overlay = document.querySelector(".overlay");
    const backgroundImages = [
        "assets/images/coding-background.png",
        "assets/images/career.jpg",
        "assets/images/bsa.png",
        "assets/images/standardbackground.jpg",
    ];

    boxes.forEach((box, index) => {
        box.addEventListener("mouseover", () => {
            overlay.style.opacity = 0;

            setTimeout(() => {
                overlay.style.backgroundImage = `url('${backgroundImages[index]}')`;
                overlay.style.opacity = 1;
            }, 250);
        });

        box.addEventListener("mouseout", () => {
            overlay.style.opacity = 0;

            setTimeout(() => {
                overlay.style.backgroundImage = "url('default-background.jpg')";
                overlay.style.opacity = 1;
            }, 250);
        });
    });
});




