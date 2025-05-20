import React from "react";
import { ProductResponse } from "@/types/products";
import ProductClientSide from "./ProductClientSide";

const Products = async () => {
  const res = await fetch("https://api.b-e.az/task/special-offer");
  const products: ProductResponse[] = await res.json();

  return <ProductClientSide products={products} />;
};

export default Products;
