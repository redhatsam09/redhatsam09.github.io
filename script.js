const outputArea = document.querySelector('.output code');

function typeWithDelay(text, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            outputArea.innerHTML += `<span>${text}</span>`;
            resolve();
        }, delay);
    });
}

async function animateWelcome() {
    await typeWithDelay('$ Welcome to Hacker Terminal\n', 1000);
    await typeWithDelay('$ Initializing...\n', 1000);
    await typeWithDelay('$ Access granted.\n', 1000);
    await typeWithDelay("$ Type 'hi' and press Enter to continue.\n$ >_", 1000);
}

async function typeResponse(response) {
    for (let i = 0; i < response.length; i++) {
        const char = response[i];
        const glitchClass = i % 2 === 0 ? 'glitch' : '';
        outputArea.innerHTML += `<span class="${glitchClass}">${char}</span>`;
        await new Promise(resolve => setTimeout(resolve, 50)); // Delay between characters in milliseconds
    }
}

// ... (other code)

document.getElementById('user-input').addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const input = e.target.value.trim().toLowerCase();
        let response = '';

        if (input === 'hi') {
            response = "Hi Sam this side, I am a normal High School student pursuing my dream to be the best in cybersecurity field. Having all kinds of knowledge about OWASP top 10 and hunting on different platforms discovering new zero-days. A good content writer with fluency in English. Playing CTFs all day long. Getting bounties and enjoying life.";
        } else {
            response = `Command not recognized: ${input}`;
        }

        outputArea.innerHTML += `\n$ > ${input}\n`;
        await typeResponse(response);

        // Append social media links with replica emojis and green borders
        outputArea.innerHTML += `\n$ > Follow me on:\n`;
        outputArea.innerHTML += `$ > LinkedIn: <a href="https://www.linkedin.com/" target="_blank"><span class="emoji">&#x1F4E1;</span>linkedin.com</a>\n`;
        outputArea.innerHTML += `$ > Twitter: <a href="https://twitter.com/" target="_blank"><span class="emoji">&#x1F426;</span>twitter.com</a>\n`;
        outputArea.innerHTML += `$ > Instagram: <a href="https://www.instagram.com/" target="_blank"><span class="emoji">&#x1F4F7;</span>instagram.com</a>\n`;

        e.target.value = '';
    }
});

// ... (other code)


// Call the function to animate the welcome messages
animateWelcome();
