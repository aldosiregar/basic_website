//general methods
/**
 * /meng-copy properties dari source object ke target object
 * Object.assign(target, source)
 * 
 * /membuat object dari object yang sudah ada
 * Object.create(object)
 * 
 * /mengembalikan array dari pasangan key/value sebuah object
 * Object.entries(object)
 * 
 * /membuat sebuah object dari sekumpulan keys/values
 * Object.fromEntries()
 * 
 * /mengembalikan sebuah array dari keys sebuah object
 * Object.keys(object)
 * 
 * /mengembalikan sebuah array dari nilai property sebuah object
 * Object.values(object)
 * 
 * /mengelompokkan elements object berdasarkan pada function
 * Object.groupBy(object, callback)
 */
const displayer = document.getElementById("temp");

//javascript Object.assign()
/**
 * method Object.assign() meng-copy properties dari satu atau lebih sumber
 * object ke target object
 */
const person1 = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

//membuat source object
const person2 = {firstname:"jane",lastname:"doe"};

//mengimplementasikan source ke target
let temp = Object.assign(person1, person2); 
//result : age: 50eyecolor: "blue"firstname: "jane"lastname:"doe"

//javascript Object.entries()
/**
 * ECMAScript 2017 menambahkan method Object.entries() ke objects
 * 
 * Object.entries() mengembalikan array dari pasangan key/value dalam
 * sebuah object
 */
let text = Object.entries(person1); //result : firstname,jane,lastname,doe,age,50,eyecolor,blue

/**
 * Object.entries() mempermudah kita untuk menggunakan object di loop
 */
temp = "";
for(let [keys, value] of Object.entries(person1)){
    text += keys + ": " + value + "<br>";
}

/**
 * Object.entries() juga memudahkan kita untuk mengkonversikan
 * objects menjadi maps
 */
const mymaps = new Map(Object.entries(person1));

/**
 * Object.entries() juga mensupport di semua broser modern sejak maret 2017
 */

//javascript Object.fromEntries()
/**
 * method fromEntries() membuat sebuah object dari sekumpulan 
 * pasangan key/value
 */
const keyValuePairs = [
    ["car", "volvo"],
    ["maxDistance", 5000],
    ["fullTank", 300]
];

Object.fromEntries(keyValuePairs);

//javascript Object.values()
/**
 * Object.values() sama dengan Object.entries(), tetapi mengembalikan
 * array satu dimensi dari nilai object
 */
temp = Object.values(person1); //values : jane,doe,50,blue

//javascript Object.groupBy()
/**
 * ES2024 menambahkan method Object.groupBy ke javascript
 * 
 * method Object.groupBy() mengelompokkan element dari object tergantung
 * dari nilai string yang dikembalikan dari callback function
 * 
 * method Object.groupBy() tidak merubah object originalnya
 */
const fruits = [
    {name:"apples", quantity:300},
    {name:"pears", quantity:100},
    {name:"banana", quantity:50},
    {name:"kiwi", quantity:400}
];

//callback function untuk pengelompokkan element
function myCallback({quantity}){
    return quantity > 200 ? "ok" : "low";
}

Object.groupBy(fruits, myCallback);

//Object.groupBy() vs Map.groupBy()
/**
 * perbedaan antara Object.groupBy() dan Map.groupBy adalah : 
 * 
 * Object.groupBy() mengelompokkan elements menjadi javascript object
 * 
 * Map.groupBy() mengelompokkan elements menjadi sebuah object map
 */

//javascript Object.keys()
/**
 * method Object.keys() mengembalikan array dengan keys dari sebuah
 * object
 */
Object.keys(person1); //result : firstname,lastname,age,eyecolor

//javascript for...in loop
/**
 * javascript for...in statement looping melalui properties sebuah object
 * 
 * syntax : 
 * for(let variables in object){
 *  /kode yang akan dieksekusi
 * }
 * 
 * blok kode didalam for...in loop akan dieksekusi sekali untuk setiap 
 * properties
 * 
 * looping ke smua properties dari sebuah object
 */

temp = "";
for(let x in person1){
    temp += person1[x];
}
displayer.innerHTML =  temp; //result : janedoe50blue