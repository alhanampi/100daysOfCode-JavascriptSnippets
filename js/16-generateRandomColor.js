let random = Math.floor(Math.random() * 16777215).toString(16);
let btn = document.getElementById("btn");

//to insert it in the html:
const setBackground = () => {
  document.body.style.backgroundColor = `#${random}`;
};

btn.addEventListener("click", setBackground);
