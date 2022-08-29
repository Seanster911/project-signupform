const passwordInput = document.getElementById("pwd");
const passwordValid = document.getElementById("confirm-pwd");
const validDiv = document.getElementById("validation");

function validate() {
    if (passwordInput.value != passwordValid.value) {
        validDiv.style.visibility = "visible";
    } else if (passwordInput.value === passwordValid.value) {
        validDiv.style.visibility = "hidden";
    }
};

passwordValid.addEventListener("change", validate);
passwordInput.addEventListener("change", validate);