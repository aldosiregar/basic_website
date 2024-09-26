//javascript bitwise operation
console.log("javascript bitwise operation : ");

//javascript bitwise operator
/**
 * Operator	    Name	                Description
 * &	        AND	                    Sets each bit to 1 if both bits are 1
 * 
 * |	        OR	                    Sets each bit to 1 if one of two bits is 1
 * 
 * ^	        XOR	                    Sets each bit to 1 if only one of two bits is 1
 * 
 * ~	        NOT	                    Inverts all the bits
 * 
 * <<	        Zero fill left shift	Shifts left by pushing zeros in from the right 
 *                                      and let the leftmost bits fall off
 * 
 * >>	        Signed right shift	    Shifts right by pushing copies of the leftmost bit in 
 *                                      from the left, and let the rightmost bits fall off
 * 
 * >>>	        Zero fill right shift	Shifts right by pushing zeros in from the left, 
 *                                      and let the rightmost bits fall off
 */

//example
/**
 * Operation	Result	    Same as	Result
 * 5 & 1	    1	        0101 & 0001	    0001
 * 
 * 5 | 1	    5	        0101 | 0001	    0101
 * 
 * ~ 5	        10	        ~0101	        1010
 * 
 * 5 << 1	    10	        0101 << 1	    1010
 * 
 * 5 ^ 1	    4	        0101 ^ 0001	    0100
 * 
 * 5 >> 1	    2	        0101 >> 1	    0010
 * 
 * 5 >>> 1	    2	        0101 >>> 1	    0010
 */

//javascript menggunakan 32 bits bitwise operands
/**
 * javascript menyimpan angka sebagai 64 bits floating point number, namun semua operasi
 * bitwise dilakukan pada 32 bits binary numbers
 * 
 * sebelum sebuah bitwise operation dilakukan, javascript mengkonversi numbers menjadi 32
 * bits signed intergers
 * 
 * setelah bitwise operations dilakukan, hasilnya dikonversi kembali ke 64 bits javascript
 * number
 * 
 * note : 
 * contoh-contoh diatas menggunakan 4 bits unsigned binary numbers, karena ini ~5 mengembalikan 10
 * 
 * karena javascript menggunakan 32 bits signed intergers, hasilnya bukanlah 10 melainkan -6
 * 
 * 00000000000000000000000000000101 (5)
 * 
 * 11111111111111111111111111111010 (~5 = -6)
 * 
 * signed intergers menggunakan bagian terkiri bit sebagai tanda negatif
 */

//javascript bitwise AND
/**
 * ketika bitwise AND dilakukan pada pasangan bits, ia akan mengembalikan 1 jika kedua bits adalah 1
 * 
 * One bit example:
 * Operation	    Result
 * 0 & 0	        0
 * 0 & 1	        0
 * 1 & 0	        0
 * 1 & 1	        1
 * 
 * 4 bits example:
 * Operation	    Result
 * 1111 & 0000	    0000
 * 1111 & 0001	    0001
 * 1111 & 0010	    0010
 * 1111 & 0100	    0100
 */
let bitwiseVariable = 5 & 3; //0101 & 0011
console.log(bitwiseVariable); //0001

//javascript bitwise OR
/**
 * ketika bitwise OR dilakukan pada pasangan bit, ia akan mengembalikan 1 jika salah satu dari bit
 * adalah 1
 * 
 * One bit example:
 * Operation	    Result
 * 0 | 0	        0
 * 0 | 1	        1 
 * 1 | 0	        1
 * 1 | 1	        1
 * 
 * 4 bits example:
 * Operation	    Result
 * 1111 | 0000	    1111
 * 1111 | 0001	    1111
 * 1111 | 0010	    1111
 * 1111 | 0100	    1111
 */
bitwiseVariable = 3 | 10;
console.log(bitwiseVariable); //11

//javascript bitwise XOR
/**
 * ketika bitwise XOR dilakukan pada pasangan bit, ia akan mengembalikan 1 jika bitsnya berbeda
 * 
 * One bit example:
 * Operation	    Result
 * 0 ^ 0	        0
 * 0 ^ 1	        1 
 * 1 ^ 0	        1
 * 1 ^ 1	        0 
 * 
 * 4 bits example:
 * Operation	    Result
 * 1111 ^ 0000	    1111
 * 1111 ^ 0001	    1110
 * 1111 ^ 0010	    1101
 * 1111 ^ 0100	    1011
 */
bitwiseVariable = 5 ^ 10;
console.log(bitwiseVariable); //15

//javascript (zero fill) bitwise left shift (<<)
/**
 * ini adalah zero fill left shift, satu atau lebih bits digeser dari kanan, dan bagian terkiri dari bit
 * akan hilang
 * 
 * Decimal	Binary
 * 5	    00000000000000000000000000000101
 * 
 * 5 << 1	00000000000000000000000000001010 (10)
 */
bitwiseVariable = 5 << 1;
console.log(bitwiseVariable);

//javascript (signed preserving) bitwise right shift (>>)
/**
 * ini adalah signed preserving right shift, mengkopi bagian terkiri dari bit dan mendorongnya ke kiri,
 * dan bagian paling kanan akan hilang
 * 
 * Decimal	    Binary
 * -5	        11111111111111111111111111111011
 * 
 * -5 >> 1	    11111111111111111111111111111101 (-3)
 */
bitwiseVariable = -13 >> 1;
console.log(bitwiseVariable); //-7

//javascript (zero fill) right shift (>>>)
/**
 * ini adalah zero fill right shift, satu atau lebih zero bits akan didorong dari kiri, dan bagian
 * paling kanan akan hilang 
 * 
 * Decimal	    Binary
 * 5	        00000000000000000000000000000101
 * 
 * 5 >>> 1	    00000000000000000000000000000010 (2) 
 */
bitwiseVariable = -50 >>> 3;
console.log(bitwiseVariable); //536870905

//converting decimal ke binary
function decToBin(dec){
    return (dec >>> 0).toString(2);
}
console.log(decToBin(15)); //1111

//converting binary to decimal
function binToDec(bin){
    return parseInt(bin, 2).toString(10);
}
console.log(binToDec(10)); //2