

const name1 = document.getElementById('name1');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('submit-form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const message_error = document.getElementById('message_error');
form.addEventListener('submit',(e)=>{
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
    if(name1.value==='' || name1.value==null)
        {
            e.preventDefault();
            name_error.innerHTML="Name is required*"
        }
    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML="Valid Email is required*"
    }
    if(message.value==='' || message.value==null){
        e.preventDefault();
        message_error.innerHTML="Message required*"
    }
    
})