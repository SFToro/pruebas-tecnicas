import db from "@src/db/products.ts";

const getProducts = async (
  { offset, limit }: { limit: number; offset: number },
) => {
  return await db.getProducts({ limit, offset });
};

const getProductById = async (id: number) => {
  return await db.getProductById(id);
};

const getProductsByName = async (name: string) => {
  return await db.getProductsByName(name);
};
export default {
  getProductById,
  getProducts,
  getProductsByName,
};
