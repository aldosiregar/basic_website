//javascript classes
/**
 * ECMAScript 2015, atau dikenal juga sebagai ES6, mengenalkan javascript 
 * classes
 * 
 * javascript classes adalah template untuk javascripts objects
 */

//javascript class syntax
/**
 * gunakan keyword class untuk membuat sebuah class
 * 
 * selalu tambahkan method bernama constructor()
 * 
 * syntax : 
 * class Classname{
 *  constructor() { ... }
 * }
 */

//contoh : 
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
/**
 * pada contoh diatas, akan dibuat sebuah class bernama "Car"
 * 
 * class ini memiliki 2 initial properties : "name" dan "year"
 * 
 * tip :
 * sebuah javascript class bukanlah sebuah object
 * 
 * ia adalah sebuah template untuk object javascript
 */

//menggunakan sebuah class
/**
 * ketika kita memiliki sebuah class, kita dapat menggunakan class tersebut
 * untuk membuat objects : 
 */
const myCar1 = new Car("BMW", 2010);
const myCar2 = new Car("ford", 2006);

/**
 * pada contoh diatas Car classes digunakan untuk membuat 2 objects Car
 * 
 * tip :
 * method constructor otomatis dipanggil ketika sebuah object baru dibuat
 */

//constructor method
/**
 * constructor method adalah sebuah method special
 * 
 * - ia harus memiliki nama yang sama yaitu "constructor"
 * 
 * - ia akan dieksekusi secara otomatis ketika sebuah object dibuat
 * 
 * - ia digunakan untuk menginisiasi object properties
 * 
 * jika kita tidak men-define sebuah method constructor, javascript
 * akan menambahkan sebuah method constructor kosong 
 */

//class method
/**
 * class method dibuat dengan syntax yang sama seperti object methods
 * 
 * gunakan keyword class untuk membuat class
 * 
 * selalu tambahkan method constructor
 * 
 * lalu tambahkan berberapa methods
 * 
 * syntax : 
 * class Classname {
 *  constructor() { ... }
 *  method_1() { ... }
 *  method_2() { ... }
 *  method_3() { ... }
 * }
 */

/**
 * buat sebuah class method bernama "age", dan kembalikan umur Car
 */

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar3 = new Car("mercedes", 2010);
console.log("my car is : " + myCar3.age() + " years old");

/**
 * kita dapat mengirim parameters ke method class
 */
class Car2{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year();
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar4 = new Car2("mitsubishi", 2004);
console.log("my car is " + myCar4.age(year) + " years old");

//"use strict"
/** 
 * syntax di class harus ditulis di "strict mode"
 * 
 * kita akan mendapat sebuah error jika kita tidak mengikuti aturan dari
 * "strict mode"
 * 
 * contoh : 
 * pada "strict mode", kita akan mendapat sebuah error jika kita menggunakan
 * variable tanpa mendeklarasikannya
 * 
 * class Car {
 *  constructor(name, year){
 *      this.name = name;
 *      this.year = year;
 *  }
 *  age(){
 *      /date = new Date(); /ini tidak akan bekerja
 *      const date = new Date(); /ini akan bekerja
 *      return date.getFullYear() - this.year;  
 *  }
 * }
*/

