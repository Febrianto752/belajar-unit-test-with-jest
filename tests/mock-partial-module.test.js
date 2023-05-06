import { findAllProducts } from "../src/database";

import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");
  console.log(originalModule);
  /* output : 
  {
      findAllProducts: [Function: findAllProducts],
      findProductById: [Function: findProductById]
  }  
  */

  return {
    __esModule: true,
    ...originalModule,
    findAllProducts: jest.fn(),
  };
});

test.failing("mock module findProductById", () => {
  // jika d mock maka harusnya test ini gagal
  ProductService.getOneProduct();
});

test("mock module findAllProducts", () => {
  const products = [
    { id: 1, name: "sampo" },
    { id: 2, name: "sabun" },
  ];

  findAllProducts.mockReturnValue(products);
  expect(ProductService.getAllProducts()).toEqual(products);
});
