//javascript static methods
/**
 * static class method didefined pada class itu sendiri
 * 
 * kita tidak dapat memanggil sebuah static method pada sebuah
 * object, hanya pada sebuah object class
 */
class Car{
    constructor(name){
        this.name = name;
    }
    static hello(){
        return "Hello!";
    }
}

const myCar = new Car("mustang");

//kita dapat memanggil "hello()" pada class Car
console.log(Car.hello()); //result : "Hello!"

//tetapi tidak pada Car object
//console.log(myCar.hello());
//ini akan menghasilkan error

/**
 * jika kita ingin menggunakan object myCar didalam method static,
 * kita dapat mengirimnya sebagai sebuah parameter
 */
class Car{
    constructor(name){
        this.name = name;
    }
    static hello(x){
        return "Hello " + x.name;
    }
}

const myCar2 = new Car("ford");
console.log(Car.hello(myCar));