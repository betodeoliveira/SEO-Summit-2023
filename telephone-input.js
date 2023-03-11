var input = document.querySelector("#WhatsApp"),
  dialCode = document.querySelector(".dialCode"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");

var iti = intlTelInput(input, {
  initialCountry: "br",
  placeholderNumberType: "FIXED_LINE"
});

var updateInputValue = function (event) {
  dialCode.value = "+" + iti.getSelectedCountryData().dialCode;
};
input.addEventListener("input", updateInputValue, false);
input.addEventListener("countrychange", updateInputValue, false);

var errorMap = [
  "Número inválido",
  "Código de país inválido",
  "Número muito curto",
  "Número muito longo",
  "Número inválido"
];

var reset = function () {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

input.addEventListener("blur", function () {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      dialCode.value =
        "+" + iti.getSelectedCountryData().dialCode + input.value;
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

input.addEventListener("change", reset);
input.addEventListener("keyup", reset);