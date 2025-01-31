let o1=document.querySelector(".q6o1")
let o2=document.querySelector(".q6o2")
let o3=document.querySelector(".q6o3")
let o4=document.querySelector(".q6o4")
let prev=document.querySelector(".previous")
let next=document.querySelector(".next")
let right=document.querySelector("#correct")
let wrong=document.querySelectorAll("#wrong")
o1.addEventListener("click",()=>{
  right.style.display="inline-block";
  wrong.style.display="inline-block";
  o1.style.backgroundColor= "rgba(0,0,0,0.4)";
    o1.style.boxShadow="5px 5px 6px 5px skyblue";
})
o2.addEventListener("click",()=>{
    right.style.display="inline-block";
    wrong.style.display="inline-block";
    o2.style.backgroundColor= "rgba(0,0,0,0.4)";
    o2.style.boxShadow="5px 5px 6px 5px skyblue";
})
o3.addEventListener("click",()=>{
    right.style.display="inline-block";
    wrong.style.display="inline-block";
    o3.style.backgroundColor= "rgba(0,0,0,0.4)";
    o3.style.boxShadow="5px 5px 6px 5px skyblue";
})
o4.addEventListener("click",()=>{
    right.style.display="inline-block";
    wrong.style.display="inline-block";
    o4.style.backgroundColor= "rgba(0,0,0,0.4)";
    o4.style.boxShadow="5px 5px 6px 5px skyblue";
})
next.addEventListener("click",()=>{
    location.href="question7.html";
})
prev.addEventListener("click",()=>{
    location.href="question5.html";
})