let userScore = 0
let compScore = 0

let choices = document.querySelectorAll(".choice")
let msgPara = document.querySelector(".msg")
let buttonColor = document.querySelector(".msg_container")
let userWinScore = document.querySelector("#user_score")
let compWinScore = document.querySelector("#comp_score")

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
});

let playGame = (userChoice) => {
    console.log("user choice :", userChoice )
    const compChoice = getCompChoice()
    console.log("computer choice",compChoice)

    if(userChoice == compChoice){
        draw()
    }else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor"?false:true
        }else{
            userWin = compChoice === "rock"?false:true
        }
        showUser(userWin,userChoice,compChoice)
    }
}

let draw = () =>{
    msgPara.innerText = `Game was Draw!. Play again`
    buttonColor.style.backgroundColor = "gray"
}


let showUser = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++
        userWinScore.innerText = userScore
        msgPara.innerText = `You win!. Your ${userChoice} beats ${compChoice}.`
        buttonColor.style.backgroundColor = "green"
    }else{
        compScore++
        compWinScore.innerText = compScore
        msgPara.innerText = `You lose!. ${compChoice} beats Your ${userChoice}.`
        buttonColor.style.backgroundColor = "red"
    }
}

let getCompChoice = () =>{
    let options = ['rock','paper','scissor']
    arrIdx = Math.floor(Math.random() * 3)
    return options[arrIdx]
}