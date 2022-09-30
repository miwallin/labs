const form = document.querySelector("#hyr");
form.addEventListener("submit", handleFormSubmit);

function validEmail(email) {
    let re = /([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validPhone(number) {
    let re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return re.test(number);
}

function handleFormSubmit(event) {
    event.preventDefault();
    if (!validEmail(document.querySelector("#email").value)) {
        console.log("Invalid email");
    }
    else {console.log("Valid email");}
    if (!validPhone(document.querySelector("#telefon").value)) {
        console.log("Invalid phone number");
    }
    else {console.log("Valid phone number");}
}