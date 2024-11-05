const backendurl = "http://localhost:3000/fruit";

document.addEventListener("DOMContentLoaded", function () {
  const createButton = document.getElementById("createButton");
  function ertekBeallit() {
    let mennyiseg = parseFloat(document.getElementById("mennyiseg").value);
    let fajtaja = parseFloat(document.getElementById("fajtaja").value);

  }
  document.getElementById("mennyiseg").addEventListener("input", function () {
    
  })
  document.getElementById("fajtaja").addEventListener("input", function () {
    
  })
  createButton.addEventListener("click", async function (event) {
    //-- böngésző alapértelmezés felülírása, ne küldje el azonnal a backendre az adatokat
    event.preventDefault();

    //-- mező tartalmakat JSON string formátumúra alakitjuk
    const megnevezes = document.getElementById("megnevezes").value;
    const fajtaja = document.getElementById("fajtaja").value;
    //-- ellenőrzések ----------------------------------------------------------------
    const jsontext = `{"megnevezes":"${megnevezes}",
            "fajtaja":"${fajtaja}",}`; //-- mező tartalmakat JSON string formátumúra alakitjuk
    const json = JSON.parse(jsontext); // JSON stringet JSON objektummá alakitja
    console.log(json);
    const response = await fetch(backendurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json),
    });
    if (response.status === 200) {
      alert("Sikeres adatfelvitel");
      document.getElementById("megnevezes").value = "";
      document.getElementById("fajtaja").value = "";
    } else {
      alert("Sikertelen adatfelvitel");
    }
    console.log(response);
  });
});