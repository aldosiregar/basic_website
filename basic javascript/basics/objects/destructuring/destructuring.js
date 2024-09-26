console.log("javascript destructuring : ");

//destructuring assignment syntax
/**
 * destructuring assignment syntax membongkar object properties menjadi variable
 * 
 * let {firstname, lastname} = person;
 * 
 * ini juga bisa digunakan untuk membongkar array atau iterables lainnya
 * 
 * let [firstname, lastname] = person;
 * 
 * ps :
 * destructuring pada object menggunakan nama properties sebagai 
 * penanda bagian yang ingin diambil
 * 
 * jika kita menggunakan nama yang tidak ada pada properties object,
 * maka hasilnya akan menjadi undefined
 */

//object destructuring
const destructuringObject = {
    carName : "kensworth",
    tank : 1000,
    maxSpeed : 80
};
var {carName, tank, maxSpeed} = destructuringObject;
console.log(carName + " " + tank + " " + maxSpeed);

/**
 * urutan dari properties tidaklah penting
 */
var {carName, maxSpeed} = destructuringObject;
console.log(carName + " " + maxSpeed);

/**
 * note : 
 * destructuring tidaklah menhancurkan
 * 
 * destructuring tidak akan mengubah original value
 */

//object default values
/**
 * jika terjadi kemungkinan properties yang hilang kita dapat mengatur nilai default
 * pada varibale destructuring
 */
var {carName, tank, manufactures = "US"} = destructuringObject;
console.log(carName + " " + tank + " " + manufactures);

//object property alias
/**
 * sudah disinggung sebelumnya bahwa object yang ingin didestructing harus menggunakan
 * nama properties dari object yang ingin diproses dan tidak boleh menggunakan nama
 * custom
 * 
 * tetapi ada cara yang bisa kita gunakan untuk membuat nama custom pada variable 
 * hasil destructing
 */
let {carName : name, tank : carTank, maxSpeed : possibleSpeed} = destructuringObject;
console.log(name + " " + carTank + " " + possibleSpeed);

//string destructuring
/**
 * salah satu kegunaan destructuring adalah membongkar karakter string
 */
let destructingStrings = "jaka";
let [c1, c2, c3, c4] = destructingStrings;
console.log(c1 + " " + c2 + " " + c3 + " " + c4 + " ");

//array destructuring
/**
 * kita dapat mengambil array variable menjadi variable kita sendiri
 */
const destructingArray = ["aldi", "daka", "kala", "laka"];
let [name1, name2] = destructingArray;
console.log(name1, name2);

//skipping array value
/**
 * kita dapat melewatkan nilai array menggunakan 2 atau lebih comma
 * 
 * ps : 
 * jika kita menggunakan 2 koma, kita akan melewati satu nilai
 * 
 * jika kita menggunakan 3 koma, kita akan melewati dua nilai dan begitu juga seterusnya
 */
let [firstSequenceName ,,, lastSequenceName] = destructingArray;
console.log(firstSequenceName + " " + lastSequenceName); //aldi laka

//array position value
/**
 * kita dapat mengambil nilai dari index yang spesifik pada sebuah array
 * 
 * ps :
 * kita menggunakan object untuk melakukan ini, walau kita bekerja dengan arrays
 */
let {[0]:firstname, [3]:lastname} = destructingArray;
console.log(firstname + " " + lastname);

//rest property
/**
 * kita dapat mengakhiri destructuring syntax dengan property rest
 * 
 * syntax akan menyimpan semua sisa value menjadi array baru
 */
let [named1, named2, ...rest] = destructingArray;
console.log(named1 + " " + named2 + " " + "rest of it : " + rest);

//destructuring maps
const destructingMap = new Map([
    ["carname", "kensworth"],
    ["tank", 1000],
    ["maxspeed", 80]
]);

for(const [key, value] of destructingMap){
    console.log("key : " + key + ", value : " + value);
}

//swapping javascript variables
/**
 * kita dapat menukar nilai dari dua variable menggunakan destructuring assignment
 */
//menukar firstSequenceName dan lastSequenceName
let [swapped1, swapped2] = [lastSequenceName, firstSequenceName];
console.log(swapped1, swapped2);