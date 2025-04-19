const a=document.querySelector('.input1');
const b=document.querySelector('.input2');
const add=document.querySelector('.add');
const sub=document.querySelector('.sub');
const mult=document.querySelector('.multiply');
const divide=document.querySelector('.divide');
const res=document.querySelector('.result');


function addr(){
    const aa=Number(a.value);
    const bb=Number(b.value);

    const sum=aa+bb;
    res.innerText=sum;
}
add.addEventListener("click",addr);

function subr(){
    const aa=Number(a.value);
    const bb=Number(b.value);

    const sum2=aa-bb;
    res.innerText=sum2;
}
sub.addEventListener("click",subr);

function mulr(){
    const aa=Number(a.value);
    const bb=Number(b.value);

    const sum3=aa*bb;
    res.innerText=sum3;
}
mult.addEventListener("click",mulr);

function div(){
    const aa=Number(a.value);
    const bb=Number(b.value);

    const sum4=aa /bb;
    res.innerText=sum4;
}
divide.addEventListener("click",div);