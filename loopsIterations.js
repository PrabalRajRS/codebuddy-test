// level {1}
// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```

// The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.

const pyramidNumber = (row) => {
  if (row < 3) {
    // alert('Minimum number of rows should be 3')
    console.log('Minimum number of rows should be: 3')
  } else {
    let string = '';
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j < row - i + 1; j++) {
        string += " ";
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        string += k;
      }
      string += "\n";
    }
    console.log(string)

  }
}
pyramidNumber(3)

const pyramidNumbers = (row) => {
  if (row < 3) {
    // alert('Minimum number of rows should be 3')
    console.log('Minimum number of rows should be: 3')
  } else {
    for (var i = 1; i <= row; i++) {
      for (let j = 1; j <= row - i; j++) {
        console.log(" ")
      }
      for (var j = 1; j <= i; j++) {
        console.log(j)
      }
      for (let k = j - 2; k >= 1; k--) {
        console.log(k)
      }
      console.log('\n')
    }
  }
}
pyramidNumbers(3)

// let rows = 5;
// for(let i=1; i<=rows; i++){
//   for(let j = rows; j > i; j--){
//     console.log(" ")
//   }for(let k = 1; k<=i; k++){
//     console.log(k)
//   }for(let l = i-1; l>=1; l--){
//     console.log(l)
//   }
// }

