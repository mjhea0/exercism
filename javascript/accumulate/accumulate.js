// function accumulate(arr, fn){
//   var result = [];
//   for (var i = 0; i < arr.length; i++){
//     result.push(fn(arr[i]));
//   }
//   return result;
// }


function accumulate (arr, fn) {
  return arr.map(function(num){
    return fun(num);
  });
}

module.exports = accumulate;
