import fastify from "fastify";
import libraryServices from "./services/library.js";
import type { AuthorInput, BookInput } from "./model/model.js";

const app = fastify();

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

app.post("/book", async (req, res) => {
  // Verification needed
  const book = req.body as BookInput;
  // Verification needed
  const book_id = await libraryServices.createBook(book);
  res.status(200).send(JSON.stringify({ book_id }));
});
app.post("/author", async (req, res) => {
  // Verification needed
  const author = req.body as AuthorInput;
  // Verification needed
  const author_id = await libraryServices.createAuthor(author);
  res.status(200).send(JSON.stringify({ author_id }));
});
app.get("/book", async (req, res) => {
  const books = await libraryServices.getBooks();
  console.log(books);
  res.status(200).send(JSON.stringify({ books }));
});

app.listen({ port: 8000 }).then((result) => {
  console.log("Listening on: ", result);
});
