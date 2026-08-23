function openGift() {

    const gift = document.getElementById("giftBox");
    const memory = document.getElementById("memory");
    const text = document.getElementById("clickText");

    gift.style.transform = "scale(0)";
    text.style.display = "none";

    setTimeout(() => {
        memory.style.display = "block";
    }, 400);

    createHearts();
}


function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = ["💗", "💕", "💖", "💓", "✨"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}


function goNext() {

    window.location.href = "memories.html";

}