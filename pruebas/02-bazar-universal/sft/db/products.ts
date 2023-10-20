import productsList from "./productList.ts";
import type { Product } from "./product.d.ts";
const { products } = productsList;
class ProductDB {
  #products: Product[];
  constructor(prods: Product[]) {
    this.#products = prods;
  }
  async getProducts({ offset, limit }: { offset: number; limit: number }) {
    return {
      products: products.slice(offset, offset + limit),
      total: products.length,
      offset: offset + limit,
    };
  }

  async getProductById(id: number) {
    return products.find((product) => product.id === id);
  }

  async getProductsByName(name: string) {
    return products.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );
  }
}

export default new ProductDB(products);
