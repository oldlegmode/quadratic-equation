module.exports = solveEquation;
// console.log('solveEquation(\'264 * x^2 + 10632072 * x - 921283858117392\'): ', solveEquation('264 * x^2 + 10632072 * x - 921283858117392'));
function solveEquation(equation) {
  let a = getA(equation);
  let b = getB(equation);
  let c = getC(equation);
  let D = getD(a, b, c);
  // console.log('a: ', a);
  // console.log('b: ', b);
  // console.log('c: ', c);
  // console.log('D: ', D);

  if (D < 0) {
    // console.log(' new Array(0): ',  new Array(0));
    return new Array(0);
  } else if (D === 0) {
    // console.log('new Array(Math.round(-b / (2 * a))): ', new Array().push(Math.round(-b / (2 * a))));
    return [Math.round(-b / (2 * a))];
  } else if (D > 0) {
    // console.log('new Array(getX1(a, b, D), getX2(a, b, D)): ', new Array(getX1(a, b, D), getX2(a, b, D)));
    return new Array(getX1(a, b, D), getX2(a, b, D)).sort();
  }

  function getA(equationString) {
    return (typeof +equationString.split(' ')[0] === 'number')
    ? equationString.split(' ')[0]
    : -equationString.split(' ')[1];
  }
  function getB(equationString) {
    let indexB;
    let b = equationString
      .split(' ')
      .filter((item, i) => {
        if (i > 1 && !isNaN(+item) && !indexB) {
          indexB = i;
          return true;
        }
        return false;
      })[0];
    let symbol = equationString.split(' ')[indexB - 1];
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
