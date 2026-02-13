export function linear_search(list, target) {
  for (let index = 0; index < list.length; index++) {
    if (list[index] === target) {
      return index;
    }
  }

  return -1;
}
