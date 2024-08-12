//javascript maps
/**
 * map berisi key-value pair dimana keys-nya dapat berupa berbagai datatype apapun
 * 
 * sebuah map mengingat urutan dari urutan penambahan keynya
 */
console.log("javascript map : ")

//cara membuat map
/**
 * kita dapat membuat map dengan 
 *  1. passing array ke new Map()
 *  2. membuat map dan menggunakan Map.set()
 */

//cara new Map()
/**
 * kita dapat membuat map baru dengan passing array ke dalam constructor new Map()
 */
const newMap = new Map([
    ["carName" , "kensworth"],
    ["tank", 1500],
    ["maxSpeed", 80]
]);
console.log(newMap);

//cara set()
/**
 * kita dapat menambahkan element baru pada map dengan method set()
 */
const newSetMap = new Map();
newSetMap.set("employee1", "jaka");
newSetMap.set("employee2", "mark");
console.log(newSetMap);

/**
 * method set() juga dapat mengubah element yang sudah ada
 */
newSetMap.set(["employee1", "kala"]);

//get() method
/**
 * method ini dapat mengambil nilai dari key pada sebuah map
 */
console.log(newMap.get("carName"));

//maps adalah object
/**
 * menggunakan keyword typeof akan mengembalikan object
 */
console.log(typeof newMap);

/**
 * instance of map bernilai true
 */
console.log(newMap instanceof Map);

//javascript object vs map
/**
 * perbedaan antara object javascript dan map antara lain : 
 * 
 * Object	                            Map
 * Not directly iterable	            Directly iterable
 * 
 * Do not have a size property	        Have a size property
 * 
 * Keys must be Strings (or Symbols)	Keys can be any datatype
 * 
 * Keys are not well ordered	        Keys are ordered by insertion
 * 
 * Have default keys	                Do not have default keys
 */