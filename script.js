gsap.registerPlugin(ScrollTrigger);

// Intro phone screens timeline
const screens = gsap.utils.toArray('.phone-screen');
gsap.set(screens[0], { opacity: 1, translateY: 0 });

let tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: '#hero',
        start: 'top+=4rem top',
        end: '+=100%', // Reduced from 200% to allow quicker transition
        pin: true,
        scrub: true,
    }
});

screens.forEach((screen, i) => {
    if (i > 0) {
        tlHero
            .to(screens[i - 1], { opacity: 0, translateY: -50, duration: 1 })
            .fromTo(
                screen, { opacity: 0, translateY: 50 }, { opacity: 1, translateY: 0, duration: 1 }
            );
    }
});

// Animate feature panels
gsap.utils.toArray('.feature-panel').forEach((panel) => {
    let title = panel.querySelector('.panel-title');
    let text = panel.querySelector('.panel-text');
    let images = panel.querySelectorAll('.feature-img');

    // Animate title
    gsap.from(title, {
        scrollTrigger: {
            trigger: panel,
            start: "top 90%", // Adjusted trigger to be more forgiving
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
    });

    // Animate text
    gsap.from(text, {
        scrollTrigger: {
            trigger: panel,
            start: "top 90%", // Matches the title trigger for simplicity
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.2
    });

    // Animate images
    images.forEach((img, index) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: panel,
                start: "top 90%",
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: 0.1 * index
        });
    });
});