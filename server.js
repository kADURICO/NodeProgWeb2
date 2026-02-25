import app from "./src/app.js";
import conexao from "./infra/conexao.js";

const port = 4200;

conexao.connect((erro) => {
    if (erro) {
        console.log("Erro: " + erro);
    } else {
        console.log("Conectado ao banco de dados");

        app.listen(port, () => {
            console.log(`Server rodando http://localhost:${port}`);
        });
    }
});

