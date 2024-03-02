// let userscore=0;
// let compscore=0;

// const choices=document.querySelectorAll(".choice");

// choices.forEach((choice) => {
//     console.log(choices);
//     choices.addEventListener("click",()=>{
//         const userId=choise.getAttribute("id");
//         console.log("choice was clicked ",userId);
        
//     });
// });
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userscore1=document.querySelector("#user-score");
const compscore2=document.querySelector("#comp-score");
choices.forEach((choice) => {
    console.log(choices);
    choice.addEventListener("click", () => {
        const userId = choice.getAttribute("id");
        console.log("choice was clicked ", userId);
        playgame(userId);

    });
});

const draw=()=>{
    console.log("game was draw ");
    msg.innerText="Game was Deaw !Play again";
    msg.style.backgroundColor="#081b31";
}
const playgame=( userId)=>{
console.log(" user choice =",userId);
//genrate computer choice
const compId=geratecompchoice();
console.log(" comp choice =",compId);
if (userId==compId) {
    draw();

    
}
else{
    let userwin=true;
    if(userId=="rock"){
        // paper ,scissor
    userwin=compId==="paper" ? false:true;
}
else if(userId=="paper"){
    // rock,scissor
    userwin=compId==="scissor" ? false:true;
}
else{
    // rock,paper
    userwin=compId==="rock" ? false:true;

}
showwiner(userwin);
}
}
const geratecompchoice=()=>{
    const option=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return option[random];
}
const showwiner=(userwin)=>{
    if(userwin){
        userScore++;
        userscore1.innerText=userScore;
        console.log("you win the game");
        msg.innerText="You Win !";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscore2.innerText=compScore;
        console.log("you lose the game")
        msg.innerText="You Lose !";
        msg.style.backgroundColor="red";
    }
}