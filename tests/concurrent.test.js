import { fetchData } from "../src/async";

it.concurrent("should be resolve ", async () => {
  await expect(fetchData(true)).resolves.toBe("berhasil");
});

it.concurrent("should be reject", async () => {
  await expect(fetchData(false)).rejects.toBe("gagal");
});

// it("should 2 + 2 is equal to 4", () => {
//   expect(2 + 2).toEqual(4);
// });
