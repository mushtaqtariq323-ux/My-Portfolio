// const sections=document.querySelectorAll("section");

// window.addEventListener("scroll",()=>{

// sections.forEach(sec=>{

// const top=window.scrollY;

// const offset=sec.offsetTop-250;

// if(top>offset){

// sec.style.opacity="1";

// sec.style.transform="translateY(0px)";

// }

// });

// });

// sections.forEach(sec=>{

// sec.style.opacity="0";

// sec.style.transform="translateY(80px)";

// sec.style.transition="1s";

// });





// ==============================
// Typing Animation
// ==============================

const typing = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Web Developer",
    "React Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// Scroll Reveal Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Navbar Background on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(10,15,30,.92)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";

    }

});


// ==============================
// Smooth Button Hover Animation
// ==============================

document.querySelectorAll(".btn,.btn2,.project-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});