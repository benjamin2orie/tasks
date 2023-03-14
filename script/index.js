

let names = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');

function nameValidity () {
    let userName = document.getElementById('name-input').value;
    if( userName.length === 0){
        names.innerHtML = "name is required here";  
        return false
    } 
     if(!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)){
        names.innerHTML = 'full name is required!'
        return false
    }
        names.innerHTML = "<i class='bx bxs-check-circle'></i>"
        return true
}
 function emailValidate(){
    let userEmail = document.getElementById('email-input').value;
        if(userEmail.length === 0){
            email.innerHTML = "Email is required here"
            return false
        }
        if(!userEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            email.innerHTML = " Invalid email";
            return false
        }
        email.innerHTML = "<i class='bx bxs-check-circle'></i>"
        return true
 }
 function phoneValidate(){
      let userPhone = document.getElementById('phone-input').value;
        if(userPhone.length !== 10){
            phone.innerHTML = "Phone number must be greater than 10";
            return false
        } 
         if(!userPhone.match(/^[0-9]{10}$/)){
            phone.innerHTML = '10 digit is required'
            return false
        } 
            phone.innerHTML = "<i class='bx bxs-check-circle'></i>"
            return true
}

 function passwordValidate(){
    let userPassword = document.getElementById('password-input').value;
      if(userPassword.length <= 9){
          password.innerHTML = "password must be greater then 6 characters";
          return false
      } 
       if(!userPassword.match(/^[0-9]{10}$/)){
          password.innerHTML = '10 digit is required';
          return false
      } 
          password.innerHTML = "<i class='bx bxs-check-circle'></i>"
          return true
      
}

 





