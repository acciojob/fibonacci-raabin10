
function fibonacci(num) {
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let fibList = [0, 1];
    for (let i = 2; i < num; i++) {
      let nextFib = fibList[i - 1] + fibList[i - 2];
      fibList.push(nextFib);
    }
    return fibList[num - 1];
  }
}
}

module.exports = fibonacci;
