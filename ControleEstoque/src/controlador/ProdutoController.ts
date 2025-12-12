import { Produto } from "../modelo/Produto";
import { ProdutoRepository } from "../repositorio/ProdutoRepository";
import { colors } from "../util/Colors";


export class ProdutoController implements ProdutoRepository {
   private listaProdutos: Array<Produto> = new Array<Produto>();
   numero: number = 0;

    procurarPorNumero(numero: number): void {
         let buscaProduto = this.buscarNoArray(numero);
        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else {
            console.log(colors.fg.red, "\nA Produto número: " + numero 
                + " não foi encontrada!", colors.reset);
        }
    }

    listarTodos(): void {
        for (let Produto of this.listaProdutos) {
            Produto.visualizar();
        };
    }

    cadastrar(Produto: Produto): void {
        this.listaProdutos.push(Produto);
        console.log(colors.fg.green,"/nA Produto número:"+ Produto.numero + 
            "foi criada com sucesso!", colors.reset);
    }

    atualizar(Produto: Produto): void {

        let buscaProduto = this.buscarNoArray(Produto.numero);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = Produto;
            console.log(colors.fg.green, "\nA Produto número: " + Produto.numero 
                + " foi atualizada com sucesso!", colors.reset);
        }else {
            console.log(colors.fg.red, "\nA Produto número: " + Produto.numero 
                + " não foi encontrada!", colors.reset);
        }
        
    }

    deletar(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, "\nA Produto número: " + numero 
                + " foi excluída com sucesso!", colors.reset);
        }else {
            console.log(colors.fg.red, "\nA Produto número: " + numero 
                + " não foi encontrada!", colors.reset);
        }
    }

   
    gerarNumero(): number {
       return ++ this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {
        for (let Produto of this.listaProdutos) {
            if (Produto.numero === numero) {
                return Produto;
            }
        }
        return null;
    }
}