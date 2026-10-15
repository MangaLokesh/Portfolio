

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});



document.getElementById("year").textContent =
    new Date().getFullYear();