function ordenarDatos() {
    // Obtener los valores del formulario
    let marca = document.getElementById("marca").value.trim();
    let deseaRegistrar = document.getElementById("desea_registrar").value.trim();
    let protege = document.getElementById("protege").value.trim();

    // Formar el mensaje ordenado
    let mensajeOrdenado = `CLIENTE SE ACOGE A SEGURO 0% RIESGO\n\n`
                        + `Cliente solicita hacer uso de seguro\n\n`
                        + `Marca: ${marca}\n`
                        + `Desea registrar: ${deseaRegistrar}\n`
                        + `Protege: ${protege}`;

    // Mostrar el mensaje ordenado en el resultado
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
    document.getElementById("resultado").innerText = ""; // Limpiar también el resultado
}

function copiarAlPortapapeles() {
    let resultado = document.getElementById("resultado");
    let textoCopiar = resultado.innerText;

    // Crear un elemento textarea temporal para copiar el texto
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = textoCopiar;
    document.body.appendChild(tempTextarea);

    // Seleccionar el texto en el textarea temporal
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Eliminar el textarea temporal
    document.body.removeChild(tempTextarea);

    // Mostrar mensaje de copiado (opcional)
    alert("Texto copiado al portapapeles:\n\n" + textoCopiar);
}
