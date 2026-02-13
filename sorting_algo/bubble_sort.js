export function bubble_sort(list) {
  for (let i = list.length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return list;
}
