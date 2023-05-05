import { sayHello } from "../src/utils";

test.failing("sayHello function should return error", () => {
  sayHello();
});

test("sayHello error matchers", () => {
  expect(() => sayHello()).toThrow();
});
