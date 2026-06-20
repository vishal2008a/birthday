let clickCount = 0;

const btn = document.getElementById("btn");
const message = document.getElementById("message");

if (btn) {

    btn.addEventListener("click", function () {

        clickCount++;

        if (clickCount === 1) {

            btn.style.left = "50px";
            btn.style.top = "200px";
            message.innerText = "Mai nhi batunga 😜";

        }

        else if (clickCount === 2) {

            btn.style.left = "330px";
            btn.style.top = "80px";
            message.innerText = "Acha sorry! 😂";

        }

        else if (clickCount === 3) {

            message.innerText = "Pakku last che ✨";
            btn.innerText = "Open Memories 📸";

            btn.style.left = "180px";
            btn.style.top = "150px";

        }

        else if (clickCount === 4) {

            window.location.href = "bookp1.html";

        }

    });

}

window.onload = function () {

    const popup = document.getElementById("popup");

    if (popup) {

        setTimeout(function () {

            popup.classList.add("show");

        }, 3000);

        
    }

};