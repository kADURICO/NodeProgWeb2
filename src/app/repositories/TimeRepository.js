import conexao from "../database/index.js";


class TimeRepository {
    index(req, res) {
        const sql = "SELECT * FROM db_brasileirao.campeonato";
        conexao.query(sql, (err, result) => {
            if (err) {
                console.error("Erro:", err);
                res.status(500).json({ erro: err });
            }
            res.status(200).json(result);
        });
    }

    show(req, res) {
        const sql = "SELECT * FROM db_brasileirao.campeonato WHERE id = ?";
        conexao.query(sql, req.params.id, (err, result) => {
            if (err) {
                console.error("Erro:", err);
                res.status(500).json({ erro: err });
            }
            res.status(200).json(result);
        });
    }

    store(req, res) {
        const sql = "INSERT INTO db_brasileirao.campeonato SET ?"
        conexao.query(sql, req.body, (err, result) => {
            if (err) {
                console.error("Erro:", err);
                res.status(500).json({ erro: err });
            }
            res.status(201).json({ mensagem: result });
        });
    }

    update(req, res) {
        const sql = "UPDATE db_brasileirao.campeonato SET ? WHERE id = ?"
        conexao.query(sql, [req.body, req.params.id], (err, result) => {
            if (err) {
                console.error("Erro:", err);
                res.status(500).json({ erro: err });
            }
            res.status(200).json({ mensagem: result });
        });
    }

    delete(req, res) {
        const sql = "DELETE FROM db_brasileirao.campeonato WHERE id = ?"
        conexao.query(sql, req.params.id, (err, result) => {
            if (err) {
                console.error("Erro:", err);
                res.status(500).json({ erro: err });
            }
            res.status(200).json({ mensagem: result });
        });
    }
}

export default new TimeRepository();