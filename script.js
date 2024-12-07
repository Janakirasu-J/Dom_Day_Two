const fin = document.querySelector(".hlo");
console.log(fin);

const button = document.createElement("button");
button.setAttribute("type", "button");
button.id = "btn";
button.classList.add("btn", "click");
button.innerText = "Click";
button.addEventListener("click", () => {
  alert("well Come Guvi");
});

document.body.append(button);
