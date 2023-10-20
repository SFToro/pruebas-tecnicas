import { RouteContext } from "$fresh/server.ts";
import ProductDetail from "@src/components/ProductDetail.tsx";
import ps from "@src/services/products.ts";
import { Partial } from "$fresh/runtime.ts";
import { Product } from "@src/db/product.d.ts";
import ProductList from "@src/components/ProductList.tsx";

export default async function Page(req: Request, _ctx: RouteContext) {
  const id = _ctx.params.id ?? "";
  const nId = Number(id);
  let product: Product | undefined;
  if (!isNaN(nId)) {
    product = await ps.getProductById(nId);
  }

  return (
    <Partial name="main">
      {product && <ProductDetail product={product}></ProductDetail>}
    </Partial>
  );
}
