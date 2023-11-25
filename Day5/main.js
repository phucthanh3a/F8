//MẢNG
//1.Tạo Mảng
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Dard',
];

console.log(languages)
// DDeer kieemr tra typeOf
// console.log(Array.isArray({}))


//2.Truy Xuất
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Dard',
];

console.log(languages[0])


//3. Làm Việc Với Array
//-To String
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];

console.log(languages.toString())

//-Join
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];

console.log(languages.join(' , '))

//-Pop
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
// Xóa element lần cuối vả trả về phần tử đã xóa 
console.log(languages.pop())

//-Push
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
// Thêm phần thử vào cuối mảng
console.log(languages.push('Dart'))

//-Shift
//Xóa phần tử đầu mảng và trả về phần tử đã xóa
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
console.log(languages.shift())

//-Unshift
//Thêm 1 hoặc nhiều phần tử vào đầ mảng
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
 
console.log(languages.unshift('Thanh','Phuc'))

//Splicing
// có thể cắt hoặc chèn phần tử mới vào mảng
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
//( vị trí đặt con trỏ và đích số muốn xóa) hoặc có thể chèn vào bằng tham số thứ 3
languages.splice(1,0 , 'Dart')
console.log(languages)

//-Concat
//Giúp nối ARRAY
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
var languages2 = [
    'Ruby',
    'Java',
    'RTB',
];
console.log(languages.concat(languages2))

//slicing
//Cắt
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
console.log(languages.slice(1, 2))