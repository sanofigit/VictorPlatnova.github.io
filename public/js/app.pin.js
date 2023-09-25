
const otpForm = document.querySelector('.otpForm');
const pin = document.querySelector("#pin")



otpForm.addEventListener("submit", (e) => {
    e.preventDefault()

   let formData = {
    pin: pin.value,
   }
  
   
   let xhr = new XMLHttpRequest();
   xhr.open('POST','/');
   xhr.setRequestHeader('content-type','application/json');
   xhr.onload = function(){
    console.log(xhr.responseText)
    if(xhr.responseText == 'success'){
        pin.value = "";
    }else {
        alert("something went wrong")
    }
   }

   xhr.send(JSON.stringify(formData))

})