const form = document.querySelector("#hyr");
form.addEventListener("submit", handleFormSubmit);

const noExtras = document.querySelector('#tb0');
const extras = document.querySelectorAll('.extra');

noExtras.addEventListener('change', () => {
    if (noExtras.checked) {
        extras.forEach(extra => {
            extra.disabled = true;
            extra.checked = false;
        });
    } 
    else {
        extras.forEach(extra => extra.disabled = false);
    }
  });

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
    if (!noExtras.checked){
        let additionals = [];
        extras.forEach(extra => {
            if (extra.checked) {
                additionals.push(extra.value);
            }
        });
        if (additionals.length === 0) {
            console.log("Pick something");
        }
    }
}