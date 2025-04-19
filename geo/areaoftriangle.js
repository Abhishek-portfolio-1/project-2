let a=document.querySelector('#inputone');
let b=document.querySelector('#inputtwo');
let c=document.querySelector('#inputthree');
let d=document.querySelector('#button');
let p=document.querySelector('#result')

function check(){
    let ione=Number(a.value);
    let itwo=Number(b.value);
    let ithree=Number(c.value);
    let sum= ione+itwo+ithree;

    if(sum === 180){
        p.innerText='Correct'
    }else {
        p.innerText='Incorrect'
    }
    if(sum === 0){
        p.innerText='not a number'
    }
}
d.addEventListener('click',check);


