function addAllNew(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
    console.log(result);
  }
  return result;
}

addAllNew(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
