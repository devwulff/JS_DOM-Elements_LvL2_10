let div = document.getElementById("element");

function smallstyle() {
  div.classList.remove("middle");
  div.classList.remove("big");
  div.classList.add("small");
}

function middle() {
  div.classList.remove("small");
  div.classList.remove("big");
  div.classList.add("middle");
}

function big() {
  div.classList.remove("small");
  div.classList.remove("middle");
  div.classList.add("big");
}
