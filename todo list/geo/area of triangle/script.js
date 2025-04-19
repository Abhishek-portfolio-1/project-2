let a=document.querySelector('#input1');
let b=document.querySelector('#input2');
let c=document.querySelector('#button');
let d=document.querySelector('#result');

function result(){
    let inputvalue = a.value;
    let inputtvalue = b.value;

    d.innerText=(inputvalue * inputtvalue )/2; 
}
c.addEventListener('click', result );