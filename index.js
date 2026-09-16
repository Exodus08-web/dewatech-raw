const header = document.getElementById("globalNav");
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const questions = document.querySelectorAll(".faq-question");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
    });
});

questions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;

        questions.forEach(other => {
            if (other.parentElement !== item) {
                other.parentElement.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});