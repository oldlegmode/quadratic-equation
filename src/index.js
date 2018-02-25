module.exports = function solveEquation(equation) {
  let a = getA(equation);
  let b = getB(equation);
  let c = getC(equation);
  let D = getD(a, b, c);

  if (D < 0) {
    return new Array(0);
  } else if (D === 0) {
    return [Math.round(-b / (2 * a))];
  } else if (D > 0) {
    return [getX1(a, b, D), getX2(a, b, D)].sort((a, b) => a -b);
  }

  function getA(equationString) {
    return (typeof +equationString.split(' ')[0] === 'number')
    ? equationString.split(' ')[0]
    : -equationString.split(' ')[1];
  }
  function getB(equationString) {
    let equationArray = equationString.split(' ');
    let indexB;
    let b = equationArray
      .filter((item, i) => {
        if (i > 1 && !isNaN(+item) && !indexB) {
          indexB = i;
          return true;
        }
        return false;
      })[0];
    let symbol = equationArray[indexB - 1];

    if (symbol === '-') {
      return -b;
    }
    return b;
  }
  function getC(equationString) {
    let equationArray = equationString.split(' ');
    let c = equationArray.pop();
    let symbol = equationArray.pop();

    if (symbol === '-') {
      return -c;
    }
    return c;
  }
  function getD(a, b, c) {
    return b * b - 4 * a * c;
  }
  function getX1(a, b, D) {
    return Math.round((- b + Math.sqrt(D)) / (2 * a));
  }
  function getX2(a, b, D) {
    return Math.round((- b - Math.sqrt(D)) / (2 * a));
  }
}
