function send(){
    let username = document.getElementById("username").innerHTML; 
    let password = document.getElementById("password").innerHTML;

    if(injectorChecker(username) || injectorChecker(password)){
        alert("ada injection");
    }
    else{
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../php/server.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.onload = function () {
            if(this.response == true){
                    document.getElementById("checker").innerHTML = 
                    this.response;
                }
            }
        xhttp.send("username=" + username + "&password=" + password);
    }
}

function injectorChecker(str){
    let patern = /WHERE|AND|OR/g; //check if there's any php injection sequence
    if(str.include(patern)){
        return true;
    }
    return false;
}