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
    let emsg = document.querySelector("#mailfel");
    if (!validEmail(document.querySelector("#email").value)) {
        emsg.textContent = "Ogiltig email-adress";
    }
    else {emsg.textContent = "";}
    emsg = document.querySelector("#telfel");
    if (!validPhone(document.querySelector("#telefon").value)) {
        emsg.textContent = "Ogiltigt telefonnummer";
    }
    else {emsg.textContent = "";}
    let box = document.querySelector('#extras');
    emsg = document.querySelector("#tbfel");
    if (!noExtras.checked){
        let additionals = [];
        extras.forEach(extra => {
            if (extra.checked) {
                additionals.push(extra.value);
                box.removeAttribute("class", "extraserror");
                emsg.textContent = "";
            }
        });
        if (additionals.length === 0) {
            box.setAttribute("class", "extraserror");
            emsg.textContent = "Välj minst ett av alternativen"
        }
    }
    else {
        box.removeAttribute("class", "extraserror");
        emsg.textContent = "";
    }
}