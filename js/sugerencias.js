document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-sugerencias");
  const confirmacion = document.getElementById("msg-confirmacion");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    const nuevo = {
      nombre,
      correo,
      mensaje,
      fecha: new Date().toLocaleString()
    };

    let sugerencias = JSON.parse(localStorage.getItem("sugerencias_findea")) || [];
    sugerencias.push(nuevo);
    localStorage.setItem("sugerencias_findea", JSON.stringify(sugerencias));

    confirmacion.classList.remove("d-none");
    form.reset();
  });
});
