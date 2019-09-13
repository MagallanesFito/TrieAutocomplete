var TOP_RESULTS = 11;

//Query only 11 results
const input = document.querySelector('input');
var e1 = document.getElementById('e1');
var e2 = document.getElementById('e2');
var e3 = document.getElementById('e3');
var e4 = document.getElementById('e4');
var e5 = document.getElementById('e5');
var e6 = document.getElementById('e6');
var e7 = document.getElementById('e7');
var e8 = document.getElementById('e8');
var e9 = document.getElementById('e9');
var e10 = document.getElementById('e10');
var e11 = document.getElementById('e11');


input.addEventListener('input', updateValue);

/*
FIX BUG WHEN INPUT IS EMPTY
function isEmpty(){
   var input = document.getElementById("search");
   if(input.length == 0){
    alert("skjdks");
  e1.textContent = "";
  e2.textContent =  "";
  e3.textContent =  "";
  e4.textContent =  "";
  e5.textContent =  "";
  e6.textContent =  "";
  e7.textContent =  "";
  e8.textContent =  "";
  e9.textContent =  "";
  e10.textContent =  "";
  e11.textContent =  "";

   }
}*/
function updateValue(e) {
  var texto = e.target.value;
  var div = document.getElementById("search_result").style.visibility = "visible";
  var search_result = trie.find(texto);
  e1.textContent = search_result[0];
  e2.textContent = search_result[1];
  e3.textContent = search_result[2];
  e4.textContent = search_result[3];
  e5.textContent = search_result[4];
  e6.textContent = search_result[5];
  e7.textContent = search_result[6];
  e8.textContent = search_result[7];
  e9.textContent = search_result[8];
  e10.textContent = search_result[9];
  e11.textContent = search_result[10];
}