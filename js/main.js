document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       REVEAL ON SCROLL
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-main, " +
        ".about-side, " +
        ".president-card, " +
        ".leader-card, " +
        ".principle-card, " +
        ".news-item, " +
        ".document-card"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                obs.unobserve(entry.target);
            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /* =========================================
       HEADER EFFECT
    ========================================== */

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /* =========================================
       PREVENT EMPTY LINKS
    ========================================== */

    document.querySelectorAll('a[href="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {
            event.preventDefault();
        });

    });

});