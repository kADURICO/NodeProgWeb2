import app from "./src/app.js";

const port = 4200;

app.listen(port, () => {
    console.log(`Server rodando http://localhost:${port}`);
});
