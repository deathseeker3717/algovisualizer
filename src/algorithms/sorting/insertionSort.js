export function insertionSort(arr, animations) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      animations.push({ type: "compare", indices: [j - 1, j] });
      if (arr[j] < arr[j - 1]) {
        animations.push({ type: "swap", indices: [j - 1, j] });
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j--;
      } else {
        break;
      }
    }
  }
}

