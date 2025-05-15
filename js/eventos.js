document.addEventListener("DOMContentLoaded", function () {
  const key = "eventos_autenticos_peten";

  if (!localStorage.getItem(key)) {
    const eventos = [
      {
        nombre: "Tour Astronómico en Uaxactún",
        fecha: "28 de febrero al 1 de marzo",
        descripcion: "Observación astronómica en el sitio arqueológico de Uaxactún. Incluye transporte desde Flores, camping, guía, cena y desayuno.",
        imagen: "assets/img/eventos/uaxactun.jpg"
      },
      {
        nombre: "Copa Mundo Maya 2025",
        fecha: "19 al 25 de enero",
        descripcion: "Torneo internacional de fútbol juvenil con más de 60 equipos, celebrado en municipios como Flores, San Benito y San Francisco.",
        imagen: "assets/img/eventos/mundo_maya.jpg"
      },
      {
        nombre: "Festival Gastronómico de Petén",
        fecha: "Septiembre",
        descripcion: "Degustaciones, exposiciones culinarias y cultura en el Parque Central de la Isla de Flores.",
        imagen: "assets/img/eventos/festival_gastronomia.jpg"
      },
      {
        nombre: "Carnaval de Flores",
        fecha: "Agosto",
        descripcion: "Comparsas, carrozas y música tradicional llenan de vida la ciudad de Flores.",
        imagen: "assets/img/eventos/carnaval_flores.jpg"
      },
      {
        nombre: "Festival de la Ruta Maya",
        fecha: "Febrero",
        descripcion: "Competencia de canotaje en el río Usumacinta y feria artesanal con actividades culturales.",
        imagen: "assets/img/eventos/ruta_maya.jpg"
      },
      {
        nombre: "Bailes Tradicionales: La Chatona y El Caballito",
        fecha: "Durante ferias patronales",
        descripcion: "Tradiciones vivas en municipios como San Andrés y San Francisco, que muestran la identidad cultural de Petén.",
        imagen: "assets/img/eventos/chatona.jpg"
      }
    ];
    localStorage.setItem(key, JSON.stringify(eventos));
  }

  const lista = JSON.parse(localStorage.getItem(key));
  const contenedor = document.getElementById("contenedor-eventos");

  lista.forEach((evento) => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 icon-box";

    card.innerHTML = `
      <div class="icon"><i class="bi bi-calendar-event-fill"></i></div>
      <h4 class="title">${evento.nombre}</h4>
      <img src="${evento.imagen}" alt="${evento.nombre}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
      <p class="description"><strong>Fecha:</strong> ${evento.fecha}<br>${evento.descripcion}</p>
    `;

    contenedor.appendChild(card);
  });
});
