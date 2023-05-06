import { getBalance } from "../src/async";
import { sumWithCallback } from "../src/sum";

test("mock function", () => {
  const callback = jest.fn();

  sumWithCallback([1, 1, 1], callback);
  sumWithCallback([1, 1, 1, 1], callback);

  console.log(callback.mock.calls); // output : [ [ 3 ], [ 4 ] ]

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(3);
  expect(callback.mock.calls[1][0]).toBe(4);
});

test("mock function with return value", () => {
  const callback = jest.fn();

  callback.mockReturnValueOnce(3);
  callback.mockReturnValueOnce(4);

  expect(sumWithCallback([1, 1, 1], callback)).toBe(3);
  expect(sumWithCallback([1, 1, 1, 1], callback)).toBe(4);

  console.log(callback.mock.results);

  expect(callback.mock.results[0].value).toBe(3);
  expect(callback.mock.results[1].value).toBe(4);
});

test("mock function with implementation logic", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(sumWithCallback([1, 1, 1], callback)).toBe(6);
  expect(sumWithCallback([1, 1, 1, 1], callback)).toBe(8);

  expect(callback.mock.results[0].value).toBe(6);
  expect(callback.mock.results[1].value).toBe(8);
});

test("mock async function", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);

  await expect(getBalance("febri", from)).resolves.toEqual({
    name: "febri",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected/failure", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error("Ups"));
  await getBalance("febri", from);
});

test("v2 mock async function rejected/failure", async () => {
  const from = jest.fn().mockRejectedValueOnce("Rejected");

  await expect(getBalance("febri", from)).rejects.toBe("Rejected");
});
