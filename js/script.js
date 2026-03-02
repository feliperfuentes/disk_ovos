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
          this.abrirFecharMenu(event);
        });
      });
    } else {
      event.srcElement.attributes.src.value = imgClosed;
    }
  }

  mostrarMenu() {
    this.menu.classList.toggle("menu-open");
  }

  fecharAoClicarLinks() {
    this.linksMenu.forEach((link) => {
      link.addEventListener("click", () => {
        console.log(link);
      });
    });
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
