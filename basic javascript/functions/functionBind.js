//javascript function bind()
//function borrowing
/**
 * dengan method bind(), sebuah object dapat meminjam sebuah method dari
 * object lain
 * 
 * pada contoh dibawah buat 2 objects (person dan member)
 * 
 * object member meminjam method fullname dari object person
 */
const person = {
    firstname : "john",
    lastname : "doe",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
};

const member = {
    firstname : "jane",
    lastname : "doe"
};

let fullnames = person.fullname.bind(member);

//digunakan untuk menjaga this
/**
 * terkadang method bind() digunakan untuk menjaga agar tidak kehilangan this
 * 
 * pada contoh dibawah, object person memilki method display, dalam method 
 * display, this merujuk ke object person
 */
const persons = {
    firstname : "john",
    lastname : "doe",
    display: function (){
        let x = document.getElementById("demo");
        x.innerHTML = this.firstname + " " + this.lastname;
    }
};

persons.display();

/**
 * ketika sebuah function digunakan sebagai callback, this akan hilang
 * 
 * pada contoh dibawah ketika kita mencoba untuk mengdisplay nama setelah 3
 * detik, tapi yang akan muncul malah undefined
 */
setTimeout(persons.display, 3000); //result : undefined undefined

/**
 * method bind akan menyelesaikan masalah ini
 * 
 * pada contoh dibawah, method bind() digunakan untuk meng-bind 
 * persons.display ke persons
 * 
 * contoh dibawah akan menampilkan nama persons setelah 3 detik 
 */
let display = persons.display.bind(member);
setTimeout(display, 3000);