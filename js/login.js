// step1
document.getElementById('btn-submit').addEventListener('click', function () { 
    // step2
const emailField = document.getElementById('user-email');
const email= emailField.value;

// set3
const passwordField =document.getElementById('user-password');
const password =passwordField.value;
// step4
if (email ==='sontan@baap.com' && password === 'secret'){
    window.location.href ='bank.html';
}
else{
    alert('Tui password vule gesos !! toke ami teijjo sontan gosona krlam');
}
 })