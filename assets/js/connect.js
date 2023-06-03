let btnCadastro = document.querySelector(".btn-submit");
btnCadastro.addEventListener("click", (e) => {
  e.preventDefault();
  let emailUser = document.querySelector("#email").value;
  let passUser = document.querySelector("#password").value;

  consoleUser(emailUser,passUser);
});

function consoleUser(em,ps){
console.log(em,ps)
}




