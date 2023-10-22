import type {
  AuthorInput,
  BookInput,
  LibraryServicesIface,
} from "#src/model/model.js";
import type { DoneFuncWithErrOrRes, FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

export const routerWithLibraryServices =
  (libraryServices: LibraryServicesIface) =>
  (fastify: FastifyInstance, _opts, done: DoneFuncWithErrOrRes) => {
    // Add schema validator and serializer
    fastify.setValidatorCompiler(validatorCompiler);
    fastify.setSerializerCompiler(serializerCompiler);
    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/book",
      {
        // Define your schema
        schema: {
          body: z.object({
            pages: z.number().int().min(1),
            chapters: z.number().int().min(1),
            title: z.string().min(4),
            authors: z.string().array().min(1),
          }),
          response: {
            200: z.object({
              id: z.string(),
              pages: z.number().int(),
              chapters: z.number().int(),
              title: z.string(),
            }),
          },
        },
      },
      async (req, _res) => {
        const bookInput = req.body as BookInput;
        const book = await libraryServices.createBook(bookInput);
        return book;
      }
    );

    fastify.withTypeProvider<ZodTypeProvider>().post(
      "/author",
      {
        schema: {
          body: z.object({
            name: z.string().min(4),
          }),
          response: {
            200: z.object({
              id: z.string(),
              name: z.string(),
            }),
          },
        },
      },
      async (req, _res) => {
        const authorInput = req.body as AuthorInput;
        const author = await libraryServices.createAuthor(authorInput);
        return author;
      }
    );
    fastify.withTypeProvider<ZodTypeProvider>().get(
      "/book",
      {
        schema: {
          response: {
            200: z.array(
              z.object({
                book_id: z.string(),
                authors: z.string(),
              })
            ),
          },
        },
      },
      async (_req, _res) => {
        const books = await libraryServices.getAllBooks();
        return books;
      }
    );

    done();
  };
