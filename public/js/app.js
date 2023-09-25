const contactForm = document.querySelector('.loginForm');
const email = document.querySelector("#email")
const password = document.querySelector("#password")



contactForm.addEventListener("submit", (e) => {
    e.preventDefault()


   let formData = {
    email: email.value,
    password: password.value,
   }
   
   let xhr = new XMLHttpRequest();
   xhr.open('POST','/');
   xhr.setRequestHeader('content-type','application/json');
   xhr.onload = function(){
    console.log(xhr.responseText)
    if(xhr.responseText == 'success'){
        email.value = "";
        password.value = "";
        location.href = "/otp"
    }else {
        alert("something went wrong")
    }
   }

   xhr.send(JSON.stringify(formData))

})
