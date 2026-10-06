const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    
    if (mySrc === "imgs/logo.jpg") {
        myImage.setAttribute("src", "imgs/CEO.jpg");
    } else {
        myImage.setAttribute("src", "imgs/logo.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    
    if (myName === null || myName === "") {
        setUserName();
    }
    
    localStorage.setItem("name", myName);
    myHeading.textContent = `Palanthir is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Palanthir is cool, ${storedName}`
}

myButton.addEventListener("click", () => {
    setUserName();
})