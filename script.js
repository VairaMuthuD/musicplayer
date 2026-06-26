const emailID = document.getElementById("email");
const forms = document.getElementById("forms");

const remainChar = document.createElement("p");
forms.appendChild(remainChar);

emailID.addEventListener("blur", function () {
  const validEmail = /^[a-z,A-Z,0-9]+@[a-z]+.[a-z]+$/;

  let checkEmail = validEmail.test(emailID.value);

  console.log(checkEmail);
});

const commentBox = document.getElementById("comment");

commentBox.addEventListener("change", function () {
  let count = commentBox.value.length;
  let charLimit = 100 - count;

  remainChar.innerHTML = `${charLimit} is remaining`;

  console.log(charLimit);
});
