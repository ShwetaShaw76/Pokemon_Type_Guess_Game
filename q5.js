let o1=document.querySelector(".q5o1")
let o2=document.querySelector(".q5o2")
let o3=document.querySelector(".q5o3")
let o4=document.querySelector(".q5o4")
let prev=document.querySelector(".previous")
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
prev.addEventListener("click",()=>{
    location.href="question4.html";
})