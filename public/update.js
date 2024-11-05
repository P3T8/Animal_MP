const backendurl = "http://localhost:3000/fruit";
document.addEventListener("DOMContentLoaded", function () {
    async function listaFrissites() {
        let select = document.getElementById("id");
        //-- töröljük a benne lévő option tagokat ---
        let length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }
        //-- Feltöltjük a szerveren tárolt adatokkal --
        select.options[0] = new Option("Válassz állatot!", -1);
        let response = await fetch(backendurl);
        let animals = await response.json();
        for (let index = 0; index <= animals.length; index++) {
            const element = animals[index];
            select.options[index + 1] = new Option(element.megnevezes, element.id);
        }
    }
    listaFrissites();
    document.getElementById("updateButton").addEventListener("click", function () {
        let animal = new FormData(document.getElementById("updateForm"));
        animal = Object.fromEntries(animal);
        console.log(animal);
        fetch(backendurl + "/" + animal.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
    })
    document.getElementById("id").addEventListener("change", async function () {
        let id = this.value;
        const response = await fetch(backendurl + "/" + id);
        const data = await response.json();
        console.log(data);
        document.getElementById("megnevezes").value = data.megnevezes;
        document.getElementById("fajtaja").value = data.fajtaja;
    });
    document.getElementById("updateButton").addEventListener("click", async function () { });

})