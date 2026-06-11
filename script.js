const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {
    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.classList.add("lightbox");

        const bigImage = document.createElement("img");
        bigImage.src = img.src;

        overlay.appendChild(bigImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

    });
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

fadeElements.forEach(el => {
    observer.observe(el);
});
