import express from "express";

const app = express();

app.use(express.json());

const testJson = {
    "times": [
        {
            "id": 1,
            "nome": "Flamengo",
            "cidade": "Rio de Janeiro"
        },
        {
            "id": 2,
            "nome": "Vasco",
            "cidade": "Rio de Janeiro"
        },
        {
            "id": 3,
            "nome": "Fluminense",
            "cidade": "Rio de Janeiro"
        },
        {
            "id": 4,
            "nome": "Botafogo",
            "cidade": "Rio de Janeiro"
        }
    ]
}

const findTime = (id) => {
    return testJson.times.find((time) => time.id == id);
}

const findTimeIndex = (id) => {
    return testJson.times.findIndex((time) => time.id == id);
}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/times", (req, res) => {
    res.status(200).send(testJson);
});

app.get("/times/:id", (req, res) => {
    res.json(findTime(req.params.id));
});

app.post("/times", (req, res) => {
    testJson.times.push(req.body);
    res.status(201).send('Time adicionado com sucesso!');
});

app.put("/times/:id", (req, res) => {
    const timeIndex = findTimeIndex(req.params.id);
    testJson.times[timeIndex] = req.body;
    res.status(200).send('Time atualizado com sucesso!');
});

app.delete("/times/:id", (req, res) => {
    testJson.times.splice(findTimeIndex(req.params.id), 1);
    res.status(200).send('Time deletado com sucesso!');
});

export default app;
