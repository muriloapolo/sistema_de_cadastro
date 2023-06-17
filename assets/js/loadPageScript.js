

const loginBtn = document.querySelectorAll(".login-sistema");
loginBtn.forEach((log) => {
  log.addEventListener("click", () => {
    carregarPagina("home");
  });
});

//Listar HOME / LOGIN NA TELA

const pagesArr = document.querySelectorAll(".menu-aside-li");
const bodyLoad = document.querySelector("#main-section");

pagesArr.forEach((link) => {
  link.addEventListener("click", () => {
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
       
        let aId = link.getAttribute("id");
        carregarPagina(aId);
     
      } else {
        
        carregarPagina("home");
      }
    });
    
  });
});



async function carregarPagina(aId) {
  await fetch(`../pages/${aId}/${aId}.html`)
    .then((res) => res.text())
    .then((data) => {
      bodyLoad.innerHTML = data;
    })
    .then(() => {
      try {
        if (aId == "home") {
          const script = document.createElement("script");

          script.type = "module";
          script.src = "./assets/js/connect.js"; // URL do seu script aqui
          bodyLoad.appendChild(script);
        }
      } catch (error) {
        if (error) {
          window.location.reload;
        }
      }
    });
}
