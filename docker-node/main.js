const express = require('express')
const app =express();

const PORT = process.env.POrT || 8000;

app.get("/", (req, res) => {
    return res.json({message: "hey, I am nodejs from container."});
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))