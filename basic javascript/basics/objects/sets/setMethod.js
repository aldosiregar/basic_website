//javascript set method
console.log("sets methods : ");

//new Set() method
/**
 * pass array ke new Set() constructor
 */
const setMethod = new Set([5, 10, 15]);

//add() method
setMethod.add(13);

//listing set elements
/**
 * kita dapat meng-listing set elements menggunakan for...of loops
 */
for(const x of setMethod){
    console.log(x);
}

//has() method
/**
 * has() method akan mengembalikan true jika nilai tersebut sudah ada dalam set 
 */
console.log(setMethod.has(5));

//forEach() method
/**
 * method ini meng-invoke function pada setiap elements 
 */
let text = "";
setMethod.forEach(function (value){
    text += value;
});
console.log(text);

//values() method
/**
 * method ini mengembalikan iterator object dengan nilai didalam sets
 */
text = "";
for(const x of setMethod.values()){
    text += x;
}
console.log(text);

//keys() method
/**
 * method ini mengembalikan iterator object dengan nilai di dalam set
 * 
 * note : 
 * karena set tidak memiliki keys, maka keys() mengembalikan sama seperti values()
 * 
 * ini membuat set compatible dengan maps
 */
text = "";
for(const x of setMethod.keys()){
    text += x;
}
console.log(text);

//entries() method
/**
 * method ini mengembalikan iterator dengan pasangan [value, value] dari set
 * 
 * note :
 * entries method seharusnya mengembalikan pasangan [keys, values] dari object
 * 
 * set tidak memiliki key, karena itu entries() akan mengembalikan pasangan [values, values]
 * 
 * ini membuat set compatible dengan maps 
 */
for(const [x, y] of setMethod.entries()){
    console.log(x + " " + y);
}