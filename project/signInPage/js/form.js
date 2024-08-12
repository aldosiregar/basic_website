let submit = document.getElementById("submitForm");

submit.addEventListener("click", function(e){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password != confirmPassword){
        e.preventDefault();
        alert("password isnt same");
    }

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let birthdate = document.getElementById("birthdate").value;
    let address = document.getElementById("address").value;
    

    let results = {
        username : username,
        email : email,
        gender : gender,
        birthdate : birthdate,
        address : address,
        password : password
    };
});