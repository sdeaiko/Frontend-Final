import express from "express";
import mongoose from "mongoose";
import config from "./config.js";
import bodyParser from "body-parser";
import categoryRouter from "./src/routes/categories.js";
import incomeRouter from "./src/routes/incomes.js";
import expenseRouter from "./src/routes/expenses.js";
import cors from "cors"; 

const app = express();

app.use(bodyParser.json());


app.use(cors());

app.use(`/api/v1/categories`, categoryRouter);
app.use(`/api/v1/expenses`, expenseRouter);
app.use(`/api/v1/incomes`, incomeRouter);

async function startApp() {
    try {
        await mongoose.connect(config.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        app.listen(config.PORT, () => console.log('SERVER STARTED ON PORT ' + config.PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();
