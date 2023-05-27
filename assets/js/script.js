// window.addEventListener('load',()=>{

//     const headerDiv = document.querySelector('#header-container');
// const footerDiv = document.querySelector('#footer-container');

// faz uma requisição para o arquivo header.html usando fetch()
// fetch('../includes/header.html')
//   .then(response => response.text()) // converte a resposta para texto
//   .then(data => {
//     headerDiv.innerHTML = data; // insere o conteúdo do arquivo header.html na div do cabeçalho
//   });

// // faz uma requisição para o arquivo footer.html usando fetch()
// fetch('../includes/footer.html')
//   .then(response => response.text()) // converte a resposta para texto
//   .then(data => {
//     footerDiv.innerHTML = data; // insere o conteúdo do arquivo footer.html na div do rodapé
//   });
// })

(function carregarPage() {
  const bodyLoad = document.querySelector("#main-section");

  fetch("../pages/login/login.html")
    .then((res) => res.text())
    .then((data) => {
        bodyLoad.innerHTML = data
    });
})();
