/* Shared inline scripts of the original subpages (AOS, date picker, carousels, menu, header) */

    AOS.init();


    flatpickr("#weddingDate", {
        dateFormat: "Y-m-d",
        altInput: true,
        altFormat: "F j, Y",
        minDate: "today",
        allowInput: true // allow user to type if needed
    });


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


/* page specific */

    document.addEventListener("DOMContentLoaded", function () {
        const tabs = document.querySelectorAll(".tab");
        const tabContents = document.querySelectorAll(".tab-content");

        // Check URL hash and activate the corresponding tab
        const activateTabFromHash = () => {
            const hash = location.hash ? location.hash.substring(1) : null;
            let tabIndex = 0; // Default to the first tab if no hash

            // Find tab index based on hash
            tabs.forEach((tab, index) => {
                if (
                    tab.textContent.trim().toLowerCase().replace(/\s+/g, "-") === hash
                ) {
                    tabIndex = index;
                }
            });

            // Activate the selected tab and its content
            tabs.forEach((tab, i) =>
                tab.classList.toggle("active", i === tabIndex)
            );
            tabContents.forEach((content, i) =>
                content.classList.toggle("hidden", i !== tabIndex)
            );
        };

        // Add event listeners for tab clicks
        tabs.forEach((tab, index) => {
            tab.addEventListener("click", function () {
                tabs.forEach((tab) => tab.classList.remove("active"));
                tab.classList.add("active");

                tabContents.forEach((content) => content.classList.add("hidden"));
                tabContents[index].classList.remove("hidden");

                // Update URL hash
                location.hash = tab.textContent
                    .trim()
                    .toLowerCase()
                    .replace(/\s+/g, "-");
            });
        });

        // Initialize based on current hash
        activateTabFromHash();

        // Listen for back/forward navigation
        window.addEventListener("popstate", activateTabFromHash);
    });
