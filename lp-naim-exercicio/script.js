// Menu Hamburguer
class MenuHamburguer {
    botao;
    lista;
    constructor(idBotao, idLista) {
        this.botao = document.querySelector(idBotao);
        this.lista = document.getElementById(idLista);
        this.alternarMenu();
    }
    alternarMenu() {
        this.botao.addEventListener("click", (evt) => {
            this.lista.classList.toggle("listaAtiva");
        });
    }
}
const meuMenu = new MenuHamburguer("#botaoHamb", "lista");
// Ícones e imagens
class IconesEImagens {
    icones;
    imagens;
    classeAtiva;
    //public estaAtivo: boolean = false;
    constructor(classeAtivaCSS = ".imgsAtivo") {
        this.icones = document.querySelectorAll(".icons");
        this.imagens = document.querySelectorAll(".imgs");
        this.classeAtiva = classeAtivaCSS;
        this.inicializar();
    }
    inicializar() {
        this.icones.forEach((icone) => {
            icone.addEventListener("click", () => {
                const idDaImagemAlvo = icone.dataset.target;
                if (idDaImagemAlvo) {
                    this.alternarImagens(idDaImagemAlvo);
                }
            });
        });
    }
    alternarImagens(idAlvo) {
        this.imagens.forEach((img) => {
            img.classList.remove(this.classeAtiva);
        });
        const imagemExibir = document.getElementById(idAlvo);
        if (imagemExibir) {
            imagemExibir.classList.add(this.classeAtiva);
        }
    }
}
const galera = new IconesEImagens("imgsAtivo");
export {};
//# sourceMappingURL=script.js.map