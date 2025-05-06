let button = document.getElementById("inscription");
button.addEventListener("click", validerFormulaire);

function validerFormulaire(event) {
  let nom = document.getElementById("nom").value;
  let filier = document.getElementById("filiere").value;
  let date = document.getElementById("Obtention").value;
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  let text = document.getElementById("errorMsg");
  text.style.marginLeft = "47%";
  text.style.color = "red";
  if (
    nom === "" ||
    filier === "" ||
    date === "" ||
    login === "" ||
    password === ""
  ) {
    text.innerHTML = "Vous devez entrer tous les champs";
    event.preventDefault();
  } else {
    let result = confirm("etes vous sure de submitter cette formulaire?");
    if (!result) {
      event.preventDefault();
      return false;
    } else {
      alert("le formulaire a été soumis avec succés");
    }
  }
}

let champs = document.getElementsByClassName("champ-form");
for (let champ of champs) {
  champ.style.border = "2px red solid";
}

let fields = document.getElementsByTagName("fieldset");
for (let field of fields) {
  field.style.color = "rgb(131, 122, 122)";
}

let libeles = document.querySelectorAll("label");
for (let libel of libeles) {
  libel.style.fontWeight = "bold";
}

let para = document.createElement("p");
para.innerHTML = "Ceci est un nouveau paragraphe ajouté avec JavaScript!";
document.querySelector("legend").appendChild(para);

let error = document.getElementById("errorMsg");
if (error) {
  error.parentElement.removeChild(error);
}
