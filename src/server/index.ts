import "../loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddlewares/errorMiddlewares.js";
import usersRouter from "./routers/usersRouter/userRouter.js";

const allowedOrigins = [process.env.LOCALHOST!, process.env.NETLIFY_URL!];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

export const app = express();

app.disable("x-powered-by");
app.use(cors(options));
app.use(morgan("dev"));
app.use(express.json());

app.use("/users", usersRouter);

app.use(notFoundError);
app.use(generalError);
