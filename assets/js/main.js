const aplicacion = document.querySelector(".container");

const url = "https://jsonplaceholder.typicode.com/users";

// La función fetch devuelve una promesa (then); y esta a su vez devuelve una respuesta (respuesta)

fetch(url)
  // convertimos la respuesta en un objeto JSON

  .then((respuesta) => respuesta.json())

  // recorremos el objeto JSON e imprimimos "solamente" el elemento que nos interesa de cada uno de los registros

  .then((data) => {
    data.forEach((user) => {
      console.log(user.name);

      // creamos un elemento HTML para mostrar por pantalla, el elemento que nos interesó de cada regsitro del objeto JSON

      const p = document.createElement("p");
      p.setAttribute("id", user.id);
      p.innerHTML = user.name;
      p.addEventListener("click", () => { 
        window.location.href = `./usuario.html?id=${user.id}`;
      });
      aplicacion.appendChild(p);
    });

    // si quisieramos ver en su totalidad el objeto JSON (arreglo) que vino con el fetch
    // console.log(data);
  })

  // Al ejecutar el fetch, revisamos si ocurrio algún error e imprimimos dicho error por consola

  .catch((error) => console.log(error));
