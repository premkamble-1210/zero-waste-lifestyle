let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";
let url3="https://icanhazdadjoke.com/";
let url4="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let country="nepal";
btn.addEventListener("click",async()=>{
console.log(inp.value);
country=inp.value;
let result=await getcollage(country);
console.log(result);
collshow(result);
// let p=document.getElementById("result");
//   p.innerText=result;

})
function collshow(result){
  let list=document.querySelector("#list");
  list.innerText="";
  for(col of result){
    console.log(col.name);
    let li=document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);
  }
}

async function getcollage(country){
  try{
    let res=await axios.get(url4+country);
    console.log(res);
    return res.data;
  }catch(e){
    console.log("error-",e);
    return "error";
  }

}
// async function gethead(){
//   const conf={headers:{Accept:"Application/json"}};
//   let res3=await axios.get(url3,conf);
//   console.log(res3.data);
// }
// async function getimg(){
//   try{
//     let res= await axios.get(url2);
//     return res.data.message;
//   }catch(e){
//     console.log("error-",e);

//   }
// };
// let result=document.querySelector("button");
// result.addEventListener("click",async()=>{
//   let ig=await getimg();
//   console.log(ig);
//   let img=document.querySelector("#result");
//   img.setAttribute("src",ig);


// });
// fetch(url).then((responcs)=>{
//       console.log(responcs);
//       responcs.json().then((data)=>{
//         console.log(data);
//       })
// }).catch((error)=>{
//     console.log("error");
// });
// let result=document.querySelector("button");
// result.addEventListener("click",async()=>{
//   // console.log(".........");
//   let facts=await getfact();
//   let p=document.getElementById("result");
//   p.innerText=facts;
// });
// async function getfact(){
//   let res=await axios.get(url);
  
//   console.log(res.data.fact);
//   return res.data.fact;
// }

// async function getfact(){
//   let res=await fetch(url);
//   let data=await res.json();
//   console.log(data);
// }