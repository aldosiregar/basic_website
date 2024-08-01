console.log("array iteration : ")

//javascript array forEach()
/**
 * method forEach() memanggil function (callback function) sekali pada setiap
 * element array
 */
let arrayIteration = [2, 15, 3, 100, 20, 5];
let summingArrays = [];
arrayIteration.forEach(multiplyElements);
console.log(summingArrays);

function multiplyElements(value, index, array){
    summingArrays.push(value * 20);
}

/**
 * function ini akan mengambil 3 arguments
 *  1. item value
 *  2. item index
 *  3. arraynya itu sendiri
 * 
 * kita juga bisa hanya bisa mengambil 1 dari ketiga arguments diatas
 */

//javascript array map()
/**
 * method map() membuat array baru dengan melakukan proses function pada setiap element arrays
 * 
 * method map() tidak mengeksekusi function untuk array tanpa nilai
 * 
 * method map() tidak mengubah bentuk dari array original 
 */
console.log(arrayIteration.map(multiplyElements2));

function multiplyElements2(value, index, array){
    if(index % 2 != 0){
        return value * 2;
    }
    else{
        return value;
    }
}

/**
 * arguments yang diambil oleh fungsi callback juga sama dengan yang diambil pada method forEach()
 */

//javascript array flatMap()
/**
 * method flatMap() ditambahkan pada ES2019 ke javascript
 * 
 * method flatMap() pertama-tama me-mapping semua elements sebuah array baru kemudian membuat array 
 * baru dengan men-flat array tersebut
 */
const newArrayIteration = arrayIteration.flatMap((x) => x * 2);
console.log(newArrayIteration);

//javascript array filter()
/**
 * method ini membuat array baru dengan element yang melewati uji tes
 */
console.log(arrayIteration.filter(filterOverTen));

function filterOverTen(value){
    return value > 10;
}

//javascript array reduce()
/**
 * method reduce() menjalankan function pada setiap element array untuk menghasilkan (menguranginya)
 * menjadi satu nilai
 * 
 * method reduce() bekerja dari kiri ke kanan array
 * 
 * method reduce() tidak mempengaruhi array originalnya 
 */
console.log(arrayIteration.reduce(reduceArrays));

function reduceArrays(total, value, index, array){
    return total + value;
}

/**
 * function callback akan mengambil 4 arguments
 *  1. total (nilai awal atau nilai kembalian dari proses sebelumnya)
 *  2. item value
 *  3. item index
 *  4. arraynya itu sendiri
 */

/**
 * selain itu, method reduce() dapat juga menerima initial value
 */
console.log(arrayIteration.reduce(reduceArrays, 10));

//javascript method reduceRight()
/**
 * method ini bekerja sama dengan reduce(), namun proses mulai method ini berkebalikan dengan reduce()
 * yaitu dari kanan ke kiri
 * 
 * arguments yang diambil method ini juga sama dengan reduce()
 */
console.log(arrayIteration.reduceRight(
    function (total, value, index, array){
        return total - value;
    }
, 1000));

//javascript array every()
/**
 * method ini memeriksa setiap nilai array yang berhasil melalui tes
 * 
 * jika ada satu kriteria yang tidak sesuai dengan syarat, maka akan dikembalikan nilai false
 */
console.log(arrayIteration.every(
    function (value, index, array){
        return value > 20;
    }
));

/**
 * method ini memberikan 3 argument pada fungsi callback
 *  1. item value
 *  2. item index
 *  3. arraynya itu sendiri
 */

//javascript array some()
/**
 * method some() memeriksa apakah ada nilai array yang melewati test
 * 
 * jika ada 1 saja yang melewati tes, maka hasil akan memberikan nilai true
 * 
 * method ini juga memberikan argument yang sama dengan method every()
 */
console.log(arrayIteration.some(
    function (value, item, array){
        return value > 10;
    }
));

//javascript array from()
/**
 * method array.from() mengembalikan array object dari object dengan panjang property atau 
 * iterable lainnya
 */
console.log(Array.from("abcdefghijklmn"));

//javascript array keys()
/**
 * method Array.key() mengembalikan array iterator object dengan keys dari array tersebut
 * 
 * simplenya, method ini akan mengembalikan key dari object tesebut
 */
const arrayIterationForKeysTutorial = ["jake", "jane", "kale", "ale"];

for(let x of arrayIterationForKeysTutorial.keys()){
    console.log(x);
}

//javascript array entries()
/**
 * method ini mengembalikan array iterator object dengan pasangan key/value
 * 
 * method ini tidak mengubah array originalnya
 */
for(let x of arrayIterationForKeysTutorial.entries()){
    console.log(x);
}

//javascript array with() method
/**
 * ES2023 menambahkan method array with() sebagai cara aman untuk mengupdate elements di array tanpa
 * perlu merubah array originalnya 
 */
console.log(arrayIterationForKeysTutorial.with(2, "looole"));

//lavascript method Spread(...)
/**
 * operator ... meluaskan sebuah iterable (seperti array), menjadi element tambahan 
 */
console.log(...arrayIteration, ...arrayIterationForKeysTutorial);