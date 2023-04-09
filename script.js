let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
      button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string =eval(string);
            document.querySelector('input').value=string; //whatever value user has input will get converted to string
        }
        else if(e.target.innerHTML=='C'){
          string ="";//if c is pressed do string empty 
          document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string +e.target.innerHTML;
            document.querySelector('input').value=string;
        }
      })
})

