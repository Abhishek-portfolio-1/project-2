const a=document.querySelector('#input1');
const b=document.querySelector('#input2');
const result=document.querySelector('#result');
const but=document.querySelector('#button');

function res(){
     let avalue= Number(a.value);
     let bvalue = b.value;
     
 

     if(bvalue == "USA"){
const U = avalue * 86;

result.innerHTML = U;
     }
      if(bvalue == "UAE"){
        const D= avalue * 23.28;
         result.innerHTML=D;
     };
      if(bvalue === "PR"){
        const P=avalue *0.31;
        result.innerHTML=P;
     };
      if(bvalue === "EURO"){
        const E=avalue * 92.60;
        result.innerHTML=E;
     }


}
but.addEventListener('click',res);





// function re(){
//    console.log(1);
// }

// setTimeout(re, 1000); 
// function e(){
//    console.log(2);
// }
// setTimeout( e, 2000); 

// setTimeout(() => {
//    console.log("3");
// }, 3000); 

// setTimeout(() => {
//    console.log("4");
// }, 4000); 

// setTimeout(() => {
//    console.log("5");
// }, 5000); 
