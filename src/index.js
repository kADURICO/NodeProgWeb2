import app from "./app.js";
import conexao from "./app/database/index.js";

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

