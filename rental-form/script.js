const form = document.querySelector("#hyr");
form.addEventListener("submit", handleFormSubmit);

// Kontroller för tillbehörslistan
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

// Kontroller för datum
const startDate = document.querySelector('#startdatum');
const endDate = document.querySelector('#slutdatum');
const today = new Date();
const threeDays = new Date(today.getFullYear(),today.getMonth(),(today.getDate()+4));
const bookableLimit = new Date(today.getFullYear(),(today.getMonth()+6),today.getDate());

startDate.setAttribute("value", today.toISOString().slice(0,10));
startDate.setAttribute("min", today.toISOString().slice(0,10));
startDate.setAttribute("max", bookableLimit.toISOString().slice(0,10));

endDate.setAttribute("value", threeDays.toISOString().slice(0,10));
endDate.setAttribute("min", today.toISOString().slice(0,10));
endDate.setAttribute("max", bookableLimit.toISOString().slice(0,10));

// Email
function validEmail(email) {
    let re = /([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
// Telefon
function validPhone(number) {
    let re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return re.test(number);
}

function handleFormSubmit(event) {
    event.preventDefault();
    //Email
    let errormessage = document.querySelector("#mailfel");
    if (!validEmail(document.querySelector("#email").value)) {
        errormessage.textContent = "Ogiltig email-adress";
    }
    else {errormessage.textContent = "";}
    //Telefon
    errormessage = document.querySelector("#telfel");
    if (!validPhone(document.querySelector("#telefon").value)) {
        errormessage.textContent = "Ogiltigt telefonnummer";
    }
    else {errormessage.textContent = "";}
    //Datum
    errormessage = document.querySelector("#datumfel");
    if (document.querySelector("#slutdatum").value < document.querySelector("#startdatum").value) {
        errormessage.textContent = "Hämtdatum får ej vara tidigare än returdatum"
    }
    else {errormessage.textContent = "";}
    //Tillbehör
    let box = document.querySelector('#extras');
    errormessage = document.querySelector("#tbfel");
    if (!noExtras.checked){
        let additionals = [];
        extras.forEach(extra => {
            if (extra.checked) {
                additionals.push(extra.value);
                box.removeAttribute("class", "extraserror");
                errormessage.textContent = "";
            }
        });
        if (additionals.length === 0) {
            box.setAttribute("class", "extraserror");
            errormessage.textContent = "Välj minst ett av alternativen"
        }
    }
    else {
        box.removeAttribute("class", "extraserror");
        errormessage.textContent = "";
    }
}