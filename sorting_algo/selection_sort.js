export function selection_sort(list) {
  for (let i = 0; i < list.length; i++) {
    let min_idx = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[min_idx] > list[j]) {
        min_idx = j;
      }
    }

    if (min_idx !== i) [list[i], list[min_idx]] = [list[min_idx], list[i]];
  }
  return list;
}
