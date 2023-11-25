// CHUỖI
/**
 * 1.tạo chuỗi
 */
//cach 1:
// var fullName = ('Phuc Thanh la \'sieu nhan\' ');
// console.log(fullName)

//Xem do dai chuoi

// var fullName = ('Phuc Thanh');
// console.log(fullName.length)
//  // do dai khi viet code

//  var fullName = 'Phuc Thanh luon co don'
//  + '1. Phuc Thanh luon co don'
//  + '2. Phuc Thanh luon co don'
//  + '3. Phuc Thanh luon co don'

//  console.log(fullName)

//TEMPLATE STRING ES6

// var firstName = 'Thanh'
// var lastName = 'Phuc'

// console.log(`Toi la: ${firstName} ${lastName}`);





// LÀM VIỆC VỚI CHUỖI
/**
 * 1.Lenhht
 * 2. Find index
 * 3.Cut string
 * 4.Replace
 * 5.Convert to upper case
 * 6 Convert to lower case
 * 7.Trim
 * 8.Split
 * 9.Get a character by index
 */

// var myString = 'Hoc JS tai Home';
//1.LEnght 
// console.log(myString.length)

//2.Find inxed
// console.log(myString.indexOf('JS'))

//3. Cut string
// console.log(myString.slice(4))

//4. Replace
// console.log(myString.replace('JS', 'JavaScript'))
// //Biểu thức chính quy
// console.log(myString.replace(/JS/g, 'JavaScript'))

//5. Upper Case
// console.log(myString.toUpperCase())

//6. Lower case
// console.log(myString.toLowerCase())

//7. Trim loai bỏ khoảng trống thừa trong string 
// console.log(myString.trim())

//8. Split
// var languages1 = 'JavaScript, PHP, Ruby';
// console.log(languages1.split(', '));


// var languages2 = 'JavaScript';
// console.log(languages2.split(''));

//9. Get a character by index
// const myString2 = 'Phuc Thanh';

// console.log(myString2.charAt(1))
// //or
// console.log(myString2[2])




// NUMBER 
var age = 18;
var PI = 3.14;
//1.Tạo giá trị Number
// var age = 18;
// var PI = 3.14;
// console.log(typeof PI )// kiểm tra data type
//2.Làm việc với Number
//To String
// var myString = PI.toString();

// console.log(myString)

//To fixed lam tron

// console.log(PI.toFixed())
