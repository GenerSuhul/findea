document.addEventListener("DOMContentLoaded", function () {
  const key = "gastronomia_tipica";

  if (!localStorage.getItem(key)) {
    const platos = [
      {
        nombre: "Subanik",
        descripcion: "Platillo ceremonial a base de carnes y chile.",
        imagen: "assets/img/gastronomia/subanik.jpg"
      },
      {
        nombre: "Tortillas con Chaya",
        descripcion: "Tortillas tradicionales con hoja de chaya.",
        imagen: "assets/img/gastronomia/chaya.jpg"
      },
      {
        nombre: "Tamal Petenero",
        descripcion: "Tamal especial de maíz con carne y especias.",
        imagen: "assets/img/gastronomia/tamal.jpg"
      }
    ];
    localStorage.setItem(key, JSON.stringify(platos));
  }

  const lista = JSON.parse(localStorage.getItem(key));
  const contenedor = document.getElementById("contenedor-gastronomia");

  lista.forEach((plato) => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 icon-box";

    card.innerHTML = `
      <div class="icon"><i class="bi bi-egg-fried"></i></div>
      <h4 class="title">${plato.nombre}</h4>
      <img src="${plato.imagen}" alt="${plato.nombre}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
      <p class="description">${plato.descripcion}</p>
    `;

    contenedor.appendChild(card);
  });
});
