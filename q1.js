let o1=document.querySelector(".q1o1")
let o2=document.querySelector(".q1o2")
let o3=document.querySelector(".q1o3")
let o4=document.querySelector(".q1o4")
let next=document.querySelector(".next")
let right=document.querySelector("#correct")
let wrong=document.querySelectorAll("#wrong")
o1.addEventListener("click",()=>{
  right.style.display="inline-block";
  wrong.style.display="inline-block";
  o1.style.backgroundColor=" #dfff00";
  o1.style.color="#ff0000";
})
o2.addEventListener("click",()=>{
    right.style.display="inline-block";
    wrong.style.display="inline-block";
    o2.style.backgroundColor=" #dfff00";
  o2.style.color="#ff0000";
})
o3.addEventListener("click",()=>{
    right.style.display="inline-block";
    wrong.style.display="inline-block";
    o3.style.backgroundColor=" #dfff00";
  o3.style.color="#ff0000";
})
o4.addEventListener("click",()=>{
    right.style.display="inline-block";
    wrong.style.display="inline-block";
    o4.style.backgroundColor=" #dfff00";
  o4.style.color="#ff0000";
})
next.addEventListener("click",()=>{
    location.href="question2.html";
})