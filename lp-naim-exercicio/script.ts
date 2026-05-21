// Menu Hamburguer
class MenuHamburguer{

    private botao: HTMLButtonElement;
    private lista: HTMLElement;

    constructor(idBotao: string,idLista: string){
        this.botao = document.querySelector(idBotao) as HTMLButtonElement
        this.lista = document.getElementById(idLista) as HTMLElement

        this.alternarMenu()
    }

    private alternarMenu(): void {

        this.botao.addEventListener("click",(evt: MouseEvent): void =>{
            this.lista.classList.toggle("listaAtiva")
        })

    }
}

const meuMenu = new MenuHamburguer("#botaoHamb", "lista")

// Ícones e imagens

class IconesEImagens{
    private icones: NodeListOf<HTMLButtonElement>;
    private imagens: NodeListOf<HTMLDivElement>;
    private classeAtiva: string

    //public estaAtivo: boolean = false;
    constructor(classeAtivaCSS: string = ".imgsAtivo"){
        this.icones = document.querySelectorAll<HTMLButtonElement>(".icons")
        this.imagens = document.querySelectorAll<HTMLDivElement>(".imgs")
        this.classeAtiva = classeAtivaCSS

        this.inicializar()
    }

    private inicializar(): void {
        
        this.icones.forEach((icone) => {

            icone.addEventListener("click",() => {
                const idDaImagemAlvo = icone.dataset.target
            
                if(idDaImagemAlvo){
                    this.alternarImagens(idDaImagemAlvo)
                }
            })
        })
    }

    private alternarImagens(idAlvo: string){

        this.imagens.forEach((img) => {
            img.classList.remove(this.classeAtiva)
        })

        const imagemExibir = document.getElementById(idAlvo) as HTMLDivElement

        if(imagemExibir){
            imagemExibir.classList.add(this.classeAtiva)
        }
    }
}

const galera = new IconesEImagens("imgsAtivo")

//Perguntas frequentes

class PerguntasFreq{

    private botaoPlus: NodeListOf<HTMLButtonElement>;
    private text: NodeListOf<HTMLElement>;
    public classOculta

    constructor(classOculta: string){
        this.botaoPlus = document.querySelectorAll<HTMLButtonElement>(".botaoPlus")
        this.text = document.querySelectorAll<HTMLElement>(".textos")
        this.classOculta = classOculta

        this.inicializar()
    }

    private inicializar(): void{

        this.botaoPlus.forEach((bplus)=>{

            bplus.addEventListener("click", (): void => {
                const idBotao = bplus.dataset.target

                if(idBotao){
                    this.addTexto(idBotao)
                }
            })
        })
    }

    private addTexto(idTt: string){

        const exibirTexto = document.getElementById(idTt) as HTMLElement;

        if(exibirTexto){
            exibirTexto.classList.toggle(this.classOculta)
        }
    }
}

const pf = new PerguntasFreq("txt")