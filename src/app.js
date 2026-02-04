import express from "express";

const app = express();

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

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/times", (req, res) => {
    res.send(testJson);
});

export default app;
