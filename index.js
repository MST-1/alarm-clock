
const display=document.getElementById('display');
var audio = new Audio('Assets/beep.wav');


let holder=[];
let tim=document.getElementById('time-container');


// Function for showing Time

function clock() {
    
    return setInterval(() => {
      let date = new Date();
      let h= date.getHours();
      let m= date.getMinutes();
    
      let tick = date.toLocaleTimeString();

     if(h>12){ 

      h=h-12;

      
      holder.forEach(element => {
        if(element.hrs==h & element.min==m){
          
      //  for testing console.log("i m working fine");
           audio.play();
        }
        else{
          //for testing console.log("i m not working fine");
          
        }
        
      });
      


      // console.log(h,m);
          }
          else{
            holder.forEach(element => {
              if(element.hrs==h & element.min==m){
                
            //  for testing console.log("i m working fine");
                 audio.play();
              }
              else{
                //for testing console.log("i m not working fine");
                
              }
              
            });

          }


      
      

      display.textContent = tick;
     

    }, 1000);
  }




// function for setting  the alarm time


function setTimer(e){
  
    let hrs=document.getElementById("hr").value;
    let min=document.getElementById("min").value;
    let Zone=document.getElementById("zone").value;


   if(hrs==0 & min==0){
    alert("please put some value");

   }else{

    if(hrs<0 || min<0){
      alert(" you can not put negative value");
      hrs=0;
      min=0;
     
    }else{
    
      if(hrs>12 || min>60){
        alert(" put the alerm time respective to Local Time(1 To 12 hrs)");
      }else{
        console.log(hrs,":",min,":",Zone);
        let time={hrs:hrs,min:min,Zone:Zone};
         holder.push(time);
        console.log(holder);
      }
     
    }

   }
 
let allTime=holder.map((value,at)=>{

  console.log(value);

    return(`<div class="timeBox" id="${at}">

    <div>
      
      <span>${value.hrs}<span/>
      <span>Hr<span/>
      <span>${value.min}<span/>
      <span>Min<span/>
      <span>${value.Zone}<span/>
      
      <button class="delete" id="${at}" onClick="del(${at})" >
      <img src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png?w=740&t=st=1679198548~exp=1679199148~hmac=60c87b7f0baf770e5648cb38b126156d735d68d63a6593b93a0b70517b96804a" alt="" class="delBtn"></button>
    
    </div>
    
    </div>`)
    
    
    
    })



console.log(allTime);
tim.innerHTML=allTime;



}

function del(id){
  
 let ele=document.getElementById(id); 
console.log(id);
console.log(ele);
let newarr=holder.filter((value,at)=>{

    if(id!=at){
        return(value);
    
    }
    })


// ele.style.display="none";
holder=newarr;
console.log(holder);




let allTime=holder.map((value,at)=>{
       
    return(`<div class="timeBox" id="${at}">

     <div>
      
      <span>${value.hrs}<span/>
      <span>Hour<span/>
      <span>${value.min}<span/>
      <span>Min<span/>
      <span>${value.Zone}<span/>
      
      <button class="delete" id="${at}" onClick="del(${at})" >
      <img src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png?w=740&t=st=1679198548~exp=1679199148~hmac=60c87b7f0baf770e5648cb38b126156d735d68d63a6593b93a0b70517b96804a" alt="" class="delBtn"></button>
    
    </div>
    
    </div>`)
    
    
    
    })
tim.innerHTML=allTime;


// console.log(display.innerHTML);


}