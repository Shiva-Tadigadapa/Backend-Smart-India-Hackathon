// import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import cors from "cors";
// import authRouter from "./routes/auth.route";
import userToAdRouter from "./routes/userToAd.route"
import requests from "./routes/requests.route"
import morgan from "morgan";
import mongoose from "mongoose";

// export const prisma = new PrismaClient();
const app = express();

async function main() {
  // Middleware
  app.use(morgan("dev"));
  app.use(
    cors(
      {
      origin: ["http://localhost:3000","http://127.0.0.1:5173"],
      // credentials: true,
    }
    )
  );
  app.use(express.json());

  const connect = () => {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //   Health Checker
  app.get("/api/modd", (res: Response) => {
    res.status(200).json({
      status: "success",
      message: "surprise",
    });
  });

  // app.use("/api/auth", authRouter);
  app.use("/", userToAdRouter);
  app.use( "/api", requests)

  app.all("*", (req: Request, res: Response) => {
    return res.status(404).json({
      status: "fail",
      message: `Route: ${req.originalUrl} not found`,
    });
  });

  const PORT = 8000;
  app.listen(PORT, () => {
    connect();
    console.info(`Server started on port: ${PORT}`);
  });
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });