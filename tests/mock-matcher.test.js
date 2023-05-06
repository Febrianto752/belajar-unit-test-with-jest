import { sumWithCallback } from "../src/sum";

test("mock matcher", () => {
  const callback = jest.fn();

  sumWithCallback([1, 1, 1], callback);
  sumWithCallback([20, 10], callback);

  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledWith(3);
  expect(callback).toHaveBeenCalledWith(30);
});
