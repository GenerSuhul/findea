document.addEventListener("DOMContentLoaded", function () {
  const key = "emprendedores_peten";

  if (!localStorage.getItem(key)) {
    const datos = [
      {
        nombre: "José Hernández - Guía Turístico",
        descripcion: "Guía certificado con más de 10 años de experiencia en Tikal, Yaxhá y Uaxactún.",
        imagen: "assets/img/emprendedores/guia_jose.jpg",
        contacto: "WhatsApp: +502 5555 1234"
      },
      {
        nombre: "Hotel Lago Azul",
        descripcion: "Alojamiento familiar frente al Lago Petén Itzá, ideal para turistas que buscan tranquilidad.",
        imagen: "assets/img/emprendedores/hotel_lago.jpg",
        contacto: "Tel: +502 7790 1122"
      },
      {
        nombre: "Artesanías Maya Petenera",
        descripcion: "Venta de textiles, cerámica y productos hechos a mano por mujeres de comunidades locales.",
        imagen: "assets/img/emprendedores/artesanias_maya.jpg",
        contacto: "Instagram: @mayaartesanias"
      }
    ];
    localStorage.setItem(key, JSON.stringify(datos));
  }

  const lista = JSON.parse(localStorage.getItem(key));
  const contenedor = document.getElementById("contenedor-emprendedores");

  lista.forEach((emp) => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 icon-box";

    card.innerHTML = `
      <div class="icon"><i class="bi bi-person-fill-check"></i></div>
      <h4 class="title">${emp.nombre}</h4>
      <img src="${emp.imagen}" alt="${emp.nombre}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
      <p class="description">${emp.descripcion}<br><strong>${emp.contacto}</strong></p>
    `;

    contenedor.appendChild(card);
  });
});
