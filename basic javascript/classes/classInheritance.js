//javascript class inheritance
/**
 * class inheritance
 * 
 * untuk membuat sebuah pewarisan kelas, gunakan extends keyword
 * 
 * sebuah class dibuat dengan sebuah pewarisan kelas akan mewarisi semua
 * method dari kelas lain
 * 
 * contoh : 
 * buat sebuah kelas bernama "Model" dimana akan mewarisi method dari class
 * "Car"
 */
class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return "i have a " + this.carname;
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ", it is a " + this.model;
    }
}

const myCar = new Model("ford", "mustang");
console.log(myCar.show());

/**
 * method super() mengacu pada parent class
 * 
 * dengan memanggil method super() di constructor method, kita memanggil 
 * parent constructor method dan mendapatkan akses ke parents properties
 * dan methods
 * 
 * tip :
 * inheritance berguna untuk code reusability : menggunakan ulang properties 
 * dan method dari class yang sudah ada ketika kita membuat sebuah class
 * baru
 */

//setters dan getters
/**
 * class juga memungkinkan kita untuk menggunakan getters dan setters
 * 
 * praktik yang baik untuk menggunakan getters dan setters untuk properties 
 * kita, terutama jika kita ingin melakukan sesuatu yang khusus dengan sebuah
 * nilai sebelum mengembalikannya, atau sebelum kita memasukkannya
 * 
 * untuk menambahkan getter dan setter pada sebuah class, gunakan keyword
 * get dan set
 */
class Model2 extends Car{
    constructor(brand, models, years){
        super(brand);
        this.models = models;
        this.years = years;
    }
    
    get brands(){
        return "brand : " + this.carname;
    }
    
    set brands(brand){
        this.carname = brand;
    }
}

const cars = new Model2("BMW", "mercedes", 2010);
console.log(cars.specs);

/**
 * tip :
 * bahkan jika getter adalah sebuah method, kita tidak boleh menggunakan 
 * parentheses ketika kita ingin mengambil nilai property
 * 
 * nama dari getter/setter tidak boleh sama seperti nama property, pada 
 * konteks ini carname
 * 
 * banyak programmer menggunakan sebuah underscore character "_" sebelum nama
 * property untuk memisahkan getter/setter dari property sebenarnya
 */
class Car2{
    constructor(brand){
        this._carname = brand;
    }

    get carname() {
        return this._carname;
    }

    set carname(brands){
        this._carname = brands;
    }
}

const myCar1 = new Car2("ford");
console.log(myCar1.carname);

/**
 * untuk menggunakan setter, gunakan syntax yang sama seperti ketika
 * kita mengatur sebuah nilai property, tanpa parentheses
 */
myCar1.carname = "BMW";
console.log(myCar1.carname);

//hoisting
/**
 * tidak seperti functions, dan berbagai deklarasi javascript lainnya, 
 * deklarasi class tidaklah di hoist
 * 
 * yang artinya kita perlu mendeklarasikan sebuah class sebelum kita 
 * menggunakannya
 * 
 * tip : 
 * untuk deklarasi lain, seperti function, kita TIDAK akan mendapat error
 * ketika kita ingin menggunakannya sebelum ia dideklarasikan, karena ini 
 * adalah default behaviour dari deklarasi javascript adalah hoisting
 * (memindahkan deklarasi ke bagian paling atas)
 */