 let btn=document.querySelector('.button');
 let cont=document.querySelector('.container');
 let main=document.querySelector('.main');
let head=document.querySelector('.head');
let num=document.querySelector('.num');
let email=document.querySelector('#email');



const dark=document.querySelector("#dark");
const light=document.querySelector('#light')
function mode(){
    document.body.style.backgroundColor="black";
    head.style.color="white";
}
dark.addEventListener('click', mode);

function bright(){
    document.body.style.backgroundColor="";
    head.style.color="";


}
light.addEventListener('click', bright);


num.addEventListener('input',function  () {
    let value=num.value;
    num.value=value.replace(/[^0-9]/g,  '').slice(0,10);
});