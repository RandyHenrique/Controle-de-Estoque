
import { Produto } from "../modelo/Produto";


export interface ProdutoRepository {

    procurarPorNumero(numero: number): void;
    listarTodos(): void;

    
    cadastrar(produto: Produto): void;

    atualizar(produto: Produto): void;

    deletar(numero: number): void;
    
}