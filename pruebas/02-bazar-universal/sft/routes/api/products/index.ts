import { Handlers } from "$fresh/src/server/mod.ts";
import { State } from "@src/routes/_middleware.ts";

export const handler: Handlers<Request, State> = {
  async GET(req, ctx) {
    const myURL = new URL(req.url);
    const params = myURL.searchParams;
    const offset = isNaN(Number(params.get("offset") ?? 0))
      ? 0
      : Number(params.get("offset") ?? 0);
    const limit = isNaN(Number(params.get("limit") ?? 0))
      ? 0
      : Number(params.get("limit") ?? 0);

    const products =
      (await ctx.state.store.getProducts({ offset, limit })).products;
    const searchRes = { products, nextPage: { offset: offset + limit, limit } };
    return new Response(JSON.stringify(searchRes));
  },
};
