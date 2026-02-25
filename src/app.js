import express from "express";

const app = express();

app.use(express.json());

const testJson = {
    "times": [
        {
            "id": 1,
            "nome": "América-MG",
            "cidade": "Belo Horizonte"
        },
        {
            "id": 2,
            "nome": "Athletico-PR",
            "cidade": "Curitiba"
        },
        {
            "id": 3,
            "nome": "Atlético-MG",
            "cidade": "Belo Horizonte"
        },
        {
            "id": 4,
            "nome": "Bahia",
            "cidade": "Salvador"
        },
        {
            "id": 5,
            "nome": "Botafogo",
            "cidade": "Rio de Janeiro"
        },
        {
            "id": 6,
            "nome": "Red Bull Bragantino",
            "cidade": "Bragança Paulista"
        },
        {
            "id": 7,
            "nome": "Chapecoense",
            "cidade": "Chapecó"
        },
        {
            "id": 8,
            "nome": "Corinthians",
            "cidade": "São Paulo"
        },
        {
            "id": 9,
            "nome": "Coritiba",
            "cidade": "Curitiba"
        },
        {
            "id": 10,
            "nome": "Cruzeiro",
            "cidade": "Belo Horizonte"
        },
        {
            "id": 11,
            "nome": "Flamengo",
            "cidade": "Rio de Janeiro"
        },
        {
            "id": 12,
            "nome": "Fluminense",
            "cidade": "Rio de Janeiro"
        },
        {
            "id": 13,
            "nome": "Grêmio",
            "cidade": "Porto Alegre"
        },
        {
            "id": 14,
            "nome": "Internacional",
            "cidade": "Porto Alegre"
        },
        {
            "id": 15,
            "nome": "Mirassol",
            "cidade": "Mirassol"
        },
        {
            "id": 16,
            "nome": "Palmeiras",
            "cidade": "São Paulo"
        },
        {
            "id": 17,
            "nome": "Remo",
            "cidade": "Belém"
        },
        {
            "id": 18,
            "nome": "Santos",
            "cidade": "Santos"
        },
        {
            "id": 19,
            "nome": "São Paulo",
            "cidade": "São Paulo"
        },
        {
            "id": 20,
            "nome": "Vasco",
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
