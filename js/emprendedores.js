document.addEventListener("DOMContentLoaded", function () {
  const key = "emprendedores_peten";

  if (!localStorage.getItem(key)) {
    const datos = [
      {
        nombre: "Hotel Lago Azul",
        descripcion: "Alojamiento familiar frente al Lago Petén Itzá, ideal para turistas que buscan tranquilidad.",
        imagen: "assets/img/emprendedores/hotel_lago.jpg",
        contacto: "Tel: +502 7790 1122"
      },
      {
      nombre: "Café Ixcanul",
      categoria: "Gastronomía",
      descripcion: "Cafetería con enfoque en café local, panadería artesanal y cultura maya.",
      imagen: "assets/img/emprendedores/cafe_ixcanul.jpg",
      contacto: "Tel: +502 7830 2244",
      ubicacion: "Isla de Flores"
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
