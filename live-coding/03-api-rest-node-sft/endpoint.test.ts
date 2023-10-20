import { describe, it, expect } from "bun:test";
import type { AuthorInput, BookInput } from "./model/model.js";

export {};

describe("Testing endpoint", () => {
  it("Should respond", async () => {
    const res = await fetch("localhost:8000/healthz");
    expect(res.status).toStrictEqual(200);
    const restText = await res.text();
    expect(restText).toStrictEqual("ok");
  });
});

let authorIdOne;
describe("Testing author post endpoint", () => {
  it("Should return the created author id", async () => {
    const author: AuthorInput = {
      name: "perico",
    };
    const res = await fetch("localhost:8000/author", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(author),
    });
    expect(res.status).toStrictEqual(200);
    const { author_id } = await res.json();
    authorIdOne = author_id;
    expect(author_id).toBeString();
  });
});

let authorIdTwo;
describe("Testing author post endpoint", () => {
  it("Should return the created author id", async () => {
    const author: AuthorInput = {
      name: "palotes",
    };
    const res = await fetch("localhost:8000/author", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(author),
    });
    expect(res.status).toStrictEqual(200);
    const { author_id } = await res.json();
    authorIdTwo = author_id;
    expect(author_id).toBeString();
  });
});

describe("Testing book post endpoint", () => {
  it("Should return the created book id", async () => {
    const book: BookInput = {
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

      body: JSON.stringify(book),
    });
    expect(res.status).toStrictEqual(200);
    const { book_id } = await res.json();
    expect(book_id).toBeString();
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
    expect(data.books).toBeArray();
  });
});
