/* =================================
   SECRET CODE
================================= */

/*
   CHANGE THIS CODE
   Example: "2006"
*/

const correctCode = "3002";


let enteredCode = "";



/* =================================
   ENTER NUMBER
================================= */

function enterNumber(number) {

    // Maximum 4 digits

    if (enteredCode.length >= 4) {

        return;

    }


    enteredCode += number;


    updateDisplay();

}



/* =================================
   DELETE NUMBER
================================= */

function deleteNumber() {

    enteredCode =
        enteredCode.slice(0, -1);

    updateDisplay();

}



/* =================================
   UPDATE DOTS
================================= */

function updateDisplay() {

    const dots =
        document.querySelectorAll(
            "#codeDisplay span"
        );


    dots.forEach((dot, index) => {

        if (index < enteredCode.length) {

            dot.textContent = "♥";

            dot.style.background =
                "#ffd9e6";

        }

        else {

            dot.textContent = "•";

            dot.style.background =
                "#fff4f7";

        }

    });

}



/* =================================
   CHECK CODE
================================= */

function checkCode() {

    const card =
        document.getElementById(
            "unlockScreen"
        );

    const message =
        document.getElementById(
            "statusMessage"
        );


    /* Correct */

    if (enteredCode === correctCode) {

        message.textContent =
            "ACCESS GRANTED ❤️";

        message.style.color =
            "#c43f70";


        card.style.animation =
            "unlockSuccess 0.8s ease";


        setTimeout(() => {

            document
                .getElementById("unlockScreen")
                .classList.add("hidden");


            document
                .getElementById("welcomeScreen")
                .classList.remove("hidden");


        }, 900);

    }


    /* Wrong */

    else {

        message.textContent =
            "Hmm... that's not it 👀 Try again ❤️";


        card.classList.add("shake");


        setTimeout(() => {

            card.classList.remove("shake");

        }, 500);


        enteredCode = "";

        updateDisplay();

    }

}
