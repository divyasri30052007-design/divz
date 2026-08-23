// ===============================
// SECRET DETAILS
// ===============================

const correctDate = "27082025";
const correctPassword = "gundu";

// ===============================
// CREATE FLOATING PARTICLES
// ===============================

const particles = document.querySelector(".particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 6 + "s";

    particle.style.animationDuration =
        4 + Math.random() * 5 + "s";

    particles.appendChild(particle);
}


// ===============================
// UNLOCK FUNCTION
// ===============================

function unlock() {

    const date =
        document.getElementById("secretDate").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const message =
        document.getElementById("message");

    const card =
        document.querySelector(".unlock-container");

    // Check details

    if (date === correctDate && password === correctPassword) {

        message.innerHTML =
            "✨ Unlocking your little surprise...";

        message.style.color = "#ff9dd3";

        document.querySelector(".lock-icon").innerHTML = "🔓";

        // Small delay for animation

        setTimeout(() => {

            document.body.style.transition =
                "opacity 1s ease";

            document.body.style.opacity = "0";

        }, 900);

        setTimeout(() => {

            window.location.href = "welcome.html";

        }, 1800);

    } 
    
    else {

        message.innerHTML =
            "Hmm... that's not the secret 💭 Try again!";

        message.style.color = "#ff8fa3";

        card.classList.remove("shake");

        // Restart animation

        void card.offsetWidth;

        card.classList.add("shake");

    }
}