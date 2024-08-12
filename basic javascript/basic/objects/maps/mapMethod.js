console.log("map methods : ")

//new Map() method
/**
 * kita dapat membuat map dengan passing array ke constructor new Map()
 */
let newMapMethod = new Map([
    ["name", "mark"],
    ["salary", 20000],
    ["age", 27]
]);

//Map.get() method
/**
 * method ini dapat digunakan untuk mengambil nilai dari key pada map
 */
console.log(newMapMethod.get("name"));

//Map.set() method
/**
 * method ini dapat digunakan untuk memasukkan element baru pada map
 */
newMapMethod.set("experience", 2);

/**
 * selain itu, method set() dapat merubah element yang sudah ada
 */
newMapMethod.set("name", "jaka");

//Map.size()
/**
 * property size berisi banyak element yang ada pada map tersebut
 */
console.log(newMapMethod);
console.log(newMapMethod.size);

//Map.delete()
/**
 * method ini menghapus sebuah map element
 */
newMapMethod.delete("salary");
console.log(newMapMethod);

//Map.clear()
/**
 * method ini menghapus semua element yang ada pada map
 */
newMapMethod.clear();
console.log(newMapMethod.size);

//Map.has()
/**
 * method ini mengembalikan true jika element tersebut ada pada map
 */
console.log(newMapMethod.has("name"));

//Map.forEach()
/**
 * method ini meng-invokes sebuah callback function untuk setiap pasangan key/value pada map
 */
newMapMethod = new Map([
    ["name", "mark"],
    ["salary", 20000],
    ["age", 27]
]);
console.log(newMapMethod);

let text = "";
newMapMethod.forEach(function (value, key){
    text += "keys : " + key + ", value : " + value + "\n";
});
console.log(text);

//Map.entries()
/**
 * method ini mengembalikan iterator object dengan pasangan [key, value] pada map
 */
text = "";
for(const x of newMapMethod.entries()){
    text += "entries : " + x + "\n";
}
console.log(text);

//Map.keys()
/**
 * method ini mengembalikan iterator object dengan semua keys yang ada pada map
 */
text = "";
for(const x of newMapMethod.keys()){
    text += x + "\n";
}
console.log(text);

//Map.values()
/**
 * method ini mengembalikan iterator object dengan semua nilai yang ada pada map
 */
text = "";
for(const x of newMapMethod.values()){
    text += x + "\n";
}
console.log(text);

//object sebagai keys
/**
 * dapat menjadikan object sebagai keys adalah keunggulan dari map
 */
let employee1 = {name : "jack"};

const employeesExperience = new Map([
    [employee1, 2],
    [employee2 = {name : "jaka", age : 23}, 5]
]);

/**
 * ingat, key untuk map employeesExperience adalah object employee1 bukan "employee1"
 */
console.log(employeesExperience.get(employee2));

//javascript Map.groupBy()
/**
 * ES2024 menambahkan method Map.groupBy() pada javascript
 * 
 * method ini mengelompokkan element pada sebuah object tergantung pada nilai string yang dikembalikan
 * pada callback function
 * 
 * method ini tidak akan merubah object aslinya
 */
const newArrays = [
    {name : "jaka", experience : 3},
    {name : "jake", experience : 2},
    {name : "lane", experience : 1},
    {name : "mace", experience : 2.5},
    {name : "pore", experience : 0.3}
];

console.log(Map.groupBy(newArrays, function({experience}){
    return experience >= 2 ? "seasoned" : "new leaf";
}));

/**
 * ps :
 * ES2024 masih terhitung baru saat tutorial ini dibuat
 * 
 * untuk browser lama akan membutuhkan kode alternatif
 */

//Object.groupBy() vs Map.groupBy()
/**
 * perbedaan antara Object.groupBy() dan Map.groupBy() : 
 * 
 * Object.groupBy() mengelompokkan elements menjadi javascript object
 * 
 * Map.groupBy() mengelompokkan elements menjadi map object
 */