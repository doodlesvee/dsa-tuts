export function binary_search(list, target) {
  let left = 0;
  let right = list.length - 1;

 while (left <= right) {
    console.log('hello')
    const mid = Math.floor((left + right) / 2);

    if (list[mid] === target) return mid;

    if (target > list[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1
}
