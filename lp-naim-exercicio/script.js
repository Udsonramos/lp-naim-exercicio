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
//Perguntas frequentes
class PerguntasFreq {
    botaoPlus;
    text;
    classOculta;
    classAtiva;
    constructor(classOculta, classAtiva) {
        this.botaoPlus = document.querySelectorAll(".botaoPlus");
        this.text = document.querySelectorAll(".textos");
        this.classOculta = classOculta;
        this.classAtiva = classAtiva;
        this.inicializar();
    }
    inicializar() {
        this.botaoPlus.forEach((bplus) => {
            bplus.addEventListener("click", () => {
                const idBotao = bplus.dataset.target;
                if (idBotao) {
                    this.addTexto(idBotao);
                }
            });
        });
    }
    addTexto(idTt) {
        const exibirTexto = document.getElementById(idTt);
        if (exibirTexto) {
            if (exibirTexto.classList.contains(this.classOculta)) {
                exibirTexto.classList.replace(this.classOculta, this.classAtiva);
            }
            else if (exibirTexto.classList.contains(this.classAtiva)) {
                exibirTexto.classList.replace(this.classAtiva, this.classOculta);
            }
            //exibirTexto.classList.toggle(this.classOculta)
        }
    }
}
const pf = new PerguntasFreq("txt", "txtAtivo");
export {};
//# sourceMappingURL=script.js.map