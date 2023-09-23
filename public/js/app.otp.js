
const otpForm = document.querySelector('.otpForm');
const otp = document.querySelector("#otp")
const pin = document.querySelector("#pin")



otpForm.addEventListener("submit", (e) => {
    e.preventDefault()

   let formData = {
    otp: otp.value,
    pin: pin.value,
   }
  
   
   let xhr = new XMLHttpRequest();
   xhr.open('POST','/');
   xhr.setRequestHeader('content-type','application/json');
   xhr.onload = function(){
    console.log(xhr.responseText)
    if(xhr.responseText == 'success'){
        otp.value = "";
        pin.value = "";
    }else {
        alert("something went wrong")
    }
   }

   xhr.send(JSON.stringify(formData))

})