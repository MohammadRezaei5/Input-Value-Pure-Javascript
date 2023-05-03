// variable
const form = document.querySelector("form");
const textInput = document.querySelector('input[type="text"]');
const pTag = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const textInputValue = textInput.value;

  // validation
  if (textInputValue === "") {
    pTag.textContent = `
    لطفا موارد خواسته شده را ورد کنید
    😐👆
    `;
    pTag.style.color = "red";
    textInput.classList.add("error-inp");

    textInput.focus();
    textInputValue = "";
  } else {
    pTag.textContent = `
  
    شما با نام ${textInputValue} 
    در این سامانه ثبت شدید
    😍👏
    `;

    pTag.style.color = "#fff";
    textInput.classList.remove("error-inp");
    textInput.value = "";
    textInput.focus();
  }
});
