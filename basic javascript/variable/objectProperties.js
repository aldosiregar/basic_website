/**
 * object adalah kumpulan properties yang tidak berurutan
 * 
 * properties adalah bagian yang penting dalam object javascript
 * 
 * properties dapat diubah, ditambahkan, dihapus, dan beberapa hanya dapat dibaca
 */

//accessing javascript object
/**
 * syntax untuk mengakses property sebuah object adalah sebagai berikut
 * 
 * objectName.property
 * let age = person.age
 * 
 * objectName[property]
 * let age = person["age"]
 * 
 * objectName[expression]
 * let age = person[x]
 */

//menambah property baru
/**
 * kita dapat menambahkan property ke object yang sudah ada cukup dengan memberikan nilainya
 */
let example = {
    name : "aldora",
    job : "Web Dev"
}
example.age = 20;

//delete properties
/**
 * keyword delete digunakan untuk menghapus property dari sebuah object
 */
delete example.age;

/**
 * atau juga bisa dengan 
 * delete example["age"];
 */

//nested objects
/**
 * nilai property sebuah object juga bisa berisi object lain
 */
let anotherExample = {
    name : "aldo",
    job : "it dev",
    skills : {
        first : "frontend webdev",
        second : "backend webdev",
        third : "data science"
    }
}

/**
 * kita dapat mengakses nested property menggunakan dot notation ataupun bracket notation 
 */
console.log(anotherExample.skills.first);

/**
 * selain itu bisa juga
 * 
 * anotherExample.skills["first"];
 * 
 * anotherExample["skills"]["first"];
 */