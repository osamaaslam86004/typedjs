
// Hero Section - Dynamic Typing
const heroTyped = new Typed("#typed-hero", {
    stringsElement: '#hero-strings',
    typeSpeed: 80,
    backSpeed: 80,
    loop: false,
});

// Features Section - Highlight Features
const featuresTyped = new Typed("#features-typed", {
    stringsElement: '#features-strings',
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
});

// Testimonials Section - Rotating Feedback
const testimonialsTyped = new Typed("#testimonials-typed", {
    strings: [
        "This platform is a game-changer for crypto trading!",
        "Managing my portfolio has never been easier.",
        "The security features give me peace of mind.",
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
});
