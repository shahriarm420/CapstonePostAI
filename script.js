let grapeOrcookieButton = document.querySelector("#grapeOrcookie-button");
let imgButton = document.querySelector("#grapeOrCookieimg-button");


let textDiv = document.querySelector("#text-div");
let imgDiv = document.querySelector("#img-div");


grapeOrcookieButton.onclick = function() {
    textDiv.style.display = "block";
    imgDiv.style.display = "none";


    let newText = document.createElement("p");
    let randomInt = Math.floor(Math.random() * 2);
    if (randomInt == 0) {
        newText.innerHTML = "i love grapes";
    } else {
        newText.innerHTML = "i love cookies";
    }


    textDiv.appendChild(newText);
};


imgButton.onclick = function() {
    imgDiv.style.display = "block";
    textDiv.style.display = "none";

    let randomInt = Math.floor(Math.random() * 2);
    let newImg = document.createElement("img");
    if (randomInt == 0) {
        newImg.src = `./images/download.jpg`;
    } else {
        newImg.src = `./images/cookie.jpg`;
    }

    imgDiv.appendChild(newImg);
};

