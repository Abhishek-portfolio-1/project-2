let input=document.querySelector('#input1');

function add(){
    
    let a = document.createElement('p');
    a.innerText=input.value;
    
    document.querySelector('#result').appendChild(a);
    if (a.innerText == ""){
        alert('fill the tasks') 
    };

    let del=document.createElement('button');
    del.innerText='Delete';
    a.appendChild(del);
    del.style.backgroundColor='#31473A';
    del.style.color='white';
    del.style.marginLeft='20px';
    function rem(){
        
        a.innerText='';
        
        
    }
    del.addEventListener('click',rem);


    function line(){
        a.style.textDecoration='line-through';
    }
    a.addEventListener('click',line);



    

}
let but=document.querySelector('#button');
but.addEventListener('click',add);


