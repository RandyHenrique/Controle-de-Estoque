import { Produto } from "./Produto";

export class Racao extends Produto {

    private _quantidade: number;

    constructor(numero: number, marca: string, especie: string, valor: number, 
         quantidade: number, tipo: number) {
        super(numero, marca, especie,  valor, tipo);
        this._quantidade = quantidade;
    }
    
    public get quantidade() {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("quantidade: " + this._quantidade);
    }

}