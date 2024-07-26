function ordenarDatos() {
    // Obtener los valores del formulario
    let mensajeCliente = document.getElementById("mensaje_cliente").value.trim();
    let mensajeJuridico = document.getElementById("mensaje_juridico").value.trim();
    let marca = document.getElementById("marca").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();

    // Formar el mensaje ordenado
    let mensajeOrdenado = `Favor enviar correo al cliente indicando que se requiere ampliar la información para continuar con el análisis de su marca.\n(se envía correo a solicitud del cliente)\n\n`
                        + `Lo enviado por el cliente:\n${mensajeCliente}\n\n`
                        + `Desde jurídico se requiere:\n${mensajeJuridico}\n\n`
                        + `Marca: ${marca}\n`
                        + `Nombre: ${nombre}\n`
                        + `Correo: ${correo}\n`
                        + `Teléfono: ${telefono}`;

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
    document.getElementById("resultado").innerText = "";
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
