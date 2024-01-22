gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);






















 



    

 








// Header уменьшение анимация
  let headerAnim2 = gsap.to(".box", {
    scrollTrigger: {
        trigger: ".hero",
        start: "center center",
        end: "center top",
        scrub: true,
    },
    width: "90%",
    borderRadius: 50,
    ease: "sine.inOut",
    duration: 3,
});

let headerAnim3 = gsap.to("header", {
    scrollTrigger: {
        trigger: ".hero",
        start: "center center",
        end: "center top",
        scrub: true,
    },
    marginTop: 10,
    ease: "sine.inOut",
    duration: 3,
});









const footerText = document.querySelector(".footer_bottom");
const footerInner = document.querySelector(".box2");




let footerAnim = gsap.to(".footer_bottom", {
    scrollTrigger: {
        trigger: ".box2",
        start: "-20vh center",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none none",
        markers: true


        
    },
    scaleY: 2.3,
    y: "25vh",
    ease: "sine.in",
    duration: 1,
    onComplete: () => gsap.to(".footer_bottom", { 
        scrollTrigger: { 
            scrub: false,
            toggleActions: "play none none none"
        }, 
        scaleY: 1, 
        ease: "sine.in", 
        y: "40vh",
        onComplete: () => { kek()},

    }),

    
},
    
);

let leaveAnim = gsap.to(".box2", {
    scrollTrigger: {
        trigger:".box2",
        start: "top bottom",
        end: "top 100px",
        onLeaveBack: () => { kek2()},
    }
});

function kek () {
    footerText.classList.add("ddd");
}
function kek2 () {
    footerText.classList.remove("ddd");
}



// ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".footer_bottom", {scaleY: 1}));



// function addClass () {
//     let footer = document.querySelector(".footer_bottom");
//     footer.classList.add("deb");
// }

// function deleteClass() {
//     let footer = document.querySelector(".footer_bottom");
//     footer.classList.remove("deb");
// }


// Header Anim
let headerHideAnim = gsap.to(".box", {
    scrollTrigger: {
        trigger: ".site-footer",
        start: "top center",
        end: "center center",
        scrub: 2,
    },
    y: -300,
    ease: "sine.inOut",
    duration: 3,
});



const benefitsWrapper = document.querySelector(".benefits_wrapper");

let benefitsAnimation = gsap.to(".big-card", {
  scrollTrigger: {
    trigger: ".gg",
    start: "top center",
    end: "33% center",
    scrub: 2,
  },
  opacity: 1,
  ease: "sine.inOut",
duration: 1,
});

let benefitsAnimation2 = gsap.to(".top", {
    scrollTrigger: {
      trigger: ".gg",
      start: "33% center",
      end: "66% center",
      scrub: 2,
      
    },
    opacity: 1,
    ease: "sine.inOut",
  duration: 1,
  });
  
  let benefitsAnimation3 = gsap.to(".bottom", {
    scrollTrigger: {
      trigger: ".gg",
      start: "66% center",
      end: "100% center",
      scrub: 2,
    },
    opacity: 1,
    ease: "sine.inOut",
  duration: 1,
  });
  

text2 = document.querySelector(".text-2");


 


first = document.querySelector(".first");
second = document.querySelector(".second");
third= document.querySelector(".third");

gsap.set(first, {  autoAlpha: 0});
gsap.set(second, { autoAlpha: 0});
gsap.set(third, { autoAlpha: 0});

var animka = gsap.timeline({repeat: 100, repeatDelay: 1});

animka.to(".first", {y: 0, autoAlpha: 1, duration:2, ease: 'expo.inOut', delay: 0.7}  );
animka.to(".first", {y: 0, autoAlpha: 0, duration:3, ease: 'expo.inOut', }, );
animka.to(".second", {autoAlpha: 1, duration:2, ease: 'expo.inOut',}, "-=3");
animka.to(".second", {autoAlpha: 0, duration:3, ease: 'expo.inOut',}, );
animka.to(".third", {autoAlpha: 1, duration:2, ease: 'expo.inOut',}, "-=3");
animka.to(".third", {autoAlpha: 0, duration:3, ease: 'expo.inOut',}, );




about_section_one = document.querySelector(".about_section_one");
about_section_two = document.querySelector(".about_section_two");
about_section_three = document.querySelector(".about_section_three");
about_section_four = document.querySelector(".about_section_four");

gsap.set(about_section_one,{ autoAlpha: 0, x: -500});
gsap.set(about_section_two,{ autoAlpha: 0, x: 500});
gsap.set(about_section_three,{ autoAlpha: 0, x: -500});
gsap.set(about_section_four,{ autoAlpha: 0, x: 500});


  
let aboutAnim1 = gsap.to(".about_section_one", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "bottom bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    ease: "sine.inOut",

  });

  let aboutAnim2 = gsap.to(".about_section_two", {
    scrollTrigger: {
      trigger: ".about2",
      start: "top center",
      end: "bottom bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    ease: "sine.inOut",

  });
  let aboutAnim3 = gsap.to(".about_section_three", {
    scrollTrigger: {
      trigger: ".about3",
      start: "top center",
      end: "bottom bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    ease: "sine.inOut",

  });
  
  let aboutAnim4 = gsap.to(".about_section_four", {
    scrollTrigger: {
      trigger: ".about4",
      start: "top center",
      end: "bottom bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    ease: "sine.inOut",

  });
  





const catalogButton = document.querySelector(".catalog-button");
gsap.set(catalogButton, {x:-100});


let exploreMoreAnim = gsap.to(".catalog-button",  {
    scrollTrigger: {
        trigger: ".racesWrapper",
        start: "center center",
        end: "70% center",
        scrub: 2
    },
    opacity: 1,
    x: 0,
    ease: "sine.inOut",
})


let currentScroll = 0;
let isScrollingDown = true;

let marqueeAnim = gsap
    .to(".also_heading", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
})
.totalProgress(0.5);

gsap.set(".you_may_also_inner", {xPercent: -50 });

window.addEventListener("scroll", function () {
    if(window.scrollY > currentScroll) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }

    gsap.to(marqueeAnim, {
        timeScale: isScrollingDown ? 1 : -1,
    });
    currentScroll = window.scrollY;
});
