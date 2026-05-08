export function quickSort(arr, animations) {
  doQuickSort(arr, 0, arr.length - 1, animations);
}

function doQuickSort(arr, start, end, animations) {
  if (start >= end) return;
  let pivotIdx = partition(arr, start, end, animations);
  doQuickSort(arr, start, pivotIdx - 1, animations);
  doQuickSort(arr, pivotIdx + 1, end, animations);
}

function partition(arr, start, end, animations) {
  let pivotValue = arr[end];
  let pivotIdx = start;
  for (let i = start; i < end; i++) {
    animations.push({ type: "compare", indices: [i, end] });
    if (arr[i] < pivotValue) {
      animations.push({ type: "swap", indices: [i, pivotIdx] });
      let temp = arr[i];
      arr[i] = arr[pivotIdx];
      arr[pivotIdx] = temp;
      pivotIdx++;
    }
  }
  animations.push({ type: "swap", indices: [pivotIdx, end] });
  let temp = arr[pivotIdx];
  arr[pivotIdx] = arr[end];
  arr[end] = temp;
  return pivotIdx;
}
