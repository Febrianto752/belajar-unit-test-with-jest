import { sum } from "../src/sum";

// it("should result sum([1,1,1]) equal to 3", () => {
//   expect(sum([1, 1, 1])).toEqual(3);
// });
// it("should result sum([1,1,1,1]) equal to 4", () => {
//   expect(sum([1, 1, 1, 1])).toEqual(4);
// });

const table = [
  [[1, 1, 1], 3],
  [[1, 1, 1, 1], 4],
];

// jika isi table banyak maka parameter juga akan bertambah, maka dari itu di sarankan isi table berupa object
it.each(table)("should result sum(%s) equal %i", (numbers, expected) => {
  expect(sum(numbers)).toEqual(expected);
});

const table2 = [
  { numbers: [1, 1, 1], expected: 3 },
  { numbers: [1, 1, 1, 1], expected: 4 },
];

it.each(table2)(
  "v2 should result sum($numbers) equal $expected",
  ({ numbers, expected }) => {
    expect(sum(numbers)).toEqual(expected);
  }
);
