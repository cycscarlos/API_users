const aplicacion = document.querySelector(".container");

const getUrl = new URLSearchParams(window.location.search);
const id = getUrl.get("id");
console.log(id);

const url = "https://jsonplaceholder.typicode.com/users";
console.log(`${url}/${id}`);

fetch(`${url}/${id}`)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log(data);

    const name = document.createElement("p");
    const email = document.createElement("p");
    const username = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("p");
    email.classList.add("details");
    username.classList.add("details");
    phone.classList.add("details");
    website.classList.add("details");
    name.innerHTML = data.name;
    email.innerHTML = data.email;
    username.innerHTML = data.username;
    phone.innerHTML = data.phone;
    website.innerHTML = data.website;
    aplicacion.appendChild(name);
    aplicacion.appendChild(email);
    aplicacion.appendChild(username);
    aplicacion.appendChild(phone);
    aplicacion.appendChild(website);
  })
  .catch((error) => console.log(error));
