function adding(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let result = new Promise((resolve, reject) => {
        if((a + b) > 0){
            resolve(a + b);
        }
    });
    
    result.then(
        value => { document.getElementById("result").innerHTML = value; }
    );
}

function subtract(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    subtractFunction(a, b).then(
        (value) => { document.getElementById("result").innerHTML = value; }
    );
}

async function subtractFunction(a, b){
    return a - b;
}

function multiply(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    multiplyFunction(a, b);
}

async function multiplyFunction(a, b){
    let promises = new Promise((resolve, reject) => {
        resolve(a * b);
    });

    document.getElementById("result").innerHTML = await promises;
}