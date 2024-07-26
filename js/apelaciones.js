function ordenarDatos() {
    let titular = document.getElementById("titular").value.trim();
    let rutTitular = document.getElementById("rut_titular").value.trim();
    let numeroSolicitud = document.getElementById("numero_solicitud").value.trim();
    let marca = document.getElementById("marca").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let fechaPlazo = document.getElementById("fecha_plazo").value.trim();
    let detalles = document.getElementById("detalles").value.trim();

    let mensajeOrdenado = `Cliente solicita nuestros servicios para apelar\n\n`
                        + `Titular: ${titular}\n`
                        + `RUT Titular: ${rutTitular}\n`
                        + `Número de solicitud: ${numeroSolicitud}\n`
                        + `Marca: ${marca}\n`
                        + `Correo: ${correo}\n`
                        + `Teléfono: ${telefono}\n`
                        + `Fecha límite para apelar: ${fechaPlazo}\n`
                        + `Detalles: ${detalles}`;

    document.getElementById("resultado").innerText = mensajeOrdenado;

    // Crear enlace de WhatsApp
    let numeroTelefono = "56932213825"; // Reemplaza con el número de teléfono de destino con el código de país
    let mensajeWhatsApp = encodeURIComponent(mensajeOrdenado);
    let enlaceWhatsApp = `whatsapp://send?phone=${numeroTelefono}&text=${mensajeWhatsApp}`;

    // Simular clic en el enlace de WhatsApp para abrir la conversación
    window.location.href = enlaceWhatsApp;
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("resultado").innerText = "";
}

function copiarResultado() {
    let resultado = document.getElementById("resultado");
    let seleccion = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(resultado);
    seleccion.removeAllRanges();
    seleccion.addRange(range);

    document.execCommand("copy");

    alert("El texto ha sido copiado al portapapeles");
}
