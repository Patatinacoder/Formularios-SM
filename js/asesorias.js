function toggleRegistroMarca() {
    var registroMarca = document.getElementById("registroMarca");
    var esRegistrada = document.querySelector('input[name="marcaRegistrada"]:checked').value;

    if (esRegistrada === "si") {
        registroMarca.style.display = "block";
    } else {
        registroMarca.style.display = "none";
    }
}

function ordenarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var detalles = document.getElementById("detalles").value.trim();
    var marcaRegistrada = document.querySelector('input[name="marcaRegistrada"]:checked').value;

    var mensajeOrdenado = `Cliente solicita asesoría\n\n`
                        + `Nombre: ${nombre}\n`
                        + `Correo: ${correo}\n`
                        + `Teléfono: ${telefono}\n`
                        + `Detalles: ${detalles}\n`
                        + `¿Es marca registrada?: ${marcaRegistrada === "si" ? "Sí" : "No"}`;

    if (marcaRegistrada === "si") {
        var numeroRegistro = document.getElementById("numeroRegistro").value.trim();
        var nombreMarca = document.getElementById("nombreMarca").value.trim();
        var titular = document.getElementById("titular").value.trim();
        var rutTitular = document.getElementById("rutTitular").value.trim();

        mensajeOrdenado += `\n\nInformación de la Marca Registrada:\n`
                        + `Número de Registro: ${numeroRegistro}\n`
                        + `Nombre de la Marca: ${nombreMarca}\n`
                        + `Titular: ${titular}\n`
                        + `RUT Titular: ${rutTitular}`;
    }

    document.getElementById("resultado").innerText = mensajeOrdenado;

    // Crear enlace de WhatsApp para la aplicación móvil
    var numeroTelefono = "56932213825"; // Reemplaza con el número de teléfono de destino con el código de país
    var mensajeWhatsApp = encodeURIComponent(mensajeOrdenado);
    var enlaceWhatsApp = `whatsapp://send?phone=${numeroTelefono}&text=${mensajeWhatsApp}`;

    // Simular clic en el enlace de WhatsApp para abrir la conversación
    window.location.href = enlaceWhatsApp;
}

function limpiarFormulario() {
    document.getElementById("asesoriaForm").reset();
    document.getElementById("resultado").innerText = "";
    document.getElementById("registroMarca").style.display = "none";
}

function copiarResultado() {
    var resultado = document.getElementById("resultado");
    var seleccion = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(resultado);
    seleccion.removeAllRanges();
    seleccion.addRange(range);

    document.execCommand("copy");

    alert("El texto ha sido copiado al portapapeles");
}
