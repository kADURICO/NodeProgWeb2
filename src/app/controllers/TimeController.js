import TimeRepository from "../repositories/TimeRepository.js";

class TimeController {

    async index(req, res) {
        try {
            const result = await TimeRepository.index();
            res.status(200).json(result);
        } catch (err) {
            console.error("Erro:", err);
            res.status(500).json({ erro: err });
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const result = await TimeRepository.show(id);
            res.status(200).json(result);
        } catch (err) {
            console.error("Erro:", err);
            res.status(500).json({ erro: err });
        }
    }

    async store(req, res) {
        try {
            const dados = req.body;
            const result = await TimeRepository.store(dados);
            res.status(201).json({ mensagem: result });
        } catch (err) {
            console.error("Erro:", err);
            res.status(500).json({ erro: err });
        }
    }

    async update(req, res) {
        try {
            const dados = req.body;
            const id = req.params.id;
            const result = await TimeRepository.update(dados, id);
            res.status(200).json({ mensagem: result });
        } catch (err) {
            console.error("Erro:", err);
            res.status(500).json({ erro: err });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const result = await TimeRepository.delete(id);
            res.status(200).json({ mensagem: result });
        } catch (err) {
            console.error("Erro:", err);
            res.status(500).json({ erro: err });
        }
    }

    async searchByName(req, res) {
        try {
            const { nome } = req.query;

            if (!nome) {
                return res.status(400).json({ erro: "Parâmetro 'nome' é obrigatório." });
            }

            const result = await TimeRepository.searchByName(nome);
            res.status(200).json(result);
        } catch (err) {
            console.error("Erro:", err);
            res.status(500).json({ erro: err });
        }
    }
}

export default new TimeController();