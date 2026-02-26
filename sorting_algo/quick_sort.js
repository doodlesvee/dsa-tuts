export function quick_sort(arr, start_idx = 0, end_idx = arr.length - 1) {
  if (start_idx < end_idx) {
    let piv_idx = pivot_func(arr, start_idx, end_idx);

    quick_sort(arr, start_idx, piv_idx - 1);
    quick_sort(arr, piv_idx + 1, end_idx);
  }

  return arr;
}

function pivot_func(arr, start_idx = 0, end_idx = arr.length + 1) {
  let pivot = arr[start_idx];
  let pivot_idx = start_idx;

  for (let i = start_idx + 1; i <= end_idx; i++) {
    if (pivot > arr[i]) {
      [arr[i], arr[pivot_idx + 1]] = [arr[pivot_idx + 1], arr[i]];
      pivot_idx++;
    }
  }

  [arr[start_idx], arr[pivot_idx]] = [arr[pivot_idx], arr[start_idx]];
  return pivot_idx;
}
