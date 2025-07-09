import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const envObject = {
  server: { port: PORT },
  visual: { front: FRONTEND_URL },
  resend: { key: RESEND_API_KEY },
};

export { envObject };