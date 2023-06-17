try {
  const btnLoginSystem = document.querySelector(".btn-submit");
  btnLoginSystem.addEventListener("click", (e) => {
    e.preventDefault();  
    let emailUser = document.querySelector("#email").value;
    let passUser = document.querySelector("#password").value;

    firebase.auth().signInWithEmailAndPassword(emailUser, passUser)
    .then((response) => {

      if (response) carregarPagina("newsAbout");
    })
    .catch((error) => console.log(error));
  });
} catch (error) {
  console.error(error);
}
