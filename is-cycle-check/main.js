function isCycleCheck(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    a.length === 0 ||
    b.length === 0 ||
    a.length !== b.length
  )
    return false;

  const circleMap = new Map();

  for (let i = 0; i < a.length; i++) {
    if (circleMap.has(a[i]) || a[i] === b[i]) {
      return false;
    }
    circleMap.set(a[i], b[i]);
  }

  const visited = new Set();
  let current = a[0];
  let count = 0;

  while (count < a.length) {
    visited.add(current);
    current = circleMap.get(current);
    count++;

    if (!current || (visited.has(current) && count < a.length)) {
      return false;
    }
  }

  return current === a[0] && count === a.length;
}

console.log(isCycleCheck([3, 1, 2], [2, 3, 1]));
console.log(isCycleCheck([1, 2, 1], [2, 3, 3]));
console.log(isCycleCheck([1, 2, 3, 4], [2, 1, 4, 4]));
console.log(isCycleCheck([1, 2, 3, 4], [2, 1, 4, 3]));
console.log(isCycleCheck([1, 2, 2, 3, 3], [2, 3, 3, 4, 5]));
