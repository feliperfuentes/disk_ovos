class Menu {
  constructor() {
    this.btnMenu = document.querySelector("#icone-menu");
    this.menu = document.querySelector(".menu-header");
    this.abrirFecharMenu = this.abrirFecharMenu.bind(this);
  }

  trocarImgBtn(event) {
    const imgClosed = "./img/icone-menu-closed.svg";
    const imgOpen = "./img/icone-menu-open.svg";
    if (event.srcElement.attributes.src.value == imgClosed) {
      event.srcElement.attributes.src.value = imgOpen;
    } else {
      event.srcElement.attributes.src.value = imgClosed;
    }
  }

  abrirFecharMenu(event) {
    this.trocarImgBtn(event);
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
