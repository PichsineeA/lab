let out = document.getElementById("rec_out");
let inn = document.getElementById("rec_in");
let reset = document.querySelector("input");

out.onclick = function(){
  document.getElementById("rec_out").style.backgroundColor = "#F6CEE3";
}

inn.onclick = function() {
  document.getElementById("rec_out").style.backgroundColor = "#F6CEE3";
  document.getElementById("rec_in").style.backgroundColor = "#5882FA";
}

reset.onclick = function() {
  document.getElementById("rec_out").style.backgroundColor = "#ffe4c4";
  document.getElementById("rec_in").style.backgroundColor = "#e1eff5";
}