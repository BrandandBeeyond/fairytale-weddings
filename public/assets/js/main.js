
window.addEventListener("load", function () {
  let device_width = window.innerWidth;

  if (device_width > 100) {
    var why_us = document.querySelector(".horizontal-scroll-1");
    let sections = gsap.utils.toArray(".h-section");
    if (!why_us || !sections.length) return;
    //        var elemWidth = why_us.offsetWidth * 2;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 0.99),
      ease: "none",
      scrollTrigger: {
        trigger: why_us,
        start: "top top+=0",
        end: "+=3000",
        scrub: 2,
        pin: true,
        //            snap: 1 / (sections.length - 1),
        //            end: () => "+=" + elemWidth,
        //            end: () => "+=5000",
        pinSpacing: true,
        //            markers: true,
        invalidateOnRefresh: true,
      },
    });
  }
});


window.addEventListener("load", function () {
  const vowsSection = document.querySelector("#ourvows");
  if (!vowsSection) return;
  const vows = document.querySelectorAll(
    ".firstvow, .secondvow, .thirdvow, .fourthvow, .fifthvow, .sixthvow, .seventhvow"
  );

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.8; // Adjust trigger point if needed
  }

  function animateVows() {
    if (isInViewport(vowsSection)) {
      vows.forEach((vow, index) => {
        setTimeout(() => {
          vow.classList.add("vow-visible");
        }, index * 150); // 400ms delay between each
      });
      window.removeEventListener("scroll", animateVows); // Run once
    }
  }

  window.addEventListener("scroll", animateVows);
});

