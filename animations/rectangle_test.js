gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);




















    const cards = document.querySelectorAll('.card_image_wrapper')
const hero = document.querySelector('.hero'),
   heroTitle = document.querySelector('.hero-text'),
   heroGallery = hero.querySelector('.hero_gallery'),
   heroNav = document.querySelector(".box"),
   heroFrames = hero.querySelectorAll('.hero_gallery_frame');
   heroPlus = document.querySelectorAll(".texts");
  let isEnable = false;




   const initHero = () => {
    gsap.set(heroTitle, { y: '-100%',}); 
	gsap.set(heroNav, { autoAlpha: 0 });


    showHero();
   };




window.onload = () => {
    initHero();
};


const showHero = () => {
    gsap.timeline ()
    .to( 
        heroTitle,
        {
            duration: 1.8, 
            y: 0,
            ease: 'expo.inOut', 
            stagger: 0.025,
        },
        0
    )
	.to( 
		heroNav,
		{
			duration: 1.8, 
            autoAlpha: 1,
			ease: 'expo.inOut', 
			stagger: 0.025,
		},
		0
	)
    
    };
    
    const animateImages = (event) => {
        heroFrames.forEach ((el)=> {
            let xPos = event.clientX / window.innerWidth - 0.5,
            yPos = event.clientY / window.innerHeight - 0.5;
            gsap.to(el, {
                duration: 0.5,
                rotationY: xPos * 10,
                rotationX: yPos * 10,
                stagger: 0.055,
            });
        });
    };
    
    const animateCard = (event) => {
        cards.forEach ((el)=> {
            let xPos = event.clientX / window.innerWidth - 0.5,
            yPos = event.clientY / window.innerHeight - 0.5;
            gsap.to(el, {
                duration: 0.5,
                rotationY: xPos * 10,
                rotationX: yPos * 10,
                stagger: 0.055,
            });
        });
    };
    
    window.addEventListener('mousemove', (event) => {
        if (!isEnable) return;
        animateImages(event);
        animateCard(event);
    })


 








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



// Footer Anim






const footerText = document.querySelector(".footer_bottom");
const footerInner = document.querySelector(".box2");




let footerAnim = gsap.to(".footer_bottom", {
    scrollTrigger: {
        trigger: ".box2",
        start: "-20vh center",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none none",


        
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




about_section_one = document.querySelector(".about_heading1");
about_section_two = document.querySelector(".about_heading2");
about_section_three = document.querySelector(".about_heading3");
about_section_four = document.querySelector(".about_heading4");

gsap.set(about_section_one,{ autoAlpha: 0, x: -500, y: 0});
gsap.set(about_section_two,{ autoAlpha: 0, x: 500});
gsap.set(about_section_three,{ autoAlpha: 0, x:-500});
gsap.set(about_section_four,{ autoAlpha: 0, x: 500});



about_section_text = document.querySelector(".about_text");
about_section_text2 = document.querySelector(".about_text2");
about_section_text3 = document.querySelector(".about_text3");
about_section_text4 = document.querySelector(".about_text4");

gsap.set(about_section_text,{ autoAlpha: 0, y: 500});
gsap.set(about_section_text2,{ autoAlpha: 0, y: 500});
gsap.set(about_section_text3,{ autoAlpha: 0, y: 500});
gsap.set(about_section_text4,{ autoAlpha: 0, y: 500});
  
let aboutAnim1 = gsap.to(".about_heading1", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "10vh bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    y: 0,
    opacity: 1,
    ease: "sine.inOut",

  });
  let aboutAnim12 = gsap.to(".about_text", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "10vh bottom",
    
      scrub: 2,

    },
    autoAlpha: 1,
    y: 0,
    ease: "sine.inOut",

  });

 

  let anim4 = gsap.to(".about-image > img", {
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: "25% center",
      scrub: 2, 
      markers: true
    },
    opacity: 1,
    ease: "sine.inOut"
    
  });

    let anim5 = gsap.to(".about-image2 > img", {
    scrollTrigger: {
      trigger: ".about2",
      start: "top center",
      end: "25% center",
      scrub: 2, 
      markers: true
    },
    opacity: 1,
    ease: "sine.inOut"
    
  });

  // let aboutAnim2 = gsap.to(".about_section_two", {
  //   scrollTrigger: {
  //     trigger: ".about2",
  //     start: "top center",
  //     end: "bottom bottom",
  //     scrub: 2,

  //   },
  //   autoAlpha: 1,
  //   y: 0,
  //   ease: "sine.inOut",

  // });
  // let aboutAnim3 = gsap.to(".about_section_three", {
  //   scrollTrigger: {
  //     trigger: ".about3",
  //     start: "top center",
  //     end: "bottom bottom",
  //     scrub: 2,

  //   },
  //   autoAlpha: 1,
  //   y: 0,
  //   ease: "sine.inOut",

  // });
  
  // let aboutAnim4 = gsap.to(".about_section_four", {
  //   scrollTrigger: {
  //     trigger: ".about4",
  //     start: "top center",
  //     end: "bottom bottom",
  //     scrub: 2,

  //   },
  //   autoAlpha: 1,
  //   y: 0,
  //   ease: "sine.inOut",

  // });



  let aboutAnim2 = gsap.to(".about_heading2", {
    scrollTrigger: {
      trigger: ".about2",
      start: "top center",
      end: "10vh bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    y: 0,
    opacity: 1,
    ease: "sine.inOut",

  });
  let aboutAnim22 = gsap.to(".about_text2", {
    scrollTrigger: {
      trigger: ".about2",
      start: "top center",
      end: "10vh bottom",
 
      scrub: 2,

    },
    autoAlpha: 1,
    y: 0,
    ease: "sine.inOut",

  });
  

  let aboutAnim3 = gsap.to(".about_heading3", {
    scrollTrigger: {
      trigger: ".about3",
      start: "top center",
      end: "10vh bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    y: 0,
    opacity: 1,
    ease: "sine.inOut",

  });
  let aboutAnim33 = gsap.to(".about_text3", {
    scrollTrigger: {
      trigger: ".about3",
      start: "top center",
      end: "10vh bottom",

      scrub: 2,

    },
    autoAlpha: 1,
    y: 0,
    ease: "sine.inOut",

  });
  
  let aboutAnim4 = gsap.to(".about_heading4", {
    scrollTrigger: {
      trigger: ".about4",
      start: "top center",
      end: "10vh bottom",
      scrub: 2,

    },
    autoAlpha: 1,
    x: 0,
    y: 0,
    opacity: 1,
    ease: "sine.inOut",

  });
  let aboutAnim41 = gsap.to(".about_text4", {
    scrollTrigger: {
      trigger: ".about4",
      start: "top center",
      end: "10vh bottom",

      scrub: 2,

    },
    autoAlpha: 1,
    y: 0,
    ease: "sine.inOut",

  });
  

const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"20% center",
	end: "bottom top",
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
})

gsap.set(races,{x: -300});
const catalogButton = document.querySelector(".catalog-button");
gsap.set(catalogButton, {x:-100});


let exploreMoreAnim = gsap.to(".catalog-button",  {
    scrollTrigger: {
        trigger: ".racesWrapper",
        start: "center center",
        end: "70% center",
        scrub: 2,
    },
    opacity: 1,
    x: 0,
    ease: "sine.inOut",
})
