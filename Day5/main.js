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
// Xóa element lần cuối vả trả về phần tử đã xóa 
console.log(languages.shift())