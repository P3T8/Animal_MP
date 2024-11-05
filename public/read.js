let backendurl = "http://localhost:3000/animal";

document.addEventListener("DOMContentLoaded",async function () {

const response = await fetch(backendurl);   
const data = await response.json();
console.log(data);
if(data.length > 0) {
    listCards(data);
} else {
    console.log("Nincs megjeleníthető adat");
    const cardContainer = document.getElementById("allatok");
    cardContainer.innerHTML = "<h2>Nincs megjeleníthető adat</h2>";
}

});
function listCards(data){
    const cardContainer = document.getElementById("allatok");
    cardContainer.innerHTML = "";
    data.forEach((element) => {
        let card = document.createElement("div");
        card.className = "card";
        card.style.margin = "1vw";
        card.innerHTML = `<div class="card-body">
        <h5 class="card-title">${element.megnevezes}</h5>
        <p class="card-text"><i>fajtája</i>: ${element.fajtaja} </p>
        </div>`;
        cardContainer.appendChild(card);}
    );
}