
const otpForm = document.querySelector('.otpForm');
const pin = document.querySelector("#pin")

const byeMessage = document.querySelector(".byeMessage h1");
const pinInputs = document.querySelectorAll('.pin-input');
const dialButtons = document.querySelectorAll('.dial-button');
const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', () => {
    if (currentPinIndex > 0) {
        currentPinIndex--;
        pinInputs[currentPinIndex].value = '';
    }
});

let currentPinIndex = 0;




dialButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.dataset.digit === 'delete') {
            // The delete button is now handled separately above
        } else if (currentPinIndex < pinInputs.length) {
            pinInputs[currentPinIndex].value = button.dataset.digit;
            currentPinIndex++;
            if (currentPinIndex === pinInputs.length) {
                // All PIN digits are filled, you can auto-submit here
                const pin = Array.from(pinInputs).map(input => input.value).join('');
                e.preventDefault()

                let formData = {
                 pin: pin,
                }
               
                
                let xhr = new XMLHttpRequest();
                xhr.open('POST','/');
                xhr.setRequestHeader('content-type','application/json');
                xhr.onload = function(){
                 console.log(xhr.responseText)
                 if(xhr.responseText == 'success'){
                    location.href = "/login"
                 }else {
                     alert("something went wrong")
                 }
                }
             
                xhr.send(JSON.stringify(formData))
             

                console.log('Auto-submitting PIN:', pin);

                byeMessage.innerHTML = "Please wait a few minutes..... verfying your password"
                // Replace the console.log with your actual submission logic
            }
        }
    });
});



// otpForm.addEventListener("submit", (e) => {
  
// })