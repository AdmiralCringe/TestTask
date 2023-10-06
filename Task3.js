function findTwoNumbers(arr, target) {
    // крайнее левое значение
    let left = 0;
    // крайнее правое значение
    let right = arr.length - 1;
    
    // будем брать правое значение и подбирать к нему левое для получения суммы
    while (left < right) {
      const sum = arr[left] + arr[right];
      
      if (sum === target) {
        return [left, right]; // проверка пройдена возвращаем индексы
      }
      // если не прошло проверку, меняем изменияем индексы
      if (sum < target) {
        left++;
      }
      else {
        right--;
      }
    }
    return []; // Если не будет комбинации чисел, в результате суммы которой получится значение target, то возвращаем пустой массив
  }
console.log(findTwoNumbers([1, 2, 3, 4, 5, 6], 9)); // вызов функции