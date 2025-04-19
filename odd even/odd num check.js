let input=document.querySelector('.value');
let but=document.querySelector('.sub');
let ans=document.querySelector('.text');

function check(){
    let a=(input.value);


    if (a % 2 === 0) {
    ans.innerText='even';
   
    }else{
        ans.innerText='odd';
        
    }
    if(input.value === ''){
        ans.innerText='Not Value ?'

    }

 
    





   
       

        
        
    
    }
  but.addEventListener('click',check);
    
