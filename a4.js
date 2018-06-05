

// var j = document.getElementById("t1").value;
// var k = document.getElementById("t2").value;
// var forward = document.getElementById("b1");
// var pause = document.getElementById("b2");
// var previous = document.getElementById("b3");

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


// function main(){
//
//   var split = j.split("");
// console.log(split);
//
// function closurefn(cntr){
//   return function(){
//     k += split[cntr];
//     j -= split[cntr];
//   }
// }
//     function fd(){
//       for(let i=0;i<split.length;i++){
//         setTimeout(closurefn(i),i*1000);
//       }}
//
//       function bd(){
//
//       }
//
//
// return {
//   'fd_fn':fd,
//   'bd_fn':bd
// };
//
// }
//
// var resp = main();
//
// forward.addEventListener("click",resp.fd_fn());
//
// console.log(j);
//
// console.log(k);
//
// if(j.value!=0){
//   k.value = j.value.substr()
// }
// function split(){
//   this.split = split;
// }
// console.log(j.split(""));
//
//  if(document.getElementById('b1').addEventListener('click',function(){
//
//    for(let i=0;i<j.length;i++){
//      setTimeout(function(){
//        k += j.;
//      },i*1000);
//    }
//
//  }));

// if(document.getElementById('b1').addEventListener('click',function(){
//
//   var splitString = j.value.split("");
//
// for(i=0;i<splitString.length;i++){
//   (function(i){
//     setTimeout(function(){
//       // k.value = j.value.substr(0,1);
//       return k.value[i] = splitString[i];
//     },i*1000);})(i);
//
// }
// }
// ));

// for (i = 0; i <= j.value.length; ++i) {
//   function setDelay(i) {
//     setTimeout(function(){
//       console.log(i);
//     }, 1000);
//   }
// }
// for (i = 1; i <= 5; ++i) {
//    setDelay(i);
// }
//
// function setDelay(i) {
//   setTimeout(function(){
//     return console.log(i);
//   }, i*1000);
// }


// if(document.getElementById('b1').addEventListener('click',function(){
//
//     for(let i=0;i<=j.value.length;i++){
//       function setDelay(){
//         setTimeout(function(){
//           k.value = j.value.substr(i,i+1);
//         },1000);
//         }
//         setDelay();
//   }
// }
//
// ));



// if(document.getElementById('b1').addEventListener('click',function(){
//
//   for (i = 0; i < j.value.length; ++i) {
//      setDelay(i);
//   }
// var splitString = j.value.split("");
//
//   function setDelay(i) {
//     setTimeout(function(){
//       return k.value[i] = splitString[i];
//       }, i*1000);
//   }
// setDelay(i);
// }
//
// ));

// setTimeout(function(p){
// k.value = j.value.substr(i,i+1);

// var joinArray = k.join("");
// },1000);}
