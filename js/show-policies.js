let fechaActual = new Date();
let anio = fechaActual.getFullYear();

let anioActual = document.getElementById('anioActual');
anioActual.textContent = anio;

document.getElementById('mostrarPDF').addEventListener('click', function() {
        window.open('./files/politicas-de-privacidad-fiduto.pdf', '_blank');
});

