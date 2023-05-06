import { findAllProducts, findProductById } from "./database";

export class ProductService {
  static getOneProduct(id) {
    return findProductById(id);
  }

  static getAllProducts() {
    return findAllProducts();
  }
}
