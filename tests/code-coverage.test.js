import { sayHello } from "../vendor/printHello";

it("should be equal 'Hello febri'", () => {
  expect(sayHello("febri")).toBe("Hello febri");
});
