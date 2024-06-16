document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    const Senha = document.getElementById('password');
    const ConfirmarSenha = document.getElementById('confirmPassword');

    if (Senha.value !== ConfirmarSenha.value) {
        // Adiciona uma classe de erro e mostra uma mensagem de erro
        Senha.classList.add('error');
        ConfirmarSenha.classList.add('error');
        ConfirmarSenha.setCustomValidity('As senhas não coincidem.');
        ConfirmarSenha.reportValidity();
    } else {
        // Remove a classe de erro e limpa a mensagem de erro
        Senha.classList.remove('error');
        ConfirmarSenha.classList.remove('error');
        ConfirmarSenha.setCustomValidity('');
        // Aqui você pode enviar o formulário
        // this.submit(); // descomente esta linha para permitir o envio do formulário
    }
});