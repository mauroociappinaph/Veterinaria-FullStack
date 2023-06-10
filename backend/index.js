import express from "express";

const app = express();

app.use("/*", (req, res) => {
    res.send("Hello World!");
});

app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
})

export default app;