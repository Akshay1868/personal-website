document.addEventListener("DOMContentLoaded", function () {
    // Logo navigation to home
    document.querySelector(".logo").addEventListener("click", function () {
        window.location.href = "HOME.html";
    });

    // Typing Effect
    const textElement = document.querySelector(".typing-text");
    const words = ["Akshay ",  "a Service Delivery Lead ","Tech Enthusiast ", "Creative Coder "];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!textElement) return; // Safety check

        const currentWord = words[wordIndex];
        const displayText = isDeleting
            ? currentWord.substring(0, letterIndex--)
            : currentWord.substring(0, letterIndex++);

        textElement.innerHTML = `Hello, I'm <span class="highlight">${displayText}</span>`;

        let typingSpeed = isDeleting ? 50 : 120;

        if (!isDeleting && letterIndex === currentWord.length) {
            typingSpeed = 2000; // Pause before deleting
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // Floating Shapes
    const shapeContainer = document.querySelector(".hero");

    for (let i = 0; i < 10; i++) { // Generate 10 shapes
        const shape = document.createElement("div");
        shape.classList.add("shape");

        // Random positions
        shape.style.top = Math.random() * 80 + "vh";
        shape.style.left = Math.random() * 80 + "vw";

        // Random size
        let size = Math.random() * 50 + 20; // Between 20px and 70px
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;

        // Random animation duration
        shape.style.animationDuration = `${Math.random() * 5 + 3}s`;

        shapeContainer.appendChild(shape);
    }
});
