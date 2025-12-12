import { colors } from "./src/util/Colors";
import readlinesync = require("readline-sync");

export function main() {
    
    let opcao: number;
    
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
                
                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);

            
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por Código\n\n", colors.reset);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar Dados do Produto\n\n", colors.reset);

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar Produto\n\n", colors.reset);
                
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

/* Função com os dados da pessoa desenvolvedora */
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