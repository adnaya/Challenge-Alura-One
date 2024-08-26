const inputTexto = document.querySelector('.menu-input input');
const btnCriptografar = document.querySelector('.btn-criptografar');
const btnDescriptografar = document.querySelector('.btn-descriptografar');

// Função para criptografar o texto
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Evento para o botão de criptografar
btnCriptografar.addEventListener('click', () => {
    const texto = inputTexto.value;
    if (texto) {
        const textoCriptografado = criptografarTexto(texto);
        localStorage.setItem('mensagem', textoCriptografado);
        window.location.href = 'retorno.html'; 
    }
});

// Evento para o botão de descriptografar
btnDescriptografar.addEventListener('click', () => {
    const texto = inputTexto.value;
    if (texto) {
        const textoDescriptografado = descriptografarTexto(texto);
        localStorage.setItem('mensagem', textoDescriptografado);
        window.location.href = 'retorno.html'; 
    }
});

