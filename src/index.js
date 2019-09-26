module.exports = function zeros(expression) {
  let zer = 0;
  let work = 1n;
  let multipliers = expression.split("*");      // разбиение строки в массив факториалов
  
  for (let i=0; i < multipliers.length; i++) {
    if (multipliers[i].endsWith('!!')) {
      multipliers[i] = doubleFact(BigInt(multipliers[i].slice(0, multipliers[i].length-2)));
    } else {
      multipliers[i] = fact(BigInt(multipliers[i].slice(0, multipliers[i].length-1)));
    }
  }

  for (let i=0; i < multipliers.length; i++) {    // перемножение факториалов
    work *= multipliers[i];
  }

  while (work % 10n == 0n) {    //подсчет нулей
    work /= 10n;
    zer++;
  }

  return zer;
}

function fact(a) {
if (a === 0n) {
  return 1n;
} else {
    return a * fact(a-1n);
  }
}

function doubleFact(a) {
  if (a <= 0n) {
    return 1n;
  } else {
      return a * doubleFact(a-2n);
  }
}
