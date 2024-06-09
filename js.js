let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector ("#reset");
let newGameBtn=document.querySelector("#NewGame");
let msgContainer=document.querySelector(".msgC");
let msg=document.querySelector("#msg");


let turnO=true;
const winPatterens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// const resetGame=()=>{
//     turnO=true;
//     enableBoxes();
//     msgContainer.classList.add("hide")
// }
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log ("box was clicked");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }else{
           box.innerText = "X";
           turnO=true;
       }
       box.disabled=true;
       checkWin();
    } );
});

const disableBoxes =() =>{
    for( let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""  
    }
};
const showWinner=(winner)=>{
msg.innerText=`congratulations, winner is ${winner}`; 
msgContainer.classList.remove("hide");
disableBoxes(); 
}

const  checkWin= ()=>{
    for(let pattern of  winPatterens) {
      
            let pos1Val=boxes [pattern[0]].innerText;
            let pos2Val=boxes [pattern[1]].innerText;
            let pos3Val=boxes [pattern[2]].innerText;
            if (pos1Val !=""&& pos2Val !=""&& pos3Val !="")
            {
                if(pos1Val==pos2Val && pos2Val== pos3Val){
                    console.log("winner",pos1Val);
                      
                    showWinner(pos1Val)
                }


            }

    }


};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);