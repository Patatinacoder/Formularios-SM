// Lista de ICPAS disponibles (ejemplo)
const icpas = [
    "Software de gestión empresarial",
    "Servicios de consultoría en negocios",
    "Desarrollo de aplicaciones móviles",
    "Marketing digital y SEO",
    // Agrega aquí más ICPAS según sea necesario
];

let icpasSeleccionados = [];

function buscarICPAS() {
    const termino = document.getElementById("termino").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    if (termino === "") {
        resultadoDiv.innerText = "Por favor, ingrese un término relacionado.";
        return;
    }

    const resultados = icpas.filter(icpa => icpa.toLowerCase().includes(termino));

    if (resultados.length === 0) {
        resultadoDiv.innerText = "No se encontraron ICPAS relacionados.";
    } else {
        const ul = document.createElement("ul");
        resultados.forEach(icpa => {
            const li = document.createElement("li");
            li.innerText = icpa;

            const copiarBtn = document.createElement("button");
            copiarBtn.innerText = "Copiar";
            copiarBtn.onclick = () => copiarAlPortapapeles(`Se protege ICPA: ${icpa}`);

            const anadirBtn = document.createElement("button");
            anadirBtn.innerText = "Añadir";
            anadirBtn.onclick = () => anadirICPA(icpa);

            const actionsDiv = document.createElement("div");
            actionsDiv.appendChild(copiarBtn);
            actionsDiv.appendChild(anadirBtn);
            
            li.appendChild(actionsDiv);
            ul.appendChild(li);
        });
        resultadoDiv.appendChild(ul);
    }
}

function limpiarBusqueda() {
    document.getElementById("termino").value = ""; // Limpiar el campo "Término relacionado"
    document.getElementById("resultado").innerHTML = "";
}

function anadirICPA(icpa) {
    if (!icpasSeleccionados.includes(icpa)) {
        icpasSeleccionados.push(icpa);
        actualizarListaICPAS();
    }
}

function actualizarListaICPAS() {
    const listaDiv = document.getElementById("listaICPAS");
    listaDiv.innerHTML = "";
    const ul = document.createElement("ul");
    icpasSeleccionados.forEach(icpa => {
        const li = document.createElement("li");
        li.innerText = `Se protege ICPA: ${icpa}`;
        ul.appendChild(li);
    });
    listaDiv.appendChild(ul);
}

function generarProteccion() {
    const datosExtra = document.getElementById("datosExtra").value.trim();
    const resultadoProteccion = document.getElementById("resultadoProteccion");
    const icpasProteccion = icpasSeleccionados.map(icpa => `Se protege ICPA: ${icpa}`).join("<li>");
    
    // Construir el contenido con el formato requerido
    let contenido = `<ul><li>${icpasProteccion}</li></ul>`;
    if (datosExtra) {
        contenido += `<p>Además cliente indica: ${datosExtra}</p>`;
    }
    
    // Mostrar el resultado con el borde y estilo específico
    resultadoProteccion.innerHTML = contenido;
    resultadoProteccion.style.border = "2px solid #666";
}

function limpiarFormulario() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaICPAS").innerHTML = "";
    document.getElementById("resultadoProteccion").innerHTML = "";
    document.getElementById("datosExtra").value = ""; // Limpiar el campo "datos extra"
    icpasSeleccionados = [];
}

function copiarAlPortapapeles(texto) {
    // Crear un elemento temporal para copiar el texto al portapapeles
    const tempInput = document.createElement("textarea");
    tempInput.value = texto;
    document.body.appendChild(tempInput);

    // Seleccionar el texto dentro del textarea
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Intentar copiar el texto seleccionado al portapapeles
    try {
        const successful = document.execCommand("copy");
        const message = successful ? "Texto copiado al portapapeles" : "Error al intentar copiar el texto";
        alert(message);
    } catch (err) {
        console.error("Error al intentar copiar:", err);
        alert("Error al intentar copiar el texto");
    } finally {
        // Remover el elemento temporal del DOM
        document.body.removeChild(tempInput);
    }
}

function copiarResultadoAlPortapapeles() {
    const resultadoProteccion = document.getElementById("resultadoProteccion");
    const listaItems = resultadoProteccion.getElementsByTagName("li");
    const datosExtra = document.getElementById("datosExtra").value.trim();
    let contenido = [];

    // Construir la lista de elementos
    for (let i = 0; i < listaItems.length; i++) {
        contenido.push(listaItems[i].innerText);
    }

    if (contenido.length > 0) {
        if (datosExtra) {
            contenido.push(`Además cliente indica: ${datosExtra}`);
        }
        copiarAlPortapapeles(contenido.join("\n"));
    } else {
        alert("No hay contenido para copiar.");
    }
}
