// --- FUNCIÓN DE VALIDACIÓN DE LOGIN (TU CÓDIGO ORIGINAL) ---
function validarLogin(event) {
  event.preventDefault();

  const CLAVE = "12345678";
  const pass = document.getElementById("password").value;

  if (pass === CLAVE) {
    alert("Bienvenido!"); // Redirige al usuario al index.html
    window.location.href = "index.html";
  } else {
    alert("No completó los datos necesarios para iniciar sesión"); // Limpia el campo de la contraseña
    document.getElementById("password").value = "";
  }

  return false;
}
