// function  findMissing(target,arr){
//     let obj = {}
// for(i=0;i<target;i++){
//    let x = i+1
//    obj[x]=0
// // let x = Object.keys(obj)
// }
// let x = Object.keys(obj)
// let y = Object.values(obj)
// // console.log(x,y)
// for(i=0;i<target;i++){
   
//      let y = arr[i]
//      if(obj[i+1]==obj[y]){
//          obj[y]++
//      }
//    else{
//          obj[y]++
//      }
// }

// let repeat = 0;
// let missing = 0;
// for(i in obj){
//    if(obj[i]>1){
//        repeat =i
//    }else if(obj[i]<=0){
//        missing = i
//    }
// }
// console.log(missing+" "+repeat)


// }



// input = 3
// 5
// 1 2 3 3 4
// 2
// 1 1
// 3
// 1 2 2

// function runProgram(input) {
// // write your code here
// input = input.split("\n")
// let tc = Number(input[0])
// let line = 1
// for(let i=0;i<tc;i++){
//    let target = Number(input[line])
//    line++
//    let arr = input[line].split(" ").map(Number)
//    line++
//   findMissing(target,arr)
// }
// }
// if (process.env.USER === "") {
// runProgram(``);
// } else {
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
// read += input;
// });
// process.stdin.on("end", function () {
// read = read.replace(/\n$/, "");
// read = read.replace(/\n$/, "");
// runProgram(read);
// });
// process.on("SIGINT", function () {
// read = read.replace(/\n$/, "");
// runProgram(read);
// process.exit(0);
// });
// }



// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]
// let N = arr.length-1;
// console.log(N)
// let a =1
// console.log(a)
let R = 4;
let C = 4;
 let mat = [
     [1,2,3,4],
     [1,2,3,4],
     [1,2,3,4],
     [1,2,3,4]
 ]
// A function to rotate a matrix
// mat[][] of size R x C.
// Initially, m = R and n = C
function rotatematrix(m, n, mat)
{
    let row = 0, col = 0;
    let prev, curr;
     
    /*
    row - Starting row index
    m - ending row index
    col - starting column index
    n - ending column index
    i - iterator
    */
    while (row < m && col < n)
    {
        if (row + 1 == m || col + 1 == n)
            break;
   
        // Store the first element of next
        // row, this element will replace
        // first element of current row
        prev = mat[row + 1][col];
   
        // Move elements of first row
        // from the remaining rows
        for(let i = col; i < n; i++)
        {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
   
        // Move elements of last column
        // from the remaining columns
        for(let i = row; i < m; i++)
        {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
   
        // Move elements of last row
        // from the remaining rows
        if (row < m)
        {
            for(let i = n - 1; i >= col; i--)
            {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
   
        // Move elements of first column
        // from the remaining rows
        if (col < n)
        {
            for(let i = m - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
 
    // Print rotated matrix
    for(let i = 0; i < R; i++)
    {
        for(let j = 0; j < C; j++)
            console.log( mat[i][j] + " ");
             
     
            }
}