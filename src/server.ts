import http from "http";
import express from "express";

process.on("uncaughtException", (e) => {
  console.error({
    message: "uncaughtException",
    extra: e
  });
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.error({
    message: "unhandledRejection",
    extra: e
  });
  process.exit(1);
});

const router = express();

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

function start() {
  server.listen(PORT, () =>
    console.log({
      message: `Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}...`
    })
  );
}

start();
