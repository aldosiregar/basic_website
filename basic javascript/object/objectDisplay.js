//bagaimana cara menampilkan object
/**
 * menampilkan object javascript akan memberikan output [object Object]
 * 
 * note: 
 * untuk contoh akan menggunakan object dari file objectMethod yang telah dibuat
 * barupa object examplePerson
 */
document.getElementById("contohDisplayObject").innerHTML = examplePerson;

/**
 * solusi dalam menampilkan javascript object antara lain
 *  1. menampilkan property object berdasarkan nama
 *  2. menampilkan property object menggunakan loop
 *  3. menampilkan property object menggunakan Object.values()
 *  4. menampilkan property object menggunakan Object.stringify()
 */

//menampilkan property object sebagai string
/**
 * property object dapat ditampilkan sebagai string
 */
document.getElementById("displayObjectAsString").innerHTML = 
examplePerson.named + " " + examplePerson.job;

//menampikan property object melalui loop
/**
 * property object juga dapat ditampilkan dengan memanfaatkan loop
 * 
 * note :
 * untuk menampilkan properties dalam loop, gunakan examplePerson[x]
 * 
 * tidak bisa dengan examplePerson.x, karena x merupakan loop variable
 */
for(x in examplePerson){
    if(typeof examplePerson[x] == "function"){
        document.getElementById("displayObjectInLoop").innerHTML += "<p>" + examplePerson[x]() + "</p>";
        continue;
    }
    document.getElementById("displayObjectInLoop").innerHTML = examplePerson[x];
}

//menggunakan Object.values()
/**
 * Object.values() membuat sebuah array dari nilai properties
 */
const valuesObject = Object.values(examplePerson);
document.getElementById("displayObjectWithValuesFunction").innerHTML = valuesObject;

//menggunakan Object.entries()
/**
 * Object.entries() memudahkan kita dalam melakukan loop pada property objects
 */
const entriesObject = Object.entries(examplePerson);
for(let [property, values] of entriesObject){
    document.getElementById("displayObjectWithEntriesFunction").innerHTML += 
    "<p>" + property + " = " + values + "</p>";
}

//menggunakan JSON.stringify()
/**
 * object javascript dapat dikonversi menjadi string dengan method JSON.stringify()
 * 
 * JSON.stringify() sudah termasuk dalam javascript dan didukung oleh sebagian besar browser 
 */
const stringifyObject = JSON.stringify(examplePerson);
document.getElementById("displayObjectWithStringifyFunction").innerHTML = stringifyObject;