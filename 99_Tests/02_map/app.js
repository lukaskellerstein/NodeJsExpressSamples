// // var materials = [
// //     'Hydrogen',
// //     'Helium',
// //     'Lithium',
// //     'Beryllium'
// //   ];
  
// //   console.log(materials.map(material => material.length));
// //   // expected output: Array [8, 6, 7, 9]


// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }
  

// console.log(foo1())
// console.log(foo2())

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

let aa = `RemoteIo is awesome
Candidates pass interview
best candidates are selected`

function reverseWords(input){
  //TODO: your code will be here

let splitted = input.split(/\n/);

console.log(splitted);

let reversed = [];

for(let row of splitted){

  console.log(row);

  let bbb = row.split("").reverse().join("");
  
  reversed.push(bbb);
}

//let result = reversed.join(' ');

console.log(reversed.join("\r\n"));

}

reverseWords(aa);