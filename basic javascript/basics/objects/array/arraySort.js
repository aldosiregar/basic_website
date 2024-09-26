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
    let j = Math.floor(Math.random() * (i + 1));
    let k = arraySortsNumber[i];
    arraySortsNumber[i] = arraySortsNumber[j];
    arraySortsNumber[j] = k;
}
console.log(arraySortsNumber);

//find the lowest (or highest) array value
/**
 * tidak ada built-in function untuk menemukan nilai tertinggi atau terendah dalam array
 * 
 * untuk menemukan nilai terendah atau tertinggi dalam array, kita memiliki 3 opsi
 *  1. sort array dan pilih element pertama atau yang terakhir
 *  2. menggunakan Math.min() atau Math.max()
 *  3. membuat function nya sendiri
 */

//menemukan max or min value dengan sort
/**
 * cukup dengan melakukan sort pada array dan pilih element paling awal dan paling akhir
 */
arraySortsNumber.sort();
console.log([arraySortsNumber[0], arraySortsNumber[arraySortsNumber.length - 1]]);
/**
 * metode ini mesangat tidak efisien jika kita hanya ingin mencari nilai terbesar dan terkecil
 */

//menggunakan method Math
/**
 * kita juga bisa menggunakan method max atau min dan Math,
 * dengan tambahan apply() pada akhir methodnya
 */
function findMaxArrays(array){
    return Math.max.apply(null, array);
}

function findMinArrays(array){
    return Math.min.apply(null, array);
}

/**
 * method apply diatas sama dengan Math.max([1,2,3]);
 */

console.log(findMaxArrays(arraySortsNumber));
console.log(findMinArrays(arraySortsNumber));

//javascript array minimum method
/**
 * tidak ada built-in function untuk mencari nilai terkecil dan terbesar dalam array
 * 
 * code tercepat untuk mencari nilai terendah adalah dengan mencari nilai terendah
 * menggunakan home made function
 */
function homeMadeMinArrays(arrays){
    let length = arrays.length;
    let min = Infinity;
    while(length--){
        if(arrays[length] < min){
            min = arrays[length];
        }
    }
    return min;
}

console.log(homeMadeMinArrays(arraySortsNumber));

//javascript array maximum method
/**
 * sama dengan fungsi minimum sebelumnya, tetapi tujuan function ini untuk mencari 
 * nilai terbesar dalam sebuah array
 */
function homeMadeMaxArrays(arrays){
    let length = arrays.length;
    let max = -Infinity;
    while(length--){
        if(arrays[length] > max){
            max = arrays[length];
        }
    }
    return max;
}

console.log(homeMadeMaxArrays(arraySortsNumber));

//sorting object arrays
/**
 * javascript arrays biasanya berisi object
 */
const employeeData = [
    {employeeName : "jake", age : 23},
    {employeeName : "john", age : 40},
    {employeeName : "jane", age : 31}
]

/**
 * bahkan jika object memiliki properties yang berbeda tipe data, method sort() dapat digunakan untuk
 * mengurutkan arrays
 * 
 * solusinya adalah dengan menulis compare function dengan membandingkan nilai properties nya
 */
console.log(employeeData.sort(function (a, b){ a.age - b.age }));

/**
 * jika kita ingin mengurutkannya berdasarkan stringnya, maka caranya sedikit lebih rumit
 */
console.log(employeeData.sort(
    function (a, b){
        let x = a.employeeName.toLowerCase();
        let y = b.employeeName.toLowerCase();
        if(x < y) { return -1; }
        if(x > y) { return 1; }
        return 0;
    }
));

//stable array sort()
/**
 * ES2019 merevisi method array sort()
 * 
 * sebelum 2019, spesifikasi memperbolehkan kita untuk menggunakan algoritma pengurutan 
 * yang tidak stabil seperti QuickSort
 * 
 * setelah ES2019, browser harus menggunakan stable sorting algorithm
 * 
 * ketika mengurutkan element berdasarkan value, elements harus tetap menjaga posisi relative 
 * mereka dengan element lain yang memiliki nilai yang sama
 */
const myArr = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 }
];

/**
 * dalam contoh diatas, ketika melakukan sorting berdasarkan nilai price, hasil dari sortingnya
 * akan tetap menjadikan posisi name sama, walau nilai pricenya sama
 */
console.log(myArr.sort(
    function (a, b){
        return a.price - b.price;
    }
));