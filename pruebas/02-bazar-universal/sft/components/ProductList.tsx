import { Product } from "@src/db/product.d.ts";
import ProductDetail from "@src/components/ProductCard.tsx";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul class="grid gap-4
        grid-cols-[repeat(auto-fill,minmax(325px,1fr))]
      ">
      {products.map((product) => (
        <li class="p-4 max-h-full ">
          <a href={`/products/${product.id}`} class={"max-h-full h-full"}>
            {/* <a href={`/${id}`} f-partial={`/partials/${id}`}> */}
            <ProductDetail product={product}></ProductDetail>
          </a>
        </li>
      ))}
    </ul>
  );
}
