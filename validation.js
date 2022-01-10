
//Login 
const form1=document.getElementById('form1');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const showlogin=document.getElementById('showlogin');
//Registration
const form2=document.getElementById('form2');
const email1=document.getElementById('email1');
const password2=document.getElementById('password2');
const confirmpassword=document.getElementById('confirmpassword');
const showregister=document.getElementById('showregister');
 
 
//Show input error message
 
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-controlled error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
 //Show input success message
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-controlled success';
    
}

//to reset the color of the border
function showReset(input){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText='';
    formControl.className='form-controlled reset';
    
}
 
//Email validate
 
function isValidEmail(email,email1)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email,email1).toLowerCase());
}
 
 
form1.addEventListener('submit',function(e){
    e.preventDefault();
 

    if(email.value===''){ 
        showError(email,'Email is required'); // if empty 
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid'); //if email is incomplete , should have @ and .com/.edu etc
    }
    else{
        showSuccess(email);
    }
 
    if(password.value===''){
        showError(password,'Password is required');// if empty 
    }
    else if (password.value!==''){
        showSuccess(password);
    }

    if((email.value !=='')&&(password.value !== '')){ 
        showReset(email);
        showReset(password);
        alert("Login Successfully");
        form1.reset();
    }



});


 
form2.addEventListener('submit',function(e){
    e.preventDefault();
 
    if(username.value===''){ //if empty
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }
    if(email1.value===''){//if empty
        showError(email1,'Email is required');
    }else if(!isValidEmail(email1.value)){ //if email is incomplete , should have @ and .com/.edu etc
        showError(email1,'Email is not valid');
    }
    else{
        showSuccess(email1);
    }
 
    if(password2.value===''){ // if empty
        showError(password2,'Password is required');
    }
    else if(password2.value < 6){// password should have more than 5 characters
        showError(password2,'Password is too short. Enter a password with more than 5 characters.');
    }

    else{
        showSuccess(password2);
    }
    if(confirmpassword.value===''){ //if empty
        showError(confirmpassword,'Confirm password is required');
    }
    else if (confirmpassword.value !== password2.value){//if not match
        showError(confirmpassword,'Password entered does not match.');
        showError(password2,'Password entered does not match.');
        
    }
    else{
        showSuccess(confirmpassword);
    }

    if((username.value!=='')&&(email1.value!=='')&&(password2.value!=='')&&(confirmpassword.value!=='') && (password2.value >= 6) && (confirmpassword.value == password2.value) ) {
        showReset(username);
        showReset(email1);
        showReset(password2);
        showReset(confirmpassword);
        alert("Registered Successfully");
        form2.reset();
    }




});

showlogin.addEventListener("click", resetLogin);
showregister.addEventListener("click", resetReg);

function resetLogin(){
showReset(email);
showReset(password);
form1.reset();
}

function resetReg(){
    showReset(username);
    showReset(email1);
    showReset(password2);
    showReset(confirmpassword);
    form2.reset();
    }
     
 
 
 
 
