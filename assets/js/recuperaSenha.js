const formRecupera = document.getElementById("recover-form");

const emailField = document.getElementById("email-field");

const emailInput = document.getElementById("recover-email");

const sendCodeButton = document.getElementById("send-code-button");

const codeEntrySection = document.getElementById("code-entry-section");

const verificationCodeInput = document.getElementById("verification-code");

const newPasswordInput = document.getElementById("login-pass");

const confirmNewPasswordInput = document.getElementById("cadastro-pass-confirm");

const verifyCodeButton = document.getElementById("verify-code-button");

const modalError = document.getElementById("modal-error");

const messageError = document.getElementById("error-message");

const loginInfoText = document.querySelector(".login__info-text");

// variavel pegada do cadastro :)

const emailCadastro = localStorage.getItem("email_cadastrado");

let generateCode = "";

// Função para mosrar a mensagem de erro

function mensageErrorDisplay(mensage) {

    modalError.style.display = "block";
    messageError.textContent = mensage;
}

// Função para gerar um codigo aleatório 

function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();

}

sendCodeButton.addEventListener("click", (event) => {
    event.preventDefault();
    modalError.style.display = "none";

    const emailRecover = emailInput.value.toLowerCase();

    if (!emailRecover) {
        mensageErrorDisplay("Digite um E-mail válido");
        return;
    }
    
    if (emailRecover === emailCadastro) {
        generateCode = generateRandomCode()
        localStorage.setItem("codigoGerado", generateCode)
        
        codeEntrySection.style.display = "block";
        emailField.style.display = "none";
        sendCodeButton.style.display = "none";

        loginInfoText.innerHTML = `Código enviado para o e-mail 
        <b>${emailCadastro}</b> O código é: 
        <b>${generateCode}</b>` 
        loginInfoText.style.fontSize = "0.8rem";


    } else {

        // formRecupera.reset();
        mensageErrorDisplay("Se um e-mail com este endereço for encontrado, um código de recuperação será enviado para ele.")

    }
});


formRecupera.addEventListener("submit", (event) => {
    event.preventDefault();
    
    modalError.style.display = "none"; 

    const enteredCode = verificationCodeInput.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;

    const codigoGeradoLs = localStorage.getItem("codigoGerado");

    if (!enteredCode || !newPassword || !confirmNewPassword) {
        mensageErrorDisplay("Por favor, preencha todos os campos: Código de Verificação, Nova Senha e Confirmar Nova Senha.");
        return;
    };

    if (newPassword !== confirmNewPassword) {
        mensageErrorDisplay("As senhas estão diferentes, por favor troque!");
        return;
        
    };

    if (codigoGeradoLs === enteredCode) {

        localStorage.setItem("senha_cadastrada", newPassword);


        mensageErrorDisplay("acertou uma em pae, parabens senha redefinida com sucesso");
        
        localStorage.removeItem("codigoGerado");
        localStorage.removeItem("emailRecupera");

        setTimeout(() => {
            window.location = "../index.html";
        }, 3000)

    } else {
        mensageErrorDisplay("tá errado o codígo ai pae");
    }
});
 

