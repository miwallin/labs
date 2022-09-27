// Paragraf
const uppdatera = document.querySelector("#uppdatera");
uppdatera.addEventListener('click', () => document.querySelector("#paragraf p").textContent = "Denna paragraf är ny och fräsch.");

// Länk
const linkChanger = document.querySelector("#linkbutton");
linkChanger.addEventListener('click', () => {
    const linkElement = document.querySelector("#linkchange a");
    linkElement.setAttribute("href", "https://google.com");
    linkElement.textContent = "Google";
    linkChanger.setAttribute("class", "d-none");
  });

// Kub
function cuboid (width, length, height) {
    return width*length*height;
};

const inputs = document.querySelectorAll(".kubdata");

inputs.forEach(element => element.addEventListener("input", (event) => {
    let width = document.querySelector("#width").value;
    let length = document.querySelector("#length").value;
    let height = document.querySelector("#height").value;
    if (width && length && height) {
        let result = cuboid(width, length, height);
        if (width == length && length == height) {
            document.querySelector("#resultat").textContent = "Din kub har volymen: " + result;
        }
        else {
            document.querySelector("#resultat").textContent = "Ditt rätblock har volymen: " + result;
        }
    }
    else {
        document.querySelector("#resultat").textContent = "";
    }
}));