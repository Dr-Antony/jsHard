const set = new Set([1,1,2,3,4,5,5,5,7,7,6,7,9,9]);
set.add(10).add(12).add(15).add(32)
console.log(set);


function uniqValues(array) {
    return Array.from(new Set(array))
};

console.log(uniqValues([1,1,1,2,2,3,3,3,3,5,5,7,7,6,8,9,9]))