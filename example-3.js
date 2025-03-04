// Hero Section - Dynamic Typing
new Typed("#hero-typed", {
    strings: ["Crypto Wallet", "Exchange", "Portfolio Manager"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
});

// Features Section - Highlight Features
new Typed("#features-typed", {
    strings: ["Secure Wallets", "Crypto Trading", "Advanced Analytics"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
});

// Example 1: Smart Cursor
new Typed("#smart-cursor", {
    strings: ["This cursor blinks!", "It looks awesome!"],
    typeSpeed: 70,
    backSpeed: 50,
    showCursor: true, // Enables the blinking cursor
    cursorChar: "|", // Custom cursor character
    loop: true,
});

// Example 2: Delayed Typing
new Typed("#delayed-typing", {
    strings: ["Typing starts... after a delay!", "Delay can make things dramatic."],
    typeSpeed: 70,
    backSpeed: 50,
    startDelay: 1000, // 1 second delay before typing starts
    backDelay: 1500, // 1.5-second pause before erasing starts
    loop: true,
});

// Example 3: Non-Loop Typing
new Typed("#non-loop", {
    strings: ["This message appears only once!"],
    typeSpeed: 80,
    showCursor: false, // Hides cursor for a cleaner look
    loop: false, // Does not repeat the typing
});

// Call to Action - Multiple Animations
new Typed("#cta-typed", {
    strings: ["Join us today!", "Start trading now!", "Your crypto journey begins here."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
});
