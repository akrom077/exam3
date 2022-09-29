const adderFormEl = document.querySelector("#adder_form");
const adderInputEl = document.querySelector("#btn");

const nomi = document.querySelector(".input_one")
const proNarx = document.querySelector(".input_two")
const proPover = document.querySelector(".input_four")
const image = document.querySelector("#input_img");
const proRes = document.querySelector(".input_five")

const cardEl2 = document.querySelector("#card_div");


adderFormEl.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(nomi.value);
   
    let runningBox = document.createElement("div");
    let nom = document.createElement("p");
    let narx = document.createElement("p");
    let oshpaz = document.createElement("p");
    let restoran = document.createElement("p");
    let img = document.createElement("img");
    let imgEl = document.createElement("div");
    let info = document.createElement("div");
    let button = document.createElement("div");




    let btnEl = document.createElement("button");
    let btnEl1 = document.createElement("button");
    let btnEl2 = document.createElement("button");

    button.appendChild(btnEl);
    button.appendChild(btnEl1);
    button.appendChild(btnEl2);

    btnEl.classList.add("btn-one");
    btnEl1.classList.add("data");
    btnEl2.classList.add("end");

    btnEl.textContent = "Delete";
    btnEl1.textContent = "18:00";
    btnEl2.textContent = "Done";


    btnEl2.addEventListener("click", () => {
        runningBox.style.background = "#C9F4A7"
    })

    btnEl.addEventListener("click", () => {
        runningBox.remove();
    })





    info.classList.add("info")
    let btn = document.createElement("div");
    // Content
    nom.textContent = "Taom nomi: " + nomi.value
    narx.textContent = "Taom narxi: " + proNarx.value
    oshpaz.textContent = "Taom Oshpaz: " + proPover.value
    restoran.textContent = "Taom Restoran: " + proRes.value
    img.src = image.value;

    // Class
    img.className = "img_osh";
    nom.className = "text";

    // appent
    info.appendChild(nom)
    info.appendChild(narx)
    info.appendChild(oshpaz)
    info.appendChild(restoran)
    runningBox.appendChild(img)
    runningBox.appendChild(imgEl)
    runningBox.appendChild(info)
    runningBox.appendChild(btn)
    runningBox.className = "newlist";
    cardEl2.appendChild(runningBox);

    runningBox.appendChild(button);
});
