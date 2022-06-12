const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theatreIIX = await promiseTheaterIXX()
  const theatreVGC = await promiseTheaterVGC()

  let numEmosi = 0;
  theatreIIX.map(obj => {
    if (obj.hasil == emosi) {
      numEmosi = numEmosi + 1
    }
  })

  theatreVGC.map(obj => {
    if (obj.hasil == emosi) {
      numEmosi = numEmosi + 1
    }
  })

  return numEmosi;
};
// promiseOutput('tidak marah');

module.exports = {
  promiseOutput,
};
