import express from "express";
import routes from "./routes";
import helmet from "helmet";
import cors from "cors";
import http from "http";
import "dotenv/config";
// import { passportStrat } from "./services/auth.service";
// import passport from "passport";

import { port } from "./config";
import morgan from "morgan";
import bodyParser from "body-parser";
import { errorHandler } from "./helper";

const app = express();
app.use(cors());
// app.use(morgan(""));

// app.use(passport.initialize());
// passportStrat();

app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);
app.use(errorHandler);
app.set("port", port);

const server = http.createServer(app);

const onError = (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr!.port;
  console.log("Listening on " + bind);
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
