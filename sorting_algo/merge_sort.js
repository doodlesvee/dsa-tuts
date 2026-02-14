export function merge_sort(list) {
  if (list.length <= 1) return list;
  const mid = Math.floor(list.length / 2);

  const left = list.slice(0, mid);
  const right = list.slice(mid);

  const sortedLeft = merge_sort(left);
  const sortedRight = merge_sort(right);

  return merge_sorted_arrays(sortedLeft, sortedRight);
}

function merge_sorted_arrays(list1, list2) {
  const sorted_arr = [];
  let left_ptr = 0,
    right_ptr = 0;

  while (left_ptr < list1.length && right_ptr < list2.length) {
    if (list1[left_ptr] < list2[right_ptr]) {
      sorted_arr.push(list1[left_ptr++]);
    } else {
      sorted_arr.push(list2[right_ptr++]);
    }
  }

  while (left_ptr < list1.length) {
    sorted_arr.push(list1[left_ptr++]);
  }

  while (right_ptr < list2.length) {
    sorted_arr.push(list2[right_ptr++]);
  }

  return sorted_arr;
}
