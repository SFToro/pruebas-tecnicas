import { MiddlewareHandlerContext } from "$fresh/server.ts";
import productServices from "@src/services/products.ts";
export interface State {
  store: typeof productServices;
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  ctx.state.store = productServices;
  const resp = await ctx.next();
  return resp;
}
