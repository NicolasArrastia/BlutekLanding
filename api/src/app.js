import express from "express";
import cors from "cors";
import morgan from "morgan";
import { envObject } from "./config/enviroment.js";
import { resendRouter } from "./routes/resendRouter.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(
  cors({
    origin: envObject.visual.front,
    credentials: true,
  })
);

app.use(morgan("dev"));

// Rutas
app.use("/api/resend", resendRouter);

// Levanta servidor
const PORT = envObject.server.port || 3000;
app.listen(PORT, () => {
  console.log(`El servidor funciona en el puerto: ${PORT}`);
});