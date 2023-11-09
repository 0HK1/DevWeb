document.addEventListener("DOMContentLoaded", function() {
    const confirmButton = document.querySelector(".button_confirmar a");
    const emailInput = document.querySelector(".email input");
    const senhaInput = document.querySelector(".senha input");
    const confirmarSenhaInput = document.querySelector(".resenha input");

    confirmButton.addEventListener("click", function(event) {
        if (emailInput.value === "" || senhaInput.value.length < 6) {
            event.preventDefault(); // Impede o envio do formulário

            if (emailInput.value === "") {
                alert("O email não pode ficar em branco.");
            }

            if (senhaInput.value.length < 6) {
                alert("A senha deve ter pelo menos seis dígitos.");
            }
        }

        // Verifica se as senhas não são iguais
        if (senhaInput.value !== confirmarSenhaInput.value) {
            event.preventDefault(); // Impede o envio do formulário
            alert("As senhas digitadas não conferem.");
        }
    });
});
