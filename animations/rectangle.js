gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
let heroContainer = document.querySelector(".hero");



/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 2,
	
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});





    let test12345 = gsap.to(".logo", {
		scrollTrigger: {
			trigger: "#panels",
            start: (panelsContainer.offsetHeight),
			scrub: 2,
            end: (panelsContainer.offsetHeight * 2),
		},
        opacity: 1,
		ease: "sine.inOut",
		duration: 10,
	});
    












    const cards = document.querySelectorAll('.card_image_wrapper')
const hero = document.querySelector('.hero'),
   heroTitle = hero.querySelectorAll('.hero_title > .hero-text'),
   heroGallery = hero.querySelector('.hero_gallery'),
   heroNav = document.querySelector(".box"),
   heroFrames = hero.querySelectorAll('.hero_gallery_frame');
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
    margin: 10,
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
    scaleY: 3,
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
        y: "50vh",
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

// Header Anim
let headerHideAnim = gsap.to(".box", {
    scrollTrigger: {
        trigger: "footer",
        start: "top center",
        end: "center center",
        markers: true,
        scrub: 2,
    },
    y: -300,
    ease: "sine.inOut",
    duration: 3,
});

