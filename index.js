let sendBtn = document.getElementById('sendBtn');
let resetBtn = document.getElementById('resetBtn');
let form = document.getElementById('form');


form.addEventListener('submit', (e) =>{
e.preventDefault();
});


resetBtn.addEventListener('click', (e) => {
let name =document.getElementById('name'); 
name.value = '';
});

sendBtn.addEventListener('click', (e)=>{
  let name = document.getElementById('name');
name = name.value;


 localStorage.setItem('name', 'peace, you are welcome.');
  


  document.getElementById('form').innerHTML =
  localStorage.getItem('name');

  });


const welcomeNote = () =>{
  const Name = localStorage.getItem('name') || false;
  if(Name){
    alert(`welcome back ${name}`);
  }else{
    alert('you are welcome');
  }
}
document.addEventListener("DOMContentLoaded", welcomeNote );

 

 
 