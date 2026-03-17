import conexao from "../database/index.js";

class TimeRepository {
    index() {
        const sql = "SELECT * FROM db_brasileirao.campeonato";
        return new Promise((resolve, reject) => {
            conexao.query(sql, (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }

    searchByName(nome) {
        const sql = "SELECT * FROM db_brasileirao.campeonato WHERE nome LIKE ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [`%${nome}%`], (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }

    show(id) {
        const sql = "SELECT * FROM db_brasileirao.campeonato WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }

    store(dados) {
        const sql = "INSERT INTO db_brasileirao.campeonato SET ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, dados, (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }

    update(dados, id) {
        const sql = "UPDATE db_brasileirao.campeonato SET ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [dados, id], (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }

    delete(id) {
        const sql = "DELETE FROM db_brasileirao.campeonato WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            });
        });
    }
}

export default new TimeRepository();