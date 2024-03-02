let gameseq=[];
let userseq=[];
let highestscore=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){

       // console.log("game started !");
        started=true;
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },300);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },100);

}
function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randonId=Math.floor(Math.random()*3);
    let randomcolor=btns[randonId];
    console.log(`${randomcolor}`);
    let randbtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
  btnflash(randbtn);
}
function checkbtn(idx){
    console.log("curr leval ",level);
    
    if(userseq[idx]===gameseq[idx]){
        console.log("same valu");
        if(userseq.length == gameseq.length){
            highestscore.push(level);
            highestscore.sort();
            // console.log(".........",highestscore[highestscore.length-1]);
            let d=highestscore[highestscore.length-1];
            let h3=document.querySelector("h3");
            h3.innerHTML=`Hight score ${d}`;
            setTimeout(levelup(),1000);

            
        }

    }else{
        h2.innerText=`Game Over at ${level} ! Press any key To start`;
        document.querySelector("body").style.color="red";
        setTimeout(function(){
            document.querySelector("body").style.color="black";
            // document.querySelector("body").style.backgroundColor=" linear-gradient(135deg, #81FFEF 10%, #F067B4 100%)";

        },500);
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
function btnpress(){
    console.log("btns was pressed !");
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkbtn(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}