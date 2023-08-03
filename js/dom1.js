const box1 = document.getElementById("box1");
const box2Array = document.getElementsByClassName("box2");
const divArray = document.getElementsByTagName("div");

box1.innerHTML += `<input type="password">`;
//box2Array[1].innerHTML = `<input type="text">`;

const box1_qs = document.querySelector("#box1");
const box2Array_qs = document.querySelectorAll(".box2");
const usernameInput = box2Array_qs[1].querySelector(".username-input");
const divArray_qs = document.querySelectorAll("div");

//box2Array_qs.value = "test";
usernameInput.value = "test";

console.log(box1_qs);
console.log(box2Array_qs);
console.log(divArray_qs);
console.log(usernameInput);