// Alter notication sifatitida ishlaydi
// alert("kutib turing")

// let ism = "ali"
// let familya = "InamJanov"
// let yoshi = "24"
// let maktab = "48"
// let sinf = "9"
// let email = "djsjklj@gmail.com"
// let number = "+998 98 789 68 90"

// console.log(ism)
// console.log(familya)
// console.log(yoshi)
// console.log(yoshi)
// console.log(maktab)
// console.log(sinfw)
// console.log(email)
// console.log(number)

// malumotturi

// Number = Raqamlar u/n 111
// String = Sozlar u/n ""
// Boling = True or False
// undifind = Qiymatga ega emas malumot
// null = Bosh qiymat ega bolgan malumot
// Simbol = yagona ozgarmas (unique) malumot turlari
// Bigint = katta qiymat ega bogan sonlarni ishlatiladi 

// let number = 77
// console.log(number)

// let soz = 'erer'
// console.log(soz)

// let boling = false
// console.log(boling)

// let undifind
// console.log(undifind)

// let nul = null
// console.log(nul)

// let simb = Symbol("1")
// console.log(simb)

// let kattason = BigInt(6667767533424)
// console.log(kattason)

// console.log(typeof soz)
// conts ozgarmas malumotlarni ishlatamiz
// const id = 'A11';
// id = 'A14'
// console.log(id);

// //var let bilan birhil
// var ism = 'Jasur'
// ism = 'Firdavs'
// console.log(ism)

// type conversetion bu string formatlarini number formatiga otqazish
// const age = '24'
// const amount = '153.000'
// console.log(Number(age))
// console.log(parseFloat(age))
// console.log(parseInt(amount))
// console.log(amount)

// number formatdagi malumotni string olish
// const yil = 2024;
// console.log(yil)
// console.log(String(yil))

// Auto comvertion St
// console.log("50" - "30" +5);

// folsy qiymatlar
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));


// console.log(Boolean('Firdav'));
// console.log(Boolean(23));
// console.log(Boolean('0'));
// console.log(Boolean(true));


// function nomi(son1 , son2 , son3 ){
//     return son1 + son2 / son3;
// }
// console.log(nomi(10, 40 , 2));


// function funksiya_nomi(son1 , son2){
//     console.log("iwladi")
//     return son1 + son2;
// }
// console.log(funksiya_nomi(10, 40));

// function decloration
// function kvadrad1(son){
//     return son * son;
// }
// console.log(kvadrad1(5));

// //fuunction experssion
// const kvadrat2 =  function(son){
//     return son * son;
// }
// console.log(kvadrat2(4));
// //arrow function
// const kvadrat3 = (son) => {
//     return son * son;
// }
// console.log(kvadrat3(5))

// juft sonlarni toq sonlarni topish funcsiyasi
// function declaration
// juft_toq_son(333);
// function juft_toq_son(number){
//     if (number %  2 === 0){
//         console.log(`${number} bu son juft;`);
//     } else{
//         console.log(`${number} bu son toq`);
//     }
// }
// //expressions
// const juft_toq_son2 = function (number){
//     if (number % 2 === 0){
//         console.log(`${number} bu son juft`);
//         } else{
//             console.log(`${number} bu son toq`);
//         }
// }
// juft_toq_son2(22)

// //funcsion arrow
// const juft_toq_son3 = number =>{
//     if (number % 2 === 0){
//         console.log(`${number} bu son juft`);
// } else {
//     console.log(`${number} bu son toq`)
// }
// }
// juft_toq_son3(11)

// ikkita songa eng kottasini chiqaarish
// funcsiya daclartion
// function eng_katta_son (number1, number2){
//     if (number1 >= number2){
//         return number1;
//     }
//     return number2
// }
// console.log(eng_katta_son(112,415))

// //funcsiya experssion
// const eng_katta_son2 = function (number1, number2){
//     if (number1 >= number2){
//         return number1;
//     }
//     return number2
// }
// console.log(eng_katta_son2(21,5))

// // Berilgan sonni teskari songa aylan tirish
// // function delartion
// function teskarison (number){
//     const numberstr = String(number);
//     const reverseStr = numberstr.split("").reverse().join('');
//     return Number(reverseStr);
// }
// console.log(teskarison(tekarison))

// //funuksiya experssion
// const teskarison2 = function (number){
//     const numberstr = String(number);
//     const reverseStr = numberstr.split("").reverse().join('');
//     return Number (reverseStr)
// }
// console.log(teskarison2(15342))

// //funksiya arrow
// const teskarison3 = number =>{
//     const nmberstr = String(number);
//     const reverseStr = numberstr.split("").reverse().join('');
//     return Number(reverseStr)
// }
// console.log(teskarison3(153264))

