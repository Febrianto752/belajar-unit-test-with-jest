test("not equal expectation", () => {
  expect("hello world").not.toEqual("halo dunia");
  expect(1 + 1).not.toBe(4);
  expect(null).not.toBeTruthy();
});
