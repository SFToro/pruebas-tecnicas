import { describe, it, expect, beforeAll } from "bun:test";
import type {
  Author,
  AuthorInput,
  Book,
  BookInput,
} from "./src/model/model.js";

export {};
let authorIdOne;
let authorIdTwo;

describe("Testing endpoint", () => {
  it("Should respond", async () => {
    const res = await fetch("localhost:8000/healthz");
    expect(res.status).toStrictEqual(200);
    const restText = await res.text();
    expect(restText).toStrictEqual("ok");
  });
});

describe("Testing author post endpoint", () => {
  it("Should return the created author id 1", async () => {
    const authorInput: AuthorInput = {
      name: "perico",
    };
    const res = await fetch("localhost:8000/author", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(authorInput),
    });
    expect(res.status).toStrictEqual(200);
    const author = (await res.json()) as Author;
    authorIdOne = author.id;
    expect(author.id).toBeString();
  });
});

describe("Testing author post endpoint", () => {
  it("Should return the created author id 2", async () => {
    const authorInput: AuthorInput = {
      name: "palotes",
    };
    const res = await fetch("localhost:8000/author", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(authorInput),
    });
    expect(res.status).toStrictEqual(200);
    const author = (await res.json()) as Author;
    authorIdTwo = author.id;
    expect(author.id).toBeString();
  });
});

describe("Testing book post endpoint", () => {
  it("Should return the created book id", async () => {
    const bookInput: BookInput = {
      title: "A book",
      pages: 256,
      chapters: 10,
      authors: [authorIdTwo, authorIdOne],
    };
    const res = await fetch("localhost:8000/book", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(bookInput),
    });
    expect(res.status).toStrictEqual(200);
    const book = (await res.json()) as Book;
    expect(book.id).toBeString();
  });
});
describe("Testing book post endpoint", () => {
  it("Should return 400, missing pages in body", async () => {
    const bookInput = {
      title: "A book",
      chapters: 10,
      authors: [authorIdTwo, authorIdOne],
    };
    const res = await fetch("localhost:8000/book", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInput),
    });
    expect(res.status).toStrictEqual(400);
  });
});
describe("Testing book post endpoint", () => {
  it("Should return 400, missing authors in body", async () => {
    const bookInput = {
      title: "A book",
      chapters: 10,
      pages: 10,
      authors: [],
    };
    const res = await fetch("localhost:8000/book", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInput),
    });
    expect(res.status).toStrictEqual(400);
  });
});

describe("Testing author post endpoint", () => {
  it("Should return 400, missing name in body", async () => {
    const authorInput = {};
    const res = await fetch("localhost:8000/author", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(authorInput),
    });
    expect(res.status).toStrictEqual(400);
  });
});

describe("Testing author post endpoint", () => {
  it("Should return 400, empty name in body", async () => {
    const authorInput: AuthorInput = {
      name: "",
    };
    const res = await fetch("localhost:8000/author", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(authorInput),
    });
    expect(res.status).toStrictEqual(400);
  });
});

describe("Testing get all books endpoint", () => {
  it("Should return all the books with its authors", async () => {
    const res = await fetch("localhost:8000/book", {
      method: "get",
      headers: {
        accept: "application/json",
      },
    });
    expect(res.status).toStrictEqual(200);
    const data = await res.json();
    expect(data).toBeArray();
  });
});
