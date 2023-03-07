import "../loadEnvironment.js";
import express from "express";
import morgan from "morgan";

export const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use(morgan("dev"));
