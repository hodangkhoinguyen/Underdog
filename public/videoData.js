'use strict';

let nickname = sessionStorage.getItem("nick");

let msg = c2.textContent;
msg = msg.replace("placeholder", nickname);
c2.textContent = msg;

const continueButton = document.getElementById("continue_button");
continueButton.addEventListener("click", continueFunction);

function continueFunction() {
    window.location = "/tiktokpets.html";
}