const chat = document.getElementById("chat");
const typing = document.getElementById("typing");

const messages = [

    {
        side: "left",
        text: "Heyy... ❤️",
        time: "10:21 PM"
    },

    {
        side: "right",
        text: "Hii... 👀",
        time: "10:21 PM"
    },

    {
        side: "left",
        text: "Do you remember 27 August 2025?",
        time: "10:22 PM"
    },

    {
        side: "right",
        text: "Of course I remember... 🥹❤️",
        time: "10:22 PM"
    },

    {
        side: "left",
        text: "That wasn't just another day...",
        time: "10:23 PM"
    },

    {
        side: "right",
        text: "It was the day you accepted my love. 💗",
        time: "10:23 PM"
    },

    {
        side: "left",
        text: "And from that one moment...",
        time: "10:24 PM"
    },

    {
        side: "left",
        text: "we started collecting so many little memories. ✨",
        time: "10:24 PM"
    },

    {
        side: "right",
        text: "The little talks, the laughs, the silly moments... everything. 🫶",
        time: "10:25 PM"
    },

    {
        side: "left",
        text: "Some moments are small...",
        time: "10:26 PM"
    },

    {
        side: "right",
        text: "But they stay in our heart forever. ❤️",
        time: "10:26 PM"
    }

];


let index = 0;


function showMessage() {

    if (index >= messages.length) {

        typing.style.display = "none";

        setTimeout(showSpecialCard, 800);

        return;
    }


    typing.style.display = "flex";


    setTimeout(() => {

        typing.style.display = "none";


        const data = messages[index];


        const message = document.createElement("div");

        message.classList.add(
            "message",
            data.side
        );


        message.innerHTML = `
            ${data.text}
            <span class="time">
                ${data.time}
            </span>
        `;


        chat.appendChild(message);


        index++;


        chat.scrollTo({

            top: chat.scrollHeight,

            behavior: "smooth"

        });


        setTimeout(showMessage, 1000);


    }, 1100);

}


function showSpecialCard() {

    const card = document.createElement("div");

    card.className = "special";


    card.innerHTML = `

        <div class="heart">♡</div>

        <h4>
            And this is only the beginning...
        </h4>

        <p>
            Because our story has so many more
            beautiful moments waiting to be remembered. ✨
        </p>

    `;


    chat.appendChild(card);


    chat.scrollTo({

        top: chat.scrollHeight,

        behavior: "smooth"

    });

}


function restartChat() {

    chat.innerHTML = `

        <div class="date">
            <span>27 August 2025</span>
        </div>

    `;

    index = 0;

    showMessage();

}


window.onload = () => {

    setTimeout(showMessage, 1200);

};