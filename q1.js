let o1=document.querySelector(".q1o1")
let o2=document.querySelector(".q1o2")
let o3=document.querySelector(".q1o3")
let o4=document.querySelector(".q1o4")
let next=document.querySelector(".next")
let right=document.querySelector("#correct")
let wrong=document.querySelector("#wrong")
o1.addEventListener("onclick",()=>{
  right.style.display="flex";
  wrong.style.display="flex";
  o1.style.backgroundColor=" #dfff00";
  o1.style.color="#ff0000";
})
o2.addEventListener("onclick",()=>{
    right.style.display="flex";
    wrong.style.display="flex";
    o2.style.backgroundColor=" #dfff00";
  o2.style.color="#ff0000";
})
o3.addEventListener("onclick",()=>{
    right.style.display="flex";
    wrong.style.display="flex";
    o3.style.backgroundColor=" #dfff00";
  o3.style.color="#ff0000";
})
o4.addEventListener("onclick",()=>{
    right.style.display="flex";
    wrong.style.display="flex";
    o4.style.backgroundColor=" #dfff00";
  o4.style.color="#ff0000";
})
