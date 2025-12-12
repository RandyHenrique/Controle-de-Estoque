import { Produto } from "./Produto";

export class Medicacao extends Produto {


    private _dataDeValidade: string; 

    constructor(
        numero: number, 
        marca: string, 
        especie: string, 
        valor: number, 
        dataDeValidade: string, tipo: number
    ) {
        
        super(numero, marca, especie, valor, tipo); 
        
        this._dataDeValidade = dataDeValidade;
    }
    
    public get dataDeValidade(): string {
        return this._dataDeValidade;
    }

    public set dataDeValidade(dataDeValidade: string) {
        this._dataDeValidade = dataDeValidade;
    }

    public visualizar(): void {
        
        super.visualizar(); 
        
        console.log("Data de Validade: " + this._dataDeValidade);
    }
}