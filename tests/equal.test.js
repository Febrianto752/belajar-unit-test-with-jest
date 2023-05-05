test("toBe and toEqual matcher", () => {
  expect("hello world").toBe("hello world"); // case sensitive
  expect(2 + 2).toBe(4);
  expect({ name: "febri" }).toEqual({ name: "febri" });
});
