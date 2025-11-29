// Jackson Reynolds
"use strict";
const menuImages = document.querySelectorAll("img");
for (let img of menuImages) {
const originalSrc = img.getAttribute("src");
const infoSrc = img.getAttribute("id"); // _info image stored in id attribute

    // 6b - mouseover → swap to info image
    img.addEventListener("mouseover", () => {
        img.src = infoSrc;
    });

    // 6c - mouseout → revert to original
    img.addEventListener("mouseout", () => {
        img.src = originalSrc;
    });
}