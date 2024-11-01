//javascript object protection
/**
 * object protection methods
 * 
 * /mencegah re-assignment
 * const car = {type:"fiat", model:"500", color:"white"};
 * 
 * /mencegah penambahan object properties
 * Object.preventExtentions(object)
 * 
 * /mengembalikan true jika properties dapat ditambahkan ke object
 * Object.isExtensible(object)
 * 
 * /mencegah penambahan dan penghapusan object properties
 * Object.seal(object)
 * 
 * /mengembalikan true jika object dikunci
 * Object.isSealed(object)
 * 
 * /mencegah adanya perubahan ke sebuah object
 * Object.freeze(object)
 * 
 * /mengembalikan true jika object dibekukan
 * Object.isFrozen(object)
 */

//menggunakan const
/**
 * cara paling umum untuk melindungi sebuah object dari adanya perubahan
 * adalah dengan menggunakan keyword const
 * 
 * dengan const kita tidak bisa menginisiasi ulang sebuah object, tetapi
 * kita masih bisa mengubah nilai dari sebuah property, menghapus property
 * atau membuat property baru
 */

//javascript Object.preventExtensions()
/**
 * method Object.preventExtensions() mencegah penambahan properties
 * ke sebuah object
 */
const objectProtectionPerson = {firstname:"jone", lastname:"doe"};

//mencegah extensions
Object.preventExtensions(objectProtectionPerson);

objectProtectionPerson.nationality = 10; 
//property nationality tidak akan ditambahkan ke object

/**
 * karena array juga merupakan sebuah object, array juga dapat
 * dicegah penambahannya
 */
const objectProtectionFruits = ["kiwi", "banana", "manggo"];

Object.preventExtensions(objectProtectionFruits);

//objectProtectionFruits.push("durian"); //terjadi error

//javascript Object.isExtensible()
/**
 * kita dapat menggunakan method Object.isExtensible() untuk memeriksa 
 * apakah sebuah object dapat ditambahkan
 * 
 * Object.isExtensible() akan mengembalikan true jika sebuah object 
 * dapat ditambahkan
 */
console.log(Object.isExtensible(objectProtectionPerson));

//cara yang sama juga bisa dilakukan untuk sebuah arrays

//javascript Object.seal()
/**
 * method Object.seal() mencegah penambahan atau penghapusan
 * properties baru
 * 
 * method Object.seal() membuat properties yang sudah ada jadi
 * tidak bisa dikonfigurasi
 * 
 * method Object.isSealed() dapat digunakan untuk memeriksa
 * apakah sebuah object dikunci
 * 
 * note :
 * method Object.seal() akan membuat penambahan gagal tanpa mengganggu program
 * dan akan memberikan error sebuah TypeError di strict mode
 */

Object.seal(person1);

delete person1.fullName; //fail silently

//dan karena array juga sebuah object, array juga dapat dikunci

//javascript Object.isSealed()
/**
 * method Object.isSealed() dapat digunakan untuk memeriksa jika
 * sebuah object dikunci
 * 
 * Object.isSealed() mengembalikan true jika sebuah object dikunci
 */
console.log(Object.isSealed(person1)); //true

//ini juga dapat dilakukan untuk turunan dari object seperti array

//javascript Object.freeze()
/**
 * method Object.freeze() mencegah adanya perubahan ke sebuah object
 * 
 * object yang dibekukan hanya bisa dibaca
 * 
 * tidak boleh ada perubahan, penambahan, atau penghapusan properties
 * 
 * note : 
 * method Object.freeze() akan gagal tanpa error di non-strict mode dan
 * akan memberikan TypeError di strict mode
 */
const objectProtectionPerson2 = {
    firstname : "john",
    lastname : "locke",
    age : 55
};

Object.freeze(objectProtectionPerson2);

objectProtectionPerson2.age = 30; //akan memberikan silent error

//method ini juga dapat dipakai untuk semua turunan dari object

//javascript Object.isFrozen()
/**
 * method Object.isFrozen() dapat digunakan untuk memeriksa jika sebuah
 * object dibekukan
 * 
 * Object.isFrozen() akan mengembalikan true jika sebuah object dibekukan
 */
console.log(Object.isFrozen(objectProtectionPerson2)); //true

//hal ini juga dapat dilakukan untuk semua turunan dari object, seperti array