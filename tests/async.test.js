import { fetchData } from "../src/async";

describe("test asynchronous", () => {
  it("promise test", async () => {
    return fetchData(false)
      .then((data) => {
        expect(data).toBe("berhasil");
      })
      .catch((data) => {
        expect(data).toBe("gagal");
      });
  });

  it("promise with async await", async () => {
    try {
      const data = await fetchData(true);
      expect(data).toBe("berhasil");
    } catch (error) {
      expect(error).toBe("gagal");
    }
  });
});

describe("test async matchers", () => {
  it("should be resolve", async () => {
    await expect(fetchData(true)).resolves.toBe("berhasil");
    await expect(fetchData(false)).rejects.toBe("gagal");
  });
});
