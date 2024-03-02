// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("hello avery one !");
//     alert("GO GP");

// }
// let btt=document.querySelector("button");
// // btt.onclick=(e)=>{
// //     console.log("click button ");
// //     btt.innerHTML="hello";
// // }
// btt.addEventListener("click",()=>{
//     console.log("click button ");
//         btt.innerHTML="hello";
// })
// let bt1=document.querySelector(".bt1");
// let mode="light";
// bt1.addEventListener("click",()=>{
//     if (mode=="light") {
//         mode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         mode="light";
//         document.querySelector("body").style.backgroundColor="aquamarine";

//     }
//     console.log(mode);
// })

let inp=document.querySelector("input");
let subbt=document.querySelector(".submitbts");
let ul=document.querySelector("ul");

subbt.addEventListener("click",()=>{
    let item=document.createElement("li");
    item.innerText=inp.value;
    let deletitem=document.createElement("button");
    deletitem.innerText="delete";
    deletitem.classList.add("deletebutton");
    item.appendChild(deletitem);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
})

ul.addEventListener("click",function (event){
    if(event.target.nodeName=="BUTTON"){
        let items=event.target.parentElement;
        items.remove();
    }
})
// let deletitems=document.querySelectorAll(".deletebutton");
// for(deletitem of deletitems){
//     deletitem.addEventListener("click",function (){
//         let pal=this.parentElement;
//         console.log(pal);
//         pal.remove();
//     });
// }