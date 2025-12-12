import { colors } from "./src/util/Colors";
import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controlador/ProdutoController";
import { Produto } from "./src/modelo/Produto";
import { Medicacao } from "./src/modelo/Medicacao";
import { Racao } from "./src/modelo/Racao";

export function main() {

    let produto = new ProdutoController();
    
    let opcao: number, marca: string, especie: string, valor: number, tipo: number;
    const tiposProduto = ["Medicacao", "Racao"];
    
    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                        "*****************************************************");
        console.log("                                                     ");
        console.log("              Controle de Estoque                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar produto                        ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar produto por código            ");
        console.log("            4 - Atualizar Dados do produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                ( "\nVolte Sempre!"));
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Produto\n\n", colors.reset);
                console.log("Digite a Marca do Produto: ");
                marca = readlinesync.question("");

                console.log("Digite o nome da Especie: ");
                especie = readlinesync.question("");

                console.log("\nDigite o valor do Produto: ");
                valor = readlinesync.questionFloat("");

                console.log("\nDigite o tipo de produto: 0 - Medicacao | 1 - Racao");
                tipo = readlinesync.keyInSelect(tiposProduto, "", {cancel: false});


                switch (tipo) {
                    case 0:
                        console.log("Digite a data de validade da medicação (DD/MM/AAAA): ");
                        let dataDeValidade = readlinesync.question("");

                        produto.cadastrar( new Medicacao(produto.gerarNumero(), marca, especie, valor, dataDeValidade, tipo));
                        keyPress();
                        break;
                    case 1:
                        console.log("Digite a Quantidade   : ");
                        let quantidade = readlinesync.questionInt("");
                        produto.cadastrar( new Racao(produto.gerarNumero(), marca, especie, valor, quantidade, tipo));
                        keyPress();
                        break;
                }
                
                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                produto.listarTodos();

            
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por Código\n\n", colors.reset);
                console.log("Digite o código do Produto: ");
                let numeroBusca = readlinesync.questionInt("");
                produto.procurarPorNumero(numeroBusca);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar Dados do Produto\n\n", colors.reset);
                    
                console.log("Digite o código do Produto a ser atualizado: ");
                let numeroAtualizar = readlinesync.questionInt("");
                let buscaProduto = produto.buscarNoArray(numeroAtualizar); 
                if (buscaProduto != null) {
                    
                    console.log(`[Atual: ${buscaProduto.marca}] Digite a Nova Marca: `);
                    marca = readlinesync.question("") || buscaProduto.marca;
                    
                    console.log(`[Atual: ${buscaProduto.especie}] Digite a Nova Especie: `);
                    especie = readlinesync.question("") || buscaProduto.especie;

                    console.log(`[Atual: R$${buscaProduto.valor.toFixed(2)}] Digite o Novo Valor: `);
                    let novoValorInput = readlinesync.questionFloat("");

                    console.log("\nDigite o tipo da Produto: ");
                    tipo = readlinesync.keyInSelect(tiposProduto, "", {cancel: false});

                    switch (tipo) {
                        case 0:
                            console.log("Digite a Nova Data de Validade (DD/MM/AAAA): ");
                            let dataDeValidade = readlinesync.question("")
                            produto.atualizar( new Medicacao(numeroAtualizar, marca, especie, 
                                novoValorInput || buscaProduto.valor, dataDeValidade, tipo));
                            break;
                        case 1:
                            console.log("Digite a Nova Quantidade: ");
                            let quantidade = readlinesync.questionInt("");
                            produto.atualizar( new Racao(numeroAtualizar, marca, especie, 
                                novoValorInput || buscaProduto.valor, quantidade, tipo));
                            break;
                    
                            }
                
                } else {
                    console.log(colors.fg.red, "\nO Produto número: " + numeroAtualizar + " não foi encontrado!", colors.reset);
                }

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar Produto\n\n", colors.reset);
                    console.log("Digite o código do Produto: ");
                    let numeroDeletar = readlinesync.questionInt("");
                    produto.deletar(numeroDeletar);
                
                keyPress();
                break;
            
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress();
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedor */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Randerson Henrique - randerson.henrique4@gmail.com");
    console.log("github.com/RandyHenrique");
    console.log("*****************************************************");
}


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();