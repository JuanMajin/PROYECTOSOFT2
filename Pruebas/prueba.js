function factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
  }

  function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }

  function elevado(x,y){
    return Math.pow(x,y);
  }


  module.exports = {
    factorial,
    addSquares,
    elevado,
};