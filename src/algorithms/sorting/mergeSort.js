export function mergeSort(arr, animations) {
  if (arr.length <= 1) return;
  doMergeSort(arr, 0, arr.length - 1, animations);
}

function doMergeSort(arr, startIdx, endIdx, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  doMergeSort(arr, startIdx, middleIdx, animations);
  doMergeSort(arr, middleIdx + 1, endIdx, animations);
  doMerge(arr, startIdx, middleIdx, endIdx, animations);
}

function doMerge(arr, startIdx, middleIdx, endIdx, animations) {
  const left = arr.slice(startIdx, middleIdx + 1);
  const right = arr.slice(middleIdx + 1, endIdx + 1);
  let i = 0, j = 0, k = startIdx;
  
  while (i < left.length && j < right.length) {
    animations.push({ type: "compare", indices: [startIdx + i, middleIdx + 1 + j] });
    if (left[i] <= right[j]) {
      animations.push({ type: "overwrite", indices: [k, left[i]] });
      arr[k++] = left[i++];
    } else {
      animations.push({ type: "overwrite", indices: [k, right[j]] });
      arr[k++] = right[j++];
    }
  }
  while (i < left.length) {
    animations.push({ type: "compare", indices: [startIdx + i, startIdx + i] });
    animations.push({ type: "overwrite", indices: [k, left[i]] });
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    animations.push({ type: "compare", indices: [middleIdx + 1 + j, middleIdx + 1 + j] });
    animations.push({ type: "overwrite", indices: [k, right[j]] });
    arr[k++] = right[j++];
  }
}