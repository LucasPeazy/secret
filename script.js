gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


// /* Main navigation */
// let panelsSection = document.querySelector("#panels"),
// 	panelsContainer = document.querySelector("#panels-container"),
// 	tween;
// let heroContainer = document.querySelector(".hero");



// /* Panels */
// const panels = gsap.utils.toArray("#panels-container .panel");
// tween = gsap.to(panels, {
// 	xPercent: -100 * ( panels.length - 1 ),
// 	ease: "none",
// 	scrollTrigger: {
// 		trigger: "#panels-container",
// 		pin: true,
// 		start: "top top",
// 		scrub: 1,
// 		snap: {
// 			snapTo: 1 / (panels.length - 1),
// 			inertia: false,
// 			duration: {min: 0.1, max: 0.1}
// 		},
// 		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
// 	}
// });


	// let test123 = gsap.to(".lol", {
	// 	scrollTrigger: {
	// 		trigger: "#panels",
	// 		start: (panelsContainer.offsetHeight * 6),
	// 		endTrigger: ".catalog",
	// 		end: "top top",
	// 		scrub: true
	// 	},
	// 	x: 1500,
	// 	ease: "sine.inOut",
	// 	duration: 8,
	// });

	// let test1234 = gsap.to(".lol2", {
	// 	scrollTrigger: {
	// 		trigger: "#panels",
	// 		start: (panelsContainer.offsetHeight * 6),
	// 		endTrigger: ".catalog",
	// 		end: "top top",
	// 		scrub: true
	// 	},
	// 	x: -1500,
	// 	ease: "sine.inOut",
	// 	duration: 8,
	// });

    // let test12345 = gsap.to(".logo", {
	// 	scrollTrigger: {
	// 		trigger: "#panels",
    //         start: (panelsContainer.offsetHeight),
	// 		scrub: 2,
    //         end: (panelsContainer.offsetHeight * 2),
	// 	},
    //     opacity: 1,
	// 	ease: "sine.inOut",
	// 	duration: 10,
	// });
    
    // let test123456 = gsap.to(".nav-center", {
	// 	scrollTrigger: {
	// 		trigger: "#panels",
    //         start: (panelsContainer.offsetHeight),
	// 		scrub: true,
    //         end: "+=999999999999999999"
	// 	},
    //     y: 10,
	// 	ease: "sine.inOut",
	// 	duration: 10,
	// });






    // const header = document.querySelector(".logo");

    // window.addEventListener("scroll", trackScroll);


    // function trackScroll () {
    // 	const offset = window.scrollY;
    // 	const coords = document.documentElement.clientHeight;
    // 	if (offset > coords) {
    //         header.classList.remove("hidden");
    //         header.classList.add("slideInDown");
    // 	} else {
    //         header.classList.add("hidden");
    //         header.classList.remove("slideInDown");
    // 	}
    // 	}








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




const footerText = document.querySelector(".footer_bottom");
const footerInner = document.querySelector(".footer_inner");
const tl2 = gsap.timeline ({
    scrollTrigger: {
        trigger: ".footer_inner",
        start: "top center",
        end: "bottom bottom",
        scrub: true,

    }

});

tl2
.to(".footer_bottom", {
    scaleY: 3,
    y: 200,
    ease: "sine.inOut",
    duration: 10,
    onComplete: () => { selectNextElement()},
    onStart:  () => { selectNextElement2()}
}, );



let headerAnim4 = gsap.to(".box", {
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



const displayedImage = document.querySelector('.main_img');
const thumbBar = document.querySelector('.main_slide_box');

const images = ['photos/be your self copy 2.png', `photos/listen music 1.png`, `photos/walk 1.png`, `photos/run over copy1.png`];
const alts = {
  'pic1.png' : '',
  'pic2.png' : '',
  'pic3.png' : '',
  'pic4.png' : '',
  'pic5.png' : ''
}



for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `/photos/${image}`);
  newImage.setAttribute('alt', alts[image]);
  newImage.classList.add('slide_img_product');
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}