let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        openTab(index);

    });
});
function openTab(index) {
    tabLinks.forEach(tab =>
        tab.classList.remove("active-link"));
    tabContents.forEach(content =>
        content.classList.remove("active-tab"));

    tabLinks[index].classList.add("active-link");
    tabContents[index].classList.add("active-tab");
}

let cross = document.querySelector("#crossimg");
let menu = document.querySelector("#menuimg");
let getMenu = document.querySelector("#sidemenu");

function closeMenu() {
    getMenu.style.right = "-200px";
}

function openMenu() {
    getMenu.style.right = "0";
}

cross.addEventListener("click", closeMenu);
menu.addEventListener("click", openMenu);


const scriptURL = 'https://script.google.com/macros/s/AKfycbz3KeUjmLeKI2pjPOg8SqGj7o7FDUsKLFJHQhgxkMVarF5dVY0Gmhg-eoEZ9-6jbHuA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // msg.innerHTML = "Message sent successfully"
            alert("Message sent successfully");
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})