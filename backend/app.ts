import express from "express";
import cors from "cors";
import userRouter from "./lib/controllers/users/controller";

const app = express();

app.use(
	cors({
		origin: ['origin(s)'],
		allowedHeaders: ['Authorization', 'Content-Type'],
	})
);

app.use(express.json());

app.use("/api", userRouter);

export default app;
