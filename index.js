import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(Routes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});