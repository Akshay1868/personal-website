document.addEventListener("DOMContentLoaded", function () {
    const shapeContainer = document.body; // Add shapes to the body for all pages

    for (let i = 0; i < 10; i++) { // Create 6 floating shapes
        const shape = document.createElement("div");
        shape.classList.add("shape");

        // Random positions
        shape.style.top = Math.random() * 100 + "vh";
        shape.style.left = Math.random() * 100 + "vw";

        shapeContainer.appendChild(shape);
    }
});
