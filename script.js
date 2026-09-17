document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-btn");
    const navigation = document.querySelector("nav");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("open");

            if (navigation.classList.contains("open")) {

                menuButton.textContent = "✕";

            } else {

                menuButton.textContent = "☰";

            }

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });


    /* =========================
       HOME ANIMATION
    ========================= */

    setTimeout(function () {

        document
            .querySelectorAll(".hero .reveal")
            .forEach(function (element) {

                element.classList.add("show");

            });

    }, 150);


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                formMessage.textContent =
                    "ขอบคุณสำหรับข้อความค่ะ! ฟอร์มนี้เป็นตัวอย่าง ยังไม่ได้ส่งอีเมลจริง";


                contactForm.reset();

            }
        );

    }


    /* =========================
       CLOSE MOBILE MENU
       WHEN CLICKING LINK
    ========================= */

    const navLinks =
        document.querySelectorAll("nav a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navigation) {

                navigation.classList.remove("open");

            }

            if (menuButton) {

                menuButton.textContent = "☰";

            }

        });

    });

});
