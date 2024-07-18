function Convert(){
    let data = document.getElementById("convertTarget").value;
    data = data.split(" ");
    let strings = "";

    for(let index = 0; index < data.length; index++){
        for(let words = 0; words < data[index].length; words++){
            if(words == data[index].length - 1){
                strings += convertToBiner(data[index].charCodeAt(words));
            }
            else{
                strings += convertToBiner(data[index].charCodeAt(words)) + " ";
            }
        }
        strings += "\n";
    }

    document.getElementById("convertResult").value = strings;
}

/**
 * timeline : 
 *  1. ambil data dari id Revert
 *  2. ubah tulisan yang dipisahkan newline menjadi 2 array berbeda
 *  3. 2 array yang sudah terpisah tadi masih harus dipisahkan berdasarkan space menjadi beberapa array
 *  4. baru dilakukan proses konveri biner menjadi kata
 */
function Revert(){
    let data = document.getElementById("Revert").value;
    data = newlineSeparator(data);
    let seperatedData = [];

    for(let dataIndex = 0; dataIndex < data.length; dataIndex++){
        seperatedData.push(spaceSeperator(data[dataIndex]));
    }

    let strings = "";

    for(let seperatedDataIndex = 0; seperatedDataIndex < seperatedData.length; seperatedDataIndex++){
        for(let index = 0; index < seperatedData[seperatedDataIndex].length; index++){
            strings += RevertToText(seperatedData[seperatedDataIndex][index]);
        }
        strings += " ";
    }

    document.getElementById("revertResult").value = strings;
}


function convertToBiner(data){
    let tempString = "";

    for(let i = 7; i >= 0; i--){
        tempString += (data >> i) & 1;
    }

    return tempString;
}

function RevertToText(data){
    let tempValue = 0;
    let exponent = 1;

    for(let i = data.length - 1; i >= 0; i--){
        tempValue += Number.parseInt(data[i]) * exponent;
        exponent *= 2;
    }

    return String.fromCharCode(tempValue);
}

function newlineSeparator(arrays){
    return arrays.split("\n");
}

function spaceSeperator(arrays){
    return arrays.split(" ");
}