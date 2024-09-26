console.log(String.fromCharCode(("英".charCodeAt() ^ 100 )));
console.log("z".charCodeAt());
console.log("A".charCodeAt());
console.log("Z".charCodeAt());
console.log(String.fromCharCode(126));

//from 33 to 126
function textEncryption(){
    let data = document.getElementById("textAreaEncryption").value;
    data = data.split(" ");
    let strings = "";

    for(let sentence of data){
        for(let words of sentence){
            strings += convertToBiner(encryptionAlgorithm(words.charCodeAt(), sentence.length));
        }
        strings += convertToBiner(" ".charCodeAt());
    }

    document.getElementById("textEncryptionResult").value = strings;
}

function downloadFile(data){
    const tempor = new Int32Array(encryptionToFile([data])).buffer;
    const blob = new Blob([tempor], {
        type: "image/jpeg",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;

    a.download = "demo.jpeg";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function encryptionToFile(data){
    let result = [];
    for(let sentence of data){
        for(let words of sentence){
            result.push(encryptionAlgorithm(words.charCodeAt(), sentence.length));
        }
        result.push(" ".charCodeAt());
    }
    return result;
}

/**
 * prototype
 * @param {*} data 
 * @returns 
 */
function decryptionFromFile(data){
    let result = [];
    for(let sentence of data){
        for(let words of sentence){
            result.push(encryptionAlgorithm(words.charCodeAt(), sentence.length));
        }
        result.push(" ".charCodeAt());
    }
    return result;
}

function textDecryption(){
    let data = document.getElementById("textAreaDecryption").value;

    console.log(bitChunk(data))

    data = whitespaceSeparator(bitChunk(data));
    
    let strings = "";

    for(let sentence of data){
        for(let words of sentence){
            strings += String.fromCharCode(decryptionAlgorithm(words.charCodeAt(), sentence.length));
        }
        strings += " ";
    }

    document.getElementById("textDecryptionResult").value = strings;
}

/**
 * seperated a bytes of binary data into 32 chunk string data
 * 
 * @param {Array} data
 * @returns Arrays
 */
function bitChunk(data){
    return data.match(/.{1,32}/g);
}

function whitespaceSeparator(data){
    let result = [];
    let tempString = "";

    for(let biner of data){
        if(biner == "00000000000000000000000000100000"){
            result.push(tempString);
            tempString = "";
            continue;
        }
        tempString += RevertToText(biner);
    }

    return result;
}

//bug
/**
 * fix encryption and decryption algorithm
 * 
 * problem : 
 * advance japanese kanji got destroyed and this algorithm only works for english words
 */


/**
 * 
 * @param {Array} data 
 * @param {Number} state 
 * @returns Number
 */
function encryptionAlgorithm(data, state){
    if(state > 3 && state < 5){
        if(data > 3000){
            return ((data - 2000) * 3 + 50);
        }
        return ((data * 5 - 5)) ^ 100;
    }
    else{
        if(data > 3000){
            return (data - 2000) * 3 + 50;
        }
        return ((data * 2 + 3)) ^ 50;
    }
}

/**
 * 
 * @param {*} data 
 * @param {*} state 
 * @returns Number
 */
function decryptionAlgorithm(data, state){
    if(state > 3 && state < 5){
        if(data > 3000){
            return ((data - 50) / 3) + 2000;
        }
        return (((data ) ^ 100) + 5) / 5; 
    }
    else{
        if(data > 3000){
            return ((data - 50) / 3) + 2000;
        }
        return ((data ^ 50) - 3) / 2; 
    }
}

function convertToBiner(data){
    let tempString = "";

    for(let i = 31; i >= 0; i--){
        tempString += (data >> i) & 1;
    }

    return tempString;
}

function RevertToText(value){
    let tempValue = 0;
    let exponent = 1;

    for(let i = value.length - 1; i >= 0; i--){
        tempValue += Number.parseInt(value[i]) * exponent;
        exponent *= 2;
    }

    return String.fromCharCode(tempValue);
}