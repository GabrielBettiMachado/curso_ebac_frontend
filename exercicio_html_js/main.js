document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const numero1 = parseFloat(document.getElementById('numero-1').value);
    const numero2 = parseFloat(document.getElementById('numero-2').value);

    const mensagem = document.getElementById('mensagem');

    if (numero1 < numero2) {
        mensagem.textContent = "Parabéns! O segundo número é maior que o primeiro. Formulário válido.";
        mensagem.style.color = "green";
    }   else {
        mensagem.textContent = "Erro! O segundo número deve ser maior que o primeiro. Tente novamente.";
        mensagem.style.color = "red"
    }
})