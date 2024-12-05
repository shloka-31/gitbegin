let newbtn = document.querySelectorAll("li");
var i;
let sbtn;
let text;
for(i=0;i<newbtn.length;i++) {
    let sbtn = document.createElement("span");
    let text = document.createTextNode("x");
    sbtn.appendChild(text);
    sbtn.className="close";
    newbtn[i].appendChild(sbtn);
    const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});


var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
 let add = document.getElementById("add");
add.onclick = newel;
function newel() {
     let  addlist = document.getElementsByTagName("input")[0].value;
    let crt = document.createElement("li");
    let newtext = document.createTextNode(addlist);
    crt.appendChild(newtext);
    document.getElementById("ul").appendChild(crt);
    let newbtn = document.querySelectorAll("li");
var i;
let sbtn;
let text;
for(i=0;i<newbtn.length;i++) {
    let sbtn = document.createElement("span");
    let text = document.createTextNode("x");
    sbtn.appendChild(text);
    sbtn.className="close";
    newbtn[i].appendChild(sbtn);
}
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});


var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

}


