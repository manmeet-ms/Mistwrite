let arr = ['one', 'two', 'three', 'four', 'five'];
let valueofArr;
console.log(arr.length);
console.log(arr.reverse());

let revArr = [];
console.log(arr);
console.log(revArr);
let revarridx=0
for (let i = arr.length; i <= 0; i--) {
    console.log(i);
    valueofArr = arr[i];
    revArr.push(valueofArr);
    
    revarridx=revarridx+1;
    console.log(revarridx);
    
}
// arr.map((idx) => {
//     console.log("printing from index", arr[idx]);
//     // return val
// });
console.log(arr);
console.log(revArr);
