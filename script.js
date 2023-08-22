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
    await typeWithDelay('$ Welcome to Hacker Terminal\n$ Initializing...\n$ Access granted.\n$ Type \'hi\' and press Enter to continue.\n$ >_', 1000);
    document.getElementById('user-input').focus(); // Focus on the input field
}

async function typeResponse(response, delay = 50) {
    for (let i = 0; i < response.length; i++) {
        const char = response[i];
        const glitchClass = i % 2 === 0 ? 'glitch' : '';
        outputArea.innerHTML += `<span class="${glitchClass}">${char}</span>`;
        await new Promise(resolve => setTimeout(resolve, delay)); // Delay between characters in milliseconds
    }
}

document.getElementById('user-input').addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const input = e.target.value.trim().toLowerCase();

        if (input === 'hi') {
            const response = "Hi Sam this side, I am a normal High School student pursuing my dream to be the best in cybersecurity field. Having all kinds of knowledge about OWASP top 10 and hunting on different platforms discovering new zero-days. A good content writer with fluency in English. Playing CTFs all day long. Getting bounties and enjoying life.";
            await typeResponse(response);

            const workPrompt = "\n$ Type 'work' and press Enter to continue.\n$ >_";
            await typeWithDelay(workPrompt, 1000);
        } else if (input === 'work') {
            const response = "\n$ Starting work...";
            outputArea.innerHTML += `\n$ > ${input}\n`;
            await typeResponse(response);

            const internshipInfo = [
                "Content Writer Internship",
                "MAGICSTEP SOLUTIONS PRIVATE LIMITED · Internship",
                "Sep 2021 - Oct 2021 · 2 months",
                "India",
                "Here I was supposed to create a pitch deck for the company. This deals with how big companies like Facebook, etc manipulate small businesses"
            ];
            await typeResponse(internshipInfo.join('\n') + '\n$ >_', 50);

            const digitalArtistInfo = [
                "Digital Artist",
                "OpenSea · Self-employed",
                "Apr 2022 - Present · 1 yr 5 mos",
                "Remote",
                "Created a project on Capybaras listed on open sea as digital assets called NFTs. All of them hand drawn by Sayandeep Dutta. A project for the WEB3.",
                "https://jemi.so/capybarapool"
            ];
            await typeResponse(digitalArtistInfo.join('\n') + '\n$ >_', 50);

            const ctfTeamInfo = [
                "CTF Team - Tandava",
                "CTF Time · Self-employed",
                "May 2023 - Present · 4 months",
                "Remote",
                "Founded the team Tandava with a country ranking of 167 in CTF Time. Participating in capture the flag and other cybersecurity competitions regularly.",
                "https://ctftime.org/team/228212"
            ];
            await typeResponse(ctfTeamInfo.join('\n') + '\n$ > Work completed.\n$ >_', 50);
        } else {
            const response = `\n$ Command not recognized: ${input}`;
            outputArea.innerHTML += `\n$ > ${input}\n`;
            await typeResponse(response);
        }

        e.target.value = '';
    }
});

// Call the function to animate the welcome messages
animateWelcome();
