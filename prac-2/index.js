import "./style.css";
let str;
function func1() {
  str = document.getElementById("myText").value;
  console.log(str.length);
}
document.getElementById("myButton").onclick = func1;

//slicing and indexOf()

let fullname = "Sangramjit Roy";
let firstname;
let lastname;

// firstname = fullname.slice(0, 10); //9 obdhi thakley 10 likhtey hoy karon ekta last index baad diye daay
// lastname = fullname.slice(11); //2nd parameter naa diley last porjonto sob
// console.log(firstname);
// console.log(lastname);
//Alternative Bestway

firstname = fullname.slice(0, fullname.indexOf(" "));
console.log(firstname);
lastname = fullname.slice(fullname.indexOf(" ") + 1);
console.log(lastname);
