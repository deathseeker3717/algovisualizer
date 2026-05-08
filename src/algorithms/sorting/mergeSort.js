export function mergeSort(arr, animations) {
  if (arr.length <= 1) return;
  const auxiliaryArray = arr.slice();
  doMergeSort(arr, 0, arr.length - 1, auxiliaryArray, animations);
}

function doMergeSort(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  doMergeSort(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  doMergeSort(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push({ type: "compare", indices: [i, j] });
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push({ type: "overwrite", indices: [k, auxiliaryArray[i]] });
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push({ type: "overwrite", indices: [k, auxiliaryArray[j]] });
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push({ type: "compare", indices: [i, i] });
    animations.push({ type: "overwrite", indices: [k, auxiliaryArray[i]] });
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push({ type: "compare", indices: [j, j] });
    animations.push({ type: "overwrite", indices: [k, auxiliaryArray[j]] });
    mainArray[k++] = auxiliaryArray[j++];
  }
}