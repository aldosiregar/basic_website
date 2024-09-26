console.log("javascript class : ");

//javascript class
/**
 * ECMAScript 2015, atau dikenal juga dengan ES6, mengenalkan javascript class
 * 
 * javascript class adalah template untuk javascript object
 */

//javascript class syntax
/**
 * gunakan keyword class untuk membuat class
 * 
 * selalu tambahkan method bernama constructor
 * 
 * syntax : 
 * class className{
 * constructor() {...}
 * }
 */
//example
class trucks{
    constructor(name, tank, maxSpeed){
        this.name = name;
        this.tank = tank;
        this.maxSpeed = maxSpeed;
    }

    get trucksName(){
        return this.name;
    }

    get trucksTank(){
        return this.tank;
    }

    get trucksMaxSpeed() {
        return this.maxSpeed;
    }
}

/**
 * contoh diatas membuat sebuah class bernama trucks
 * 
 * class memiliki 3 initial properties : name, tank, maxSpeed
 * 
 * note :
 * javascript class bukanlah object
 * 
 * ini adalah template untuk javascript object
 */

//menggunakan class 
/**
 * ketika kita menggunakan class, kita dapat menggunakan class untuk membuat object
 */
const kensworth = new trucks("kensworth", 1000, 80);
const volvo = new trucks("volvo", 2000, 90);

/**
 * contoh diatas menggunakan truck class untuk membuat 2 object truck
 * 
 * note : 
 * constructor method dipanggil secara otomatis ketika sebuah object baru dibuat
 */

//constructor method
/**
 * constructor method adalah special method :
 * 
 *  1. dia harus memiliki name "constructor"
 *  2. dia akan tereksekusi secara otomatis ketika object baru dibuat
 *  3. dia digunakan untuk menginisiasi object properties
 * 
 * jika kita tidak mendefinisikan constructor method, javascript akan menambahkan constructor
 * method kosong
 */

//class method
/**
 * class method dibuat dengan syntax yang sama dengan object method
 * 
 * gunakan keyword class untuk membuat class
 * 
 * dan tambahkan constructor() method
 * 
 * lalu tambahkan beberapa method
 * 
 * syntax : 
 * class className{
 *  constructor() {...}
 *  method_1() {...}
 *  method_2() {...}
 *  method_3() {...}
 * }
 */
//example
class trucksPrice{
    constructor(name, tank, maxSpeed, releaseYear){
        this.name = name;
        this.tank = tank;
        this.maxSpeed = maxSpeed;
        this.releaseYear = releaseYear;
        this.initialPrice = 130000;
    }

    price(){
        const now = new Date();
        let years = now.getFullYear() - this.releaseYear;
        return this.initialPrice + this.tank * 100 + this.maxSpeed * 10 - years * 1000;
    }

    estimatedPrice(yearsToCome){
        return this.initialPrice + this.tank * 100 + this.maxSpeed * 10 - (this.releaseYear + yearsToCome - this.releaseYear) * 1000;
    }
}

const kensworthPrice = new trucksPrice("kensworth", 80, 90, 2000);

console.log(kensworthPrice.price());

console.log(kensworthPrice.estimatedPrice(40));