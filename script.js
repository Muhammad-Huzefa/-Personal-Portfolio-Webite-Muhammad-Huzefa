// NAV MENU TOGGLE
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll("input, textarea");

    for (let f of fields) {
        if (!f.value.trim()) {
            alert("Please fill all fields.");
            return;
        }
    }

    alert("Your message has been sent successfully!");
    form.reset();
});