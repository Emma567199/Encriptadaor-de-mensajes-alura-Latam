// Función para encriptar el texto
function encryptText() {
    let text = document.getElementById("inputText").value.toLowerCase();
    if (text === "") {
        showMessage("Por favor, ingrese un texto.");
        return;
    }
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
    enableCopyButton();
    showMessage("Texto encriptado con éxito.");
}

// Función para desencriptar el texto
function decryptText() {
    let text = document.getElementById("inputText").value.toLowerCase();
    if (text === "") {
        showMessage("Por favor, ingrese un texto.");
        return;
    }
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
    enableCopyButton();
    showMessage("Texto desencriptado con éxito.");
}

// Función para copiar el texto al portapapeles
function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    showMessage("Texto copiado al portapapeles.");
}

// Función para mostrar un mensaje temporal
function showMessage(message) {
    let messageElement = document.getElementById("copyMessage");
    messageElement.textContent = message;
    messageElement.style.display = "block";
    setTimeout(() => {
        messageElement.style.display = "none";
    }, 3000);
}

// Función para habilitar el botón de copiar
function enableCopyButton() {
    document.getElementById("copyButton").disabled = false;
}

// Función para limpiar el texto de salida
function clearOutput() {
    document.getElementById("outputText").value = "";
    document.getElementById("copyButton").disabled = true;
}
