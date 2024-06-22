function isValid(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var phno = document.getElementById("phno").value;
    var cpassword = document.getElementById("cpassword").value;
    var gender=document.getElementsByName("gender");
    var Gender="";
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            { 
                Gender=gender[i].value;
                break;
            }
            
    }
    if(name == "" || email == "" || password == "" || username == "" || phno =="" || Gender == "")
    {
        window.alert("Fill the requirements");
    }
    if(password!==cpassword)
        {
            window.alert("Password does not match");

        }
    
    else{
        window.confirm(`Form Submited 👌\nName -> ${name}\nEmail -> ${email}\nPhno -> ${phno}\nUsername -> ${username}\nPassword -> ${password}\nGender -> ${Gender}`);

        console.info(`Name -> ${name}\nEmail -> ${email}\nPhno -> ${phno}\nUsername -> ${username}\nPassword -> ${password}\nGender -> ${Gender}`);
    }

    
}