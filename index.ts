import express, { Application, Request, Response } from "express";
import router from "./router/bookRouter";
import cors from "cors";

const PORT: number | string =   process.env.port || 5000;
const app: Application = express();
require("./config/db");
app.use(express.json());

// const allowedOrigins =["http://localhost:3000"];

// const options:cors.CorsOptions = {
//   origin:allowedOrigins
// }

app.use(cors());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server Up 🚀🚀🚀",
  });
});

app.use("/server", router);

app.listen(PORT, () => {
  console.log(`Server up on PORT: ${PORT}`);
});
