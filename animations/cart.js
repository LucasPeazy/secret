gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);






 



  let isEnable = false;




   const initHero = () => {
    gsap.set([ heroGallery], { autoAlpha: 0 }); 
    gsap.set(heroTitle, { y: '-100%',}); 
	gsap.set(heroNav, { autoAlpha: 0 });
    gsap.set(heroFrames, { height: 0 });



    showHero();
   };




window.onload = () => {
    initHero();
};


const showHero = () => {
    gsap.timeline ()
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
            heroGallery, 
            {
                duration: 0.5,
                autoAlpha: 0,
                ease: 'expo.inOut',
                stagger: 0.025,
            },
            0
        ).to(heroFrames, {
                duration: 1.8,
                height: 'auto',
                ease: 'expo.inOut',
                stagger: {
                    each: 0.025,
                    from: 'random',
                    grid: 'auto',
                    ease: 'expo.inOut',
                },
                onComplete: () => {
                    isEnable = true;
                },
        }, 0.1
        );
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


   // Бегущая строка 1
    let currentScroll = 0;
    let isScrollingDown = true;

    let marqueeAnim = gsap
        .to(".test3", {
            xPercent: -100,
            repeat: -1,
            duration: 10,
            ease: "linear",
    })
    .totalProgress(0.5);

    gsap.set(".test2", {xPercent: -50 });

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




    let currentScroll2 = 0;
    let isScrollingDown2 = true;
    let marqueeAnim2 = gsap
        .to(".favorite_posters_heading", {
            xPercent: -100,
            repeat: -1,
            duration: 10,
            ease: "linear",
    })
    .totalProgress(0.5);

    gsap.set(".favorite_posters_inner", {xPercent: -50 });

    window.addEventListener("scroll", function () {
        if(window.scrollY > currentScroll) {
            isScrollingDown2 = true;
        } else {
            isScrollingDown2 = false;
        }

        gsap.to(marqueeAnim2, {
            timeScale: isScrollingDown2 ? -1 : 1,
        });
        currentScroll2 = window.scrollY;
    });





function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  let headerAnim2 = gsap.to(".box", {
    scrollTrigger: {
        trigger: ".hero",
        start: "-100000px top",
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
        start: "-100000px top",
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

