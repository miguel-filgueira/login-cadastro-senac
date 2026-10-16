const formCadastro = document.querySelector(".login__form");

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();


    const emailCadastro = document.getElementById("cadastro-email").value.toLowerCase();
    const senhaCadastro = document.getElementById("login-pass").value;
    const senhaconfirm = document.getElementById("cadastro-pass-confirm").value;

    if (senhaCadastro === senhaconfirm) {

        localStorage.setItem("email_cadastrado", emailCadastro);

        localStorage.setItem("senha_cadastrada", senhaCadastro);

        alert("cadastro realzado com sucesso!!");

        window.location.href = "../index.html";

    } else {
        alert("Senhas diferentes!!!");
    }
});


















// console.log(formCadastro)
