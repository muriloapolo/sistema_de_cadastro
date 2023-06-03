window.addEventListener("load", () => {
  const bodyLoad = document.querySelector("#main-section");
  const pagesArr = document.querySelectorAll(".menu-aside-li");

  pagesArr.forEach((link, i) => {
    link.addEventListener("click", () => {
      let aId = link.getAttribute("id");
      carregarPagina(aId);
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
          if(aId == home){
            const script = document.createElement("script");
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
});
