'use strict';
let secretnumber=Math.trunc(Math.random()*20+1);
let score=20;
let highscore=0;

document.querySelector('.btn-check').addEventListener('click',function(){
   const number=Number(document.querySelector('.guess').value);
   console.log(document.querySelector('.guess').value);
   
   
   
   if(!number){
      document.querySelector('.message').textContent='Please Enter The Number';
      console.log(document.querySelector('.message').textContent='Enter The Numbers');
   }
   else if(number!==secretnumber){

      if(score>1){
         
         document.querySelector('.message').textContent=number>secretnumber?'TooHigh':'TooLow';
         score--;
         document.querySelector('.score').textContent=score;
         
         // if(number>secretnumber){
            //    document.querySelector('.message').textContent='TooHigh';
            //    score--;
            //    document.querySelector('.score').textContent=score;
            // }
            // else if(number<secretnumber){
               //    document.querySelector('.message').textContent='TooLow';
               //    score--;
               //    document.querySelector('.score').textContent=score;
               //}
            }
            else{
               document.querySelector('.message').textContent='YouLostTheGame'
            }
               }

   else{
      
         document.querySelector('.message').textContent='Congrats you Guess It Right';
         document.querySelector('.number').textContent=secretnumber;
      document.querySelector('body').style.backgroundColor='green';
score+=2;
document.querySelector('.score').textContent=score;
highscore=score;
document.querySelector('.highscore').textContent=highscore;
   }

   
});



document.querySelector('.btn-again').addEventListener('click',function(){
   secretnumber=Math.trunc(Math.random()*20+1);
   highscore=score;
   document.querySelector('.highscore').textContent=highscore;
   document.querySelector('.number').textContent='?';

   score=20;



   
   
   document.querySelector('.score').textContent=score;
   document.querySelector('body').style.backgroundColor='#222';
   document.querySelector('.message').textContent='Start guessing...';
   document.querySelector('.guess').value='';



});