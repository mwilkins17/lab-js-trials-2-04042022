'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(i);
    console.log(items[i])
  };
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    } 
  }
  return result;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a,b) => a - b).slice(0, n);
  sortedItems.reverse();

  console.log(sortedItems);
  
}

// let nums = [1, 10, 4, 2, 5, 6];
// n = 2
// smallest_n_items(nums, n)
// sorted_items = [1, 2, 4, 5, 6, 10]
// sorted_n_items = sorted_items[:2] = [1,2]
// sorted_n_items.reverse() = [2, 1]
// result = [2, 1]
