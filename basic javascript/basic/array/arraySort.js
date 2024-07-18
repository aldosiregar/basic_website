console.log("array sort : ");

//sorting sebuah array
/**
 * method sort() mengurutkan array secara alphabets
 */
let arraySorts = ["kale", "ands", "zaaa", "porl"];
console.log(arraySorts.sort());

//reverse sebuah array
/**
 * method reverse() mengerutkan array dengan urutan terbalik (tanpa mempedulikan urutan
 * alphabets maupun besarnya)
 */
console.log(arraySorts.reverse());

//javascript array toSorted()
/**
 * method ini ditambahkan pada ES2023 sebagai cara aman untuk mengurutkan array tanpa mengubah array
 * aslinya
 * 
 * perbedaan antara toSorted() dan sort() adalah toSorted() membuat array tanpa mengubah array
 * aslinya, sedangkan sort() langsung mengubah array aslinya
 */
console.log(arraySorts.toSorted());

//javascript array toReversed()
/**
 * method ini juga sama dengan reverse(), dengan tidak mengubah array asli dalam prosesnya
 */
console.log(arraySorts.toReversed());

//numeric sort
/**
 * method sort() hanya mengurutkan nilai sebagai strings
 * 
 * jika method ini mengurutkan element antara "25" dan "100", maka dianggap "25" lebih besar dari "100"
 * karena "2" lebih besar dari "1"
 * 
 * kita dapat memperbaiki ini dengan meletakkan compare function pada argument method sort()
 */
let arraySortsNumber = [10, 5 , 2, 1, 100, 1000];
console.log(arraySortsNumber.sort(function(a,b){ return a - b }));

/**
 * arguments pada compare function diatas, yaitu a dan b disediakan pada method sort()
 */

/**
 * trick ini juga dapat dilakukan dengan sorting descending
 */
console.log(arraySortsNumber.sort(function(a, b){ return b - a }));

//compare function
/**
 * tujuan dari compare function adalah untuk menentukan urutan order alternatif
 * 
 * compare function harus mengembalikan negatif, nol, atau nilai positif, tergantung
 * dari argumentnya
 * 
 * function (a, b) { return a - b}
 * 
 * ketika method sort() membandingkan 2 nilai, nilainya akan di-pass ke compare function, dan mengurutkan
 * nilai berdasarkan hasil yang dikembalikan (negatif, nol, positif)
 * 
 * jika negatif, a diurutkan sebelum b
 * 
 * jika positif, b diurutkan sebelum a
 * 
 * jika hasilnya 0, maka tidak akan terjadi perubahan urutan di kedua nilai tersebut
 */

//sort array dengan urutan random
/**
 * menggunakan method sort sebelumnya, kita dapat membuat compare function yang mengembalikan hasil
 * random dari sortingnya
 */
console.log(arraySortsNumber.sort(function(){return 0.5 - Math.random()}));

//fisher yates method
/**
 * method sort() diatas belum cukup akurat, karena beberapa angka akan lebih diinginkan dibandingkan
 * angka lain
 * 
 * ada salah satu metode sorting yang cukup terkenal yang disebut fisher yates shuffle, yang dikenalkan
 * di data science pada tahun 1938
 * 
 * jika ditranslate ke javascript, maka metodenya kira-kira seperti ini
 */
for(let i = arraySortsNumber.length - 1; i > 0; i--){
    let j = Math.floor(math.random() * (i + 1));
    let k = arraySortsNumber[i];
    arraySortsNumber[i] = arraySortsNumber[j];
    arraySortsNumber[j] = k;
}
console.log(arraySortsNumber);