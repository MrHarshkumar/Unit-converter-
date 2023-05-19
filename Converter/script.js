// F is to change in the faren
function f() {
    console.log("This is test n js");
    // let first = document.getElementById("inp");
    let val = document.getElementById('inp').value;
    console.log(val);
    let ans = (val * 9 / 5) + 32;
    console.log(ans);
    document.getElementById('answer').innerHTML = "Ans in faren  " + ans;
  
  }
  
  
  //This is to change in the celsis
  function Cel() {
    let val = document.getElementById('inp').value;
    console.log(val);
    let ans;
    //°F-32)×5]/9
    ans = ((val - 32) * 5) / 9;
    console.log(ans);
    document.getElementById('answer').innerHTML = "Ans in the cel  " + ans;
  
  }
  
  function main() {
    let e = document.getElementById("sel");
    let value = e.value;
    if (value == "Celesis") {
      f();
    }
    else {
      Cel();
    }
  }
  //To change in the celcisis
  let i = document.getElementById("btn");
  i.addEventListener('click', main);
  
  
  
  function c() {
    document.getElementById('inp').value = 0;
    document.getElementById('answer').innerHTML = "Welcome";
    // document.getElementById('answer').innerHTML=ans;
  }
  let clear = document.getElementById("clr");
  clear.addEventListener('click', c);
  
  