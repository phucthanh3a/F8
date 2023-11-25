/**
 * //Toán tử ++ --//
 * //Prefix & Postfix 
 *  var a = 6;
 *  TIỀN TỐ
 * //  việc 1: + 1 cho a , a = a + 1 = 7
 * // việc 2 : trả về a sau khi được tính toán +1
 * 
 * console.log(++a)
 * HẬU TỐ
 * // việc 1: ` a copy` , `a copy`=6
 * // việc 2 : trừ 1 của a = a = a -1 => a = 5
 * // việc 3: trả về `a copy`
 * var output = a--;
 * console.log('output: ', output);
 * 
 * console.log('a : ', a);
 * 
 * 
 * // TOÁN TỬ GÁN//
 *  var a = 1;
 * 
 * a = a + 2
 * 
 * console.log(a); =>> a = 3
 * 
 * 
 * //TOÁN TỬ CHUỖI-STRING OPERATOR//
 * 
 * var firstName = 'Thanh';
 * var lastName = 'Phuc';
 * 
 * console.log(firstName + '' + lastName); => Thanh Phuc
 *  TH2:
 *  var name  = ' Thanh ';
 *  name  += ' Phuc'; => tương đướng với name = name + ' Phuc '
 * 
 * console.log(name);
 * 
 * //TOÁN TỬ SO SANH//
 * / == : Bằng
 *   != : Không Bằng
 *   > : Lớn Hơn
 *   < : Bé Hơn
 *   >=: Lớn hơn hoặc bằng 
 *   <=: Bé hơn hoặc bằng
 * 
 * var a = 1; 
 * var b = 2;
 * 
 * if (a == 1) {
 *     console.log (' Dieu Kien Nay dung ');
 * }else {
 * console.log (' Dieu Kien Nay sai ');
 * }
 * =>> Console hiển thị Dieu Kien Nay dung
 * 
 * 
 * // DỮ LIỆU BOOLEAN//
 * var a = 1;
 * var b = 2;
 * var isSuccess = a > b;
 * 
 * console.log(isSuccess); => false
 * 
 * 
 *  //IF - ELSE//
 * 
 *  var isSuccess = 1 > 2;
 * if (isSucces){
 *  console.log('DIEU KIEN DUNG');
 * } else{
 *  console.log('DIEU KIEN SAI');
 * }
 * 
 * //TOÁN TỬ LOGIC//
 * 1. && - And / Cần tất cả điều kiện đúng  
 * 2. || - Or / Chỉ cần 1 vế đúng
 * 3. ! - Not / Đúng => Sai
 * 
 *  var a = 1;
 *  var b = 2;
 *  var c = 3;
 * 
 * if ( a > 0 || b > 0 || c > 0 ){
 *  console.log('DIEU KIEN DUNG')
 * } 
 */