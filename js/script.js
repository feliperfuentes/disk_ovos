class Menu {
  constructor() {
    this.btnMenu = document.querySelector("#icone-menu");
    this.menu = document.querySelector(".menu-header");
    this.linksMenu = document.querySelectorAll(".menu-superior a");
    this.abrirFecharMenu = this.abrirFecharMenu.bind(this);
  }

  trocarImgBtn(event) {
    const imgClosed = "./img/icone-menu-closed.svg";
    const imgOpen = "./img/icone-menu-open.svg";
    if (event.srcElement.attributes.src.value == imgClosed) {
      event.srcElement.attributes.src.value = imgOpen;
      this.linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
          this.btnMenu.children[0].attributes[0].value = imgClosed;
          this.menu.classList.remove("menu-open");
          document.documentElement.style.overflowY = "visible";
        });
      });
      document.documentElement.style.overflowY = "hidden";
    } else {
      event.srcElement.attributes.src.value = imgClosed;
      document.documentElement.style.overflowY = "visible";
    }
  }

  mostrarMenu() {
    this.menu.classList.toggle("menu-open");
  }

  abrirFecharMenu(event) {
    this.trocarImgBtn(event);
    this.mostrarMenu();
  }

  addEvents() {
    this.btnMenu.addEventListener("click", this.abrirFecharMenu);
  }

  init() {
    this.addEvents();
    return this;
  }
}

const menu = new Menu();
menu.init();

/* ROLAGEM SUAVE ENTRE SEÇÕES */

class RolagemSuave {
  constructor(links) {
    this.linksScroll = document.querySelectorAll(links);
    this.capturarEvento();
  }

  scrollSuave(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth", // Define a rolagem suave
      block: "start", // Alinha ao topo
    });
  }

  capturarEvento() {
    this.linksScroll.forEach((link) => {
      link.addEventListener("click", this.scrollSuave);
    });
  }
}

const rolagemSuave = new RolagemSuave(".links-scroll");