// Array
// const arrayfunk = [1,'Miramol', false, 112.32, null, '34']
// console.log(arrayfunk)


// ozgartirish
// const arrayfunk1 = [5,'Mirkamol', false, 112.34, null]
// arrayfunk1[2] = true
// console.log(arrayfunk1  )


// push arowni oxiriga qoshadi
// const arrayfunk2 = [5,'Mirkamol', false, 112.32, null]
// arrayfunk2.push('ipone')
// console.log(arrayfunk2)

// unshift boshiga qoshadi
// const arrayfunk3 = [5,'Mirkamol', false, 112.34, null]
// arrayfunk3.unshift('ipone')
// console.log(arrayfunk3)


// pop yordamida oxiridan ochirib beradi
// const laguage = ['go', 'python','java ','c#']
// console.log(laguage);
// const deletelaguage =laguage.pop('');
// console.log(laguage);
// console.log(deletelaguage)

// shift oldingi ochirib tahlamaydi
// const arrayfunk = [5,'Mirkamol', false, 112.34, null]
// arrayfunk.shift()
// console.log(arrayfunk)

// contact arraylarni birlshtirish
// const array1 = [1,3]
// const array2 = [5,2, 6]

// const result = array1.concat(array2)

// console.log(result)

// find arrayni ichidan ochirib chiqarib beradi
// const result = [5,2, 6, 1,3,'ali'];

// const finds = (number) => number === 5;
// const foundx = result.find(finds);

// console.log(foundx)


// filter 
// const result = [5,2, 6, 1,3,7,8,11];


// const fintervalue = number => number > 4;
// const filteredvalue = result.filter(fintervalue)
// console.log(filteredvalue);


// map 
// const result = [5,2, 6, 1,3,7,8,11];

// const mapvalue = number => 'son son' + number;
// const mapedvalue = result.map(mapvalue)
// console.log(mapedvalue)


// sort
// const result = [5,2, 6, 1,3,7,8,22];

// result.sort();
// console.log(result);

//object
// const dasturchi = {
//     ism: "Mirzo",
//     yosh: "24"
// }
// console.log(dasturchi.ism)


//kalit sozni uzini chiqarish 
//object ichidagi obkent chiqarish
// const dasturchi = {
//     ism: "Mirzo",
//     yosh: "24",
//     manzil:{
//         mamlakat:'uzbekiston',
//         shahar:'namangan',
//         uy:7,
//         mashina:{
//             rangi:"oq",
//             modeli:"BMW"
//         }
//     }
// }
// console.log(dasturchi.manzil.mashina.modeli)
// const dasturchi = {
//     ism: "Sardor",
//     yosh: "15",
//     manzil:{
//         mamlakat:'uzbekiston',
//         shahar:'namangan',
//         uy:8,
//         oqish:{
//             maktab:"48",
//             sinf:"8",
//             kurs:"It",
//         }
//     }
// }
// console.log(dasturchi.manzil.oqish)


//object icda funcsiya yaratish
// const dasturchi = {
//     ism: "Mirzo",
//     yosh:"24",
//     salom:function(son1 , son2){
//         return son1 + son2
//     }
// }
// console.log(dasturchi.salom(40, 50))


//this kalit sozlarni ishlatamiz
// const dasturchi = {
//     ism: "Mirzo",
//     yosh:"24",
//     salom:function(){
//         console.log("salom! Mening ismim" + this.ism);
//     }
// }
// console.log(dasturchi.salom())


// kalit soz va qiymati

// const dasturchi = {
//     ism: "Mirzo",
//     yosh:"24",
//     kurs: 2
// }
// console.log(Object.keys(dasturchi));
// console.log(Object.values(dasturchi))


// const names = ['Kfc', 'Shahlik','Taba','Osh','Blyash']
// const randoms = Math.floor(Math.random() * names.length);
// console.log(names[randoms]);


//if else
// const number = -2
// if (number > 0){
//     console.log("Berilgan son musbat")
// } else{
//     console.log("Berilgan son manfiy")
// }


// const kurs = 28;
// if (kurs > 18){
//     console.log("insitut oquvchisi")
// } else {
//     console.log("Maktab oquvchi")
//}

//if va else va else if 
// const number = 500;
// if (number < 100){
//     console.log("Redmi olsin")
// } else  if (number < 500){
//     console.log("Samsung olsin")
// }else  if (number < 1000){
//     console.log("Iphone olsin")
// }else {
//     console.log('Mashina olsin')
// }

// const lague = "Uz";
// if (lague === "En"){
//     console.log("Hi")
// } else if (lague === "Uz"){
//     console.log("Salom")
// } else if (lague === "turk"){
//     console.log("Merhaba")
// }

