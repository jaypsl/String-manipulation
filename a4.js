



document.getElementById("b1").addEventListener("click",left);
// document.getElementById("b2").addEventListener("click",pause);
document.getElementById("b3").addEventListener("click",right);

// pause.addEventListener('click',main);
// previous.addEventListener('click',main);

var interval;

function left(){
    clearInterval(interval);
   interval = setInterval(function(){
    var text1 = document.getElementById("t1").value;
    document.getElementById('t2').value += text1.substring(0,1);
    document.getElementById('t1').value = text1.substring(1);

  },1000);
}


function right(){
  clearInterval(interval);
    interval = setInterval(function(){
      document.getElementById('t1').value = document.getElementById('t2').value.charAt(document.getElementById('t2').value.length-1) + document.getElementById('t1').value;
      document.getElementById('t2').value = document.getElementById('t2').value.substr(0,document.getElementById('t2').value.length-1);
      if(document.getElementById('t2').value.length==0){
        clearInterval(interval);
    }
  },1000);

}

document.getElementById("b2").addEventListener("click",function(){
  clearInterval(interval);
});
