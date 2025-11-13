// ---------------------
// HAMBURGER MENU
// ---------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Close menu when clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("show"));
});


// ---------------------
// TYPING ANIMATION
// ---------------------

const typingElement = document.getElementById("typing");

const words = ["ai.edvero.xyz", "cosmind.ai"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 900);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();


// ---------------------
// SCROLL DOWN BUTTON
// ---------------------

function scrollDown() {
    document.getElementById("section1").scrollIntoView({
        behavior: "smooth"
    });
}
