export const fetchData = (arg) => {
  return new Promise((resolve, reject) => {
    if (arg === true) {
      return resolve("berhasil");
    }
    return reject("gagal");
  });
};
