/**
 * bubble sort implementation
 */

function basicBubbleSort(array: Array<number>): Array<number> {
  array = [...array];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  return array;
}

basicBubbleSort([4, 3, 2, 1]);

/**
 * Optimized bubble sort solution
 */

function bubbleSort(array: Array<number>): Array<number> {
  array = [...array];
  while (true) {
    let swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
        console.log(array);
      }
    }
    if (!swapped) break;
  }

  return array;
}

bubbleSort([4, 3, 2, 1]);