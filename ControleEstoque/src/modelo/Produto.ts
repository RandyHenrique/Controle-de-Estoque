import { colors } from "../util/Colors"; 

export abstract class Produto {

    private _numero: number;
    private _marca: string;
    private _especie: number; 
    private _valor: number;

    
    constructor(numero: number, marca: string, especie: number, valor: number) {
        this._numero = numero;
        this._marca = marca;
        this._especie = especie;
        this._valor = valor;
    }

    
    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get marca() {
        return this._marca;
    }

    public set marca(marca: string) {
        this._marca = marca;
    }

    public get especie() {
        return this._especie;
    }

    public set especie(especie: number) {
        this._especie = especie;
    }

    public get valor() {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }
    
    
    public visualizar(): void {
        
        let nomeEspecie: string = "";
        switch (this._especie) {
            case 1:
                nomeEspecie = "Cachorro";
                break;
            case 2:
                nomeEspecie = "Gato";
                break;
            case 3:
                nomeEspecie = "Pássaro / Peixe / Outros";
                break;
            default:
                nomeEspecie = "Não Classificado";
                break;
        }

        
        const C_BG_BLUE = "\x1b[44m";
        const C_FG_WHITE = "\x1b[37m";
        const C_RESET = "\x1b[0m";

        console.log(C_FG_WHITE + C_BG_BLUE + "\n\n*****************************************************" + C_RESET);
        console.log(C_FG_WHITE + C_BG_BLUE + " Dados do Produto do Pet Shop:" + C_RESET);
        console.log(C_FG_WHITE + C_BG_BLUE + "*****************************************************" + C_RESET);
        console.log(`Código do Produto: ${this._numero}`);
        console.log(`Marca: ${this._marca}`);
        console.log(`Espécie Destinada: ${nomeEspecie}`);
        console.log(`Preço Unitário: R$ ${this._valor.toFixed(2)}`);
    }

}