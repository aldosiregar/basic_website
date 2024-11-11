//javascript function call()

//method reuse
/**
 * dengan method call(), kita dapat menulisa sebuah method yang dapat 
 * digunakan pada object yang berbeda
 */

//semua function adalah methods
/**
 * dalam javascript semua function adalah object method
 * 
 * jika sebuah function bukanlah sebuah method dari sebuah object javascript,
 * maka ia adalah function dari global object (lihat tutorial invocation
 * sebelumnya)
 * 
 * contoh dibawah ini akan membuat sebuah object dengan 3 properties : 
 * firstname, lastname, fullname
 */
const person = {
    firstName : "aldo",
    lastName : "fausta",
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}

person.fullName(); //result : aldo fausta

/**
 * pada contoh diatas, this merujuk ke object person
 * 
 * this.firstName berarti property firstname dari this
 * 
 * sama seperti : 
 * 
 * this.firstName berarti property firstName dari person 
 * */

//apa itu this
/**
 * dalam javascript, keyword this merujuk pada sebuah object
 * 
 * keyword this merujuk ke object yang berbeda tergantung dari bagaimana
 * dia digunakan 
 * 
 * - dalam sebuah method object, this merujuk ke object itu sendiri
 * 
 * - sendirian, this merujuk ke object global
 * 
 * - pada sebuah function, this merujuk ke object global
 * 
 * - pada sebuah function, dalam mode strict, this adalah undefined
 * 
 * - dalam sebuah event, this merujuk ke element yang menerima event
 * 
 * - methods seperti call(), apply(), dan bind() dapat merujuk this ke
 *   berbagai object apapun
 * 
 * note : 
 * this bukanlah sebuah variable, itu adalah sebuah keyword. Kita tidak bisa
 * mengubah value dari this
 */

//javascript call() method
/**
 * method call() adalah method predefined dari javascript
 * 
 * ia dapat digunakan untuk memanggil (call) sebuah method dengan pemilik
 * object sebagai argumentnya (parameter)
 * 
 * dengan call(), sebuah object dapat menggunakan method yang dimiliki
 * oleh object lain
 * 
 * pada contoh dibawah, method fullName dari personFullName, digunakan pada object
 * person1
 */

const personFullName = {
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "jake",
    lastName : "drake"
};

const person2 = {
    firstName : "loka",
    lastName : "pala"
};

personFullName.fullName.call(person1); //result : jake drake

personFullName.fullName.call(person2); //result : loka pala

//call() method dengan arguments
/**
 * method call() dapat menerima arguments
 */

const personFullData = {
    fullName : function(city, country){
        return this.firstName + " " + this.lastName + ", from : " + 
        city + ", " + country;
    }
}

personFullData.fullName.call(person1, "dallas", "canada"); 
//result : jake drake, from : dallas, canada