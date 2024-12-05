### Bulk Typing

```// 1. Bulk Typing: Welcome Message
new Typed("#bulk-typed", {
// Example-1:
//   strings: ["Crypto Wallet 🚀", "Secure Exchange 🌐", "Portfolio Manager 📈"],
// Example-2:
  strings: ['Crypto Wallet 🚀^1000\n Secure Exchange 🌐 ^1000\n Portfolio Manager 📈'],
//   Example-3:
// strings: ['npm install^1000\n `installing components...`^1000\n`Fetching from source...`'],
typeSpeed: 100,
backSpeed: 30,
loop: true,
smartBackspace: false, // Keeps all strings, no skipping. default true
});
```

### FadeOut Typing

```// 2. FadeOut Effect: Instructions
new Typed("#instruction-typed", {
strings: [
"Enter your name below.",
"Don't forget your email!",
"Share your feedback with us.",
],
typeSpeed: 50,
backSpeed: 40,
fadeOut: true, // Fades out the text after typing.
loop: true,
});
```

### Typing in Input Field

```// 3. Typing in Input Field: Dynamic Placeholder
const nameInput = new Typed("#name", {
strings: ["John Doe", "Jane Smith", "CryptoFan123"],
typeSpeed: 50,
backSpeed: 40,
loop: true,
shuffle: true, // Shuffles the order of strings.
});
```

![screenshot](screencapture-127-0-0-1-8000-example-1-html-2024-12-05-23_17_23.png)
