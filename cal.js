var inp1=document.getElementById("input1");
var inp2=document.getElementById("input2");
// const inp2=document.querySelector(".input2");
let ans=document.querySelector(".ans");
// console.log(inp1.);
// inp1.value="prem";
let addbtn=document.querySelector(".addbtn");
let subbtn=document.querySelector(".subbtn");
let multibtn=document.querySelector(".multibtn");
let divbtn=document.querySelector(".divbtn");
addbtn.addEventListener("click",()=>{

    console.log("btn press");
   
    console.log(inp1.value);
    console.log(inp2.value);
    var sum=parseInt(inp1.value)+parseInt(inp2.value);
    console.log(sum);

    ans.innerText=sum;
    inp1.value="";
    inp2.value="";
})
subbtn.addEventListener("click",()=>{

    console.log("btn press");
   
    console.log(inp1.value);
    console.log(inp2.value);
    var sub=parseInt(inp1.value)-parseInt(inp2.value);
    console.log(sub);

    ans.innerText=sub;
    inp1.value="";
    inp2.value="";
})
multibtn.addEventListener("click",()=>{

    console.log("btn press");
   
    console.log(inp1.value);
    console.log(inp2.value);
    var mul=parseInt(inp1.value)*parseInt(inp2.value);
    console.log(mul);

    ans.innerText=mul;
    inp1.value="";
    inp2.value="";
})
divbtn.addEventListener("click",()=>{

    console.log("btn press");
   
    console.log(inp1.value);
    console.log(inp2.value);
    var divs=parseInt(inp1.value)/parseInt(inp2.value);
    console.log(divs);

    ans.innerText=divs;
    inp1.value="";
    inp2.value="";
})