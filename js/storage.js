document.addEventListener("DOMContentLoaded", function () {
  const lugaresKey = "lugares_turisticos";

  // Si no hay datos aún, insertar datos de prueba
  if (!localStorage.getItem(lugaresKey)) {
    const ejemplo = [
      {
        nombre: "Tikal",
        categoria: "Arqueológico",
        imagen: "assets/img/lugares/tikal.jpg",
        ubicacion: "Municipio de Flores"
      },
      {
        nombre: "Yaxhá",
        categoria: "Arqueológico",
        imagen: "assets/img/lugares/yaxha.jpg",
        ubicacion: "Melchor de Mencos"
      },
      {
        nombre: "Laguna del Tigre",
        categoria: "Natural",
        imagen: "assets/img/lugares/tigre.jpg",
        ubicacion: "San Andrés"
      }
    ];
    localStorage.setItem(lugaresKey, JSON.stringify(ejemplo));
  }

  const lugares = JSON.parse(localStorage.getItem(lugaresKey));
  const contenedor = document.getElementById("contenedor-lugares");

  lugares.forEach((lugar) => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 service-item d-flex";

    card.innerHTML = `
      <div class="icon flex-shrink-0"><i class="bi bi-geo-alt"></i></div>
      <div>
        <h4 class="title">${lugar.nombre}</h4>
        <img src="${lugar.imagen}" alt="${lugar.nombre}" style="width:100%; height:180px; object-fit:cover; border-radius:10px; margin: 10px 0;">
        <p class="description"><strong>Categoría:</strong> ${lugar.categoria}<br><strong>Ubicación:</strong> ${lugar.ubicacion}</p>
      </div>
    `;

    contenedor.appendChild(card);
  });
});
