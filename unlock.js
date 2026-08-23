const correctDate = "27082025";
const correctPassword = "forever";

function unlock() {

    const date = document.getElementById("secretDate").value.trim();
    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");
    const card = document.querySelector(".unlock-container");

    // Correct details
    if (date === correctDate && password === correctPassword) {

        message.innerHTML = "✨ Unlocking your surprise...";

        message.style.color = "#ff9dd3";

        // Change lock
        const lock = document.querySelector(".lock-icon");

        if (lock) {
            lock.innerHTML = "🔓";
        }

        // Fade out
        setTimeout(() => {

            document.body.style.transition = "opacity 1s ease";
            document.body.style.opacity = "0";

        }, 500);

        // Go to welcome page
        setTimeout(() => {

            window.location.href = "welcome.html";

        }, 1500);

    } else {

        message.innerHTML =
            "💭 Hmm... that's not the secret. Try again!";

        message.style.color = "#ff8fa3";

        // Shake card
        if (card) {

            card.classList.remove("shake");

            void card.offsetWidth;

            card.classList.add("shake");
        }
    }
}