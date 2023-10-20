import { Handlers } from "$fresh/src/server/mod.ts";
import { State } from "../../_middleware.ts";

export const handler: Handlers<Request, State> = {
  async GET(_req, ctx) {
    const id = Number(ctx.params.productId);
    if (isNaN(id)) {
      const res = {
        message: "Invalid product id",
      };
      return new Response(JSON.stringify(res));
    }
    const product = await ctx.state.store.getProductById(
      id,
    );
    if (!product) {
      const res = {
        message: "Product not found",
      };
      return new Response(JSON.stringify(res));
    }

    return new Response(JSON.stringify(product));
  },
};
