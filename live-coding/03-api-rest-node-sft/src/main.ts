import fastify from "fastify";
import { routerWithLibraryServices } from "#src/handlers/library.js";
import libraryServices from "#src/services/library.js";

const app = fastify();

app.get("/healthz", (_req, res) => {
  res.status(200).send("ok");
});

const libraryRouterWithServices = routerWithLibraryServices(libraryServices);
app.register(libraryRouterWithServices);

app.listen({ port: 8000 }).then((result) => {
  console.log("Listening on: ", result);
});
