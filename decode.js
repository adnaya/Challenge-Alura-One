const textoOutput = document.querySelector('.texto-output');
const btnCopiar = document.querySelector('.btn-copiar');
const btnDescriptografar = document.querySelector('.btn-descriptografar');
const btnCriptografar = document.querySelector('.btn-criptografar');

const mensagem = localStorage.getItem('mensagem');

if (mensagem) {
    textoOutput.textContent = mensagem;
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoOutput.textContent)
        .then(() => {
            alert('Texto copiado para a área de transferência!');
        })
        .catch(err => {
            console.error('Falha ao copiar o texto: ', err);
        });
});

btnDescriptografar.addEventListener('click', () => {
    const textoDescriptografado = descriptografarTexto(textoOutput.textContent);
    textoOutput.textContent = textoDescriptografado;
    localStorage.setItem('mensagem', textoDescriptografado); 
});

btnCriptografar.addEventListener('click', () => {
    localStorage.setItem('mensagem', textoOutput.textContent); 
    window.location.href = 'index.html'; 
});
