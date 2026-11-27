/* Inline scripts from the original index.php, unchanged */
    AOS.init();
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
    $(".certificate-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger-init");
        const menuWrapper = document.querySelector(".menu-wrapper");
        const menu = document.querySelector(".menu");
        const menuItems = document.querySelectorAll(".menu li");
        const submenuParents = document.querySelectorAll(".menu-item-has-children > a");

        // Function to disable scrolling
        function disableScroll() {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh"; // Prevents extra scrolling
            document.documentElement.style.overflow = "hidden"; // For cross-browser support
        }

        // Function to enable scrolling
        function enableScroll() {
            document.body.style.overflow = "";
            document.body.style.height = "";
            document.documentElement.style.overflow = "";
        }

        // Toggle Hamburger Menu
        hamburger.addEventListener("click", function () {
            this.classList.toggle("active");
            menuWrapper.classList.toggle("visible");
            menu?.classList.toggle("menu-active");

            if (menuWrapper.classList.contains("visible")) {
                disableScroll();
            } else {
                enableScroll();
            }

            // Animate Menu Items
            menuItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2}s`;
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            });
        });

        // Toggle Submenus
        submenuParents.forEach(parent => {
            parent.addEventListener("click", function (e) {
                e.preventDefault();
                const parentItem = this.parentElement;
                parentItem.classList.toggle("sub-menu-active");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (!hamburger.contains(e.target) && !menuWrapper.contains(e.target)) {
                hamburger.classList.remove("active");
                menuWrapper.classList.remove("visible");
                menu?.classList.remove("menu-active");
                enableScroll(); // Re-enable scrolling when menu is closed

                // Hide submenus
                submenuParents.forEach(parent => {
                    parent.parentElement.classList.remove("sub-menu-active");
                });
            }
        });
    });
    if (window.location.pathname.endsWith("index.php") && window.innerWidth <= 768) {
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".footermain").style.marginTop = "-237px";
        });
    }
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to("html, body", {
    //     scrollBehavior: "smooth",
    //     duration: 1,
    //     ease: "power1.out",
    // });

    document.addEventListener("DOMContentLoaded", function () {
        let lastScrollTop = 0;
        const header = document.getElementById("header");

        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Check if we are beyond 100vh
            if (scrollTop > window.innerHeight) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

            // Hide header when scrolling down, show when scrolling up
            if (scrollTop > lastScrollTop) {
                header.classList.add("header-hidden");
            } else {
                header.classList.remove("header-hidden");
            }

            lastScrollTop = scrollTop;
        });
    });


    /* Demo Scripts for Bootstrap Carousel and Animate.css article
    * on SitePoint by Maria Antonietta Perna
    */
    (function ($) {
        //Function to animate slider captions
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = "webkitAnimationEnd animationend";

            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data("animation");
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $myCarousel = $("#carouselExampleIndicators"),
            $firstAnimatingElems = $myCarousel
                .find(".carousel-item:first")
                .find("[data-animation ^= 'animated']");

        //Initialize carousel
        $myCarousel.carousel();

        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);

        //Other slides to be animated on carousel slide event
        $myCarousel.on("slide.bs.carousel", function (e) {
            var $animatingElems = $(e.relatedTarget).find(
                "[data-animation ^= 'animated']"
            );
            doAnimations($animatingElems);
        });
    })(jQuery);
    document.addEventListener("DOMContentLoaded", function () {
        let counters = document.querySelectorAll(".counter");

        let observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let target = entry.target;
                        let maxCountText = target.getAttribute("data-counter");
                        let suffix = "+";
                        let maxCount = 0;

                        // Extract numeric value and check if it has "k"
                        if (maxCountText.includes("k")) {
                            maxCountText = maxCountText.replace("k", "");
                            suffix = "k+"; // Ensures k also has +
                        }

                        maxCount = parseInt(maxCountText, 10);
                        let count = 0;
                        let speed = Math.ceil(maxCount / 100); // Slower increment

                        let counterInterval = setInterval(() => {
                            count += 1; // Increment by 1

                            if (count >= maxCount) {
                                count = maxCount;
                                clearInterval(counterInterval);
                            }

                            // Update the counter with suffix
                            target.setAttribute("data-counter", count + suffix);
                        }, 100); // Adjust speed (higher value = slower)

                        observer.unobserve(target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.5 } // Start animation when 50% visible
        );

        counters.forEach(counter => observer.observe(counter));
    });


