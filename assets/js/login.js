


const formLogin = document.querySelector(".login__form");

let tentavivas = 0;

formLogin.addEventListener("submit", (event) => {
    event.preventDefault()

    const emailLogin = document.getElementById("login-email").value.toLowerCase();
    const senhaLogin = document.getElementById("login-pass").value;

    const emailCadastro = localStorage.getItem("email_cadastrado");
    const senhaCadastro = localStorage.getItem("senha_cadastrada");
    
    if ( (emailLogin === emailCadastro) && (senhaLogin ===  senhaCadastro) ){
        alert("Login realizado com sucesso!");

        window.location = "pages/telaLogada.html";
    } else {
        alert("Email ou senha incorretos(as)!");

        tentavivas++;

        alert(`Tentativa ${tentavivas}/3`);

        if (tentavivas === 3) {
            alert("Senha Bloqueada🔒")
            tentavivas = 0;

            window.location = "pages/recuperar.html";
        }
    }

});



