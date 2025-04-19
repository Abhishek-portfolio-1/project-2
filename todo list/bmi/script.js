let a=document.querySelector('.input1');
let b=document.querySelector('.input2');
let c=document.querySelector('.sub');
let d=document.querySelector('.bmi')


function result(){
    const weight=Number(a.value);
    const height=Number(b.value);
    const cmheight = height/100

    const res=weight / (cmheight*cmheight);
    d.innerHTML = res;

   
   


    

}

c.addEventListener('click',result);
