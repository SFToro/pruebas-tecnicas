import { RouteContext } from "$fresh/server.ts";
import { Product } from "@src/db/product.d.ts";
import ProductList from "@src/components/ProductList.tsx";
import { Partial } from "$fresh/runtime.ts";
import { State } from "@src/routes/_middleware.ts";
import Pagination from "@src/islands/Pagination.tsx";

export default async function Home(
  req: Request,
  ctx: RouteContext<any, State>,
) {
  const url = new URL(req.url);
  const search = url.searchParams.get("search") || "";
  const limit = Number(url.searchParams.get("limit")) || 5;
  let offset = Number(url.searchParams.get("offset")) || 0;
  let products: Product[] | undefined;
  let total: number | undefined;
  if (search !== "") {
    products = await ctx.state.store.getProductsByName(search);
  } else {
    const storeResponse = await ctx.state.store.getProducts({
      limit,
      offset,
    });
    products = storeResponse.products;
    total = storeResponse.total;
    offset = storeResponse.offset;
  }

  return (
    // <Partial name="main">
    <>
      {search === "" && (
        <h2 class="my-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Featured products
        </h2>
      )}
      <div class="m-4 p-4 border-blue-300 border-2 rounded-xl ">
        {products && <ProductList products={products}></ProductList>}
      </div>
      {total && offset && (
        <Pagination total={total} offset={offset} limit={limit}></Pagination>
      )}
    </>
  );
}
