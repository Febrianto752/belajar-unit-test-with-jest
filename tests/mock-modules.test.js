import { findAllProducts, findProductById } from "../src/database";

import { ProductService } from "../src/product-service";

jest.mock("../src/database.js");

test("mock module findProductById", () => {
  findProductById.mockImplementation((id) => {
    return { id, name: "sampo" };
  });

  const product = ProductService.getOneProduct(1);
  expect(product).toEqual({ id: 1, name: "sampo" });
});

test("mock module findAllProducts", () => {
  const products = [
    { id: 1, name: "sampo" },
    { id: 2, name: "sabun" },
  ];

  findAllProducts.mockReturnValue(products);
  expect(ProductService.getAllProducts()).toEqual(products);
});
