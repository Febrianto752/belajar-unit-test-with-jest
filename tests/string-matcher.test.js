test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/); // di sarankan menggunakan regex daripada string kutip
});

test("equal to hello world", () => {
  expect("hello world").toBe("hello world");
  expect("hello world").toEqual("hello world");
});
