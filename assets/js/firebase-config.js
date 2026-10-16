const firebaseConfig = {
    apiKey: "AIzaSyAr9AxKPUfIgnj34l70jr98fbWYC7x0tD4",
    authDomain: "projetologin-9c871.firebaseapp.com",
    projectId: "projetologin-9c871",
    storageBucket: "projetologin-9c871.firebasestorage.app",
    messagingSenderId: "542557791341",
    appId: "1:542557791341:web:475bb2055aaf30cd5c8b64",
    measurementId: "G-XS4P7DQKW2"
};

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const googleLoginButton = document.getElementById("google-login");

googleLoginButton.addEventListener("click", () => {
    
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem("usuario_google", JSON.stringify({ nome: user.displayName, email: user.email}));
            alert(`Bem-Vindo ${user.displayName}!`);
            window.location = "pages/telaLogada.html"

        }).catch((error) => alert(`Erro ao entrar com Google: ${error.message}`));
});