
function openGift() {

    const surprise = document.getElementById("surprise");
    const button = document.getElementById("openButton");
    const particles = document.getElementById("particles");
    const song = document.getElementById("loveSong");

    // Show surprise
    surprise.classList.remove("hidden");
    button.style.display = "none";

    // Play music
    song.volume = 0.7;

    song.play().catch(error => {
        console.log("Music playback error:", error);
    });

    // Romantic explosion
    const decorations = ["🌹", "❤️", "💕", "🌸", "💗", "🌹"];

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.textContent =
            decorations[Math.floor(Math.random() * decorations.length)];

        const x = (Math.random() - 0.5) * window.innerWidth * 1.5;
        const y = (Math.random() - 0.5) * window.innerHeight * 1.5;

        particle.style.setProperty("--x", `${x}px`);
        particle.style.setProperty("--y", `${y}px`);

        particle.style.animationDelay = `${Math.random() * 0.4}s`;

        particles.appendChild(particle);

        setTimeout(() => particle.remove(), 3500);
    }

    // Scroll to surprise
    surprise.scrollIntoView({
        behavior: "smooth"
    });

    // Start romantic typing
    setTimeout(startTyping, 1500);
}


// German love message
function startTyping() {

    const message = "Du bist das Beste, was mir je passiert ist.";

    const typingText = document.getElementById("typingText");
    const loveText = document.getElementById("loveText");

    let index = 0;

    typingText.textContent = "";

    function typeLetter() {

        if (index < message.length) {

            typingText.textContent += message.charAt(index);

            index++;

            setTimeout(typeLetter, 85);

        } else {

            setTimeout(() => {
                loveText.classList.remove("hidden");
            }, 800);

        }

    }

    typeLetter();
}
function updateCountdown() {
    const now = new Date();
    let birthday = new Date(
        now.getFullYear(), 10, 16, 0, 0, 0
    );

    if (now >= birthday) {
        birthday = new Date(
            now.getFullYear() + 1, 10, 16, 0, 0, 0
        );
    }

    const difference = birthday - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").textContent =
        `${days} Days • ${hours} Hours • ${minutes} Minutes • ${seconds} Seconds ❤️`;
}

updateCountdown();
setInterval(updateCountdown, 1000);