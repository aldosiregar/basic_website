//javascript sets
/**
 * javascript sets adalah koleksi dari nilai unik
 * 
 * setiap nilai hanya dapat ada satu kali didalam set
 * 
 * nilainya bisa apa saja, baik primitive values ataupun objects
 */
console.log("javascript sets : ");

//cara membuat sets
/**
 * kita dapat membuat javascript sets dengan : 
 *  1. passing arrays ke new Set()
 *  2. membuat empty set dan menggunakan add() untuk menambah nilai
 */

//cara new Set()
/** 
 * pass array ke new Set() constructor
 * */ 
const sets = new Set([10, 5, 3, 1, 7, 3]);
console.log(sets);

/**
 * atau juga membuat set kosong dan menambahkans setnya kemudian
 */
const sets2 = new Set();

sets2.add("a");
sets2.add("b");
sets2.add("c");
console.log(sets2);

/**
 * atau menambahkan nilainya melalui variable
 */
const newValues = "jaka";
sets2.add(newValues);
console.log(sets2);

//the add() method
/**
 * keunggulan dari sets ada di pemilihan nilainya
 * 
 * nilai yang sama persis tidak akan dimasukkan ke dalam sets, 
 * hanya elements pertama saja yang akan dimasukkan 
 */

//listing the elements
/**
 * kita dapat meng-list kan semua set elements (value) dengan for...of loop
 */
for(const x of sets){
    console.log(x);
}

//sets adalah object
//typeoff mengembalikan object
console.log(typeof sets);

//instanceof sets mengembalikan benar
console.log(sets instanceof Set);