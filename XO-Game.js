const statusGame = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
let turn = 'X' ;
const cell = document.querySelectorAll('.cell');
const GameStatus = document.querySelector('.game--status');
const GameRestatrt = document.querySelector('.game--restart');
GameStatus.innerHTML = `It's ${turn}'s turn`;
function Game_Status(arr){
    for(let i=0; i<=6; i=i+3){
        if((arr[i] === arr[i+1]) && (arr[i+1] === arr[i+2]) && (arr[i+2] === 'X')){
            GameStatus.innerHTML = "Player X has won";
            return true;
        }
        else if((arr[i] === arr[i+1]) && (arr[i+1] === arr[i+2]) && (arr[i+2] === 'O')){
            GameStatus.innerHTML = "Player O has won";
            return true;
        }
    }
    for(let i=0; i<=2; i++){
        if((arr[i] === arr[i+3]) && (arr[i+3] === arr[i+6]) && (arr[i+6]=== 'X')){
            GameStatus.innerHTML = "Player X has won";
            return true;
        }
        else if((arr[i] === arr[i+3]) && (arr[i+3] === arr[i+6]) && (arr[i+6] === 'O')){
            GameStatus.innerHTML = "Player O has won";
            return true;
        }
    }
    if(((arr[0] === arr[4]) && (arr[4] === arr[8]) && (arr[8] === 'X')) || ((arr[2] === arr[4]) && (arr[4] === arr[6]) && (arr[6] === 'X'))){
        GameStatus.innerHTML = "Player X has won";
        return true;
    }
    else if(((arr[0] === arr[4]) && (arr[4] === arr[8]) && (arr[8] === 'O')) || ((arr[2] === arr[4]) && (arr[4] === arr[6]) && (arr[6] === 'O'))){
        GameStatus.innerHTML = "Player O has won";
        return true;
    }
    return false;
    
}
let cnt = 0;
for(let i=0; i < cell.length; i++){
    cell[i].addEventListener('click', () => {
        if((statusGame[i] === '') && (!Game_Status(statusGame))){
            if(turn === 'X'){
                cell[i].innerHTML = 'X';
                statusGame[i] = turn;
                cnt++;
                if(Game_Status(statusGame)){
                    return;
                }
                if(cnt === 9){
                    GameStatus.innerHTML = "Game ended in a draw";
                    return;
                }
                turn = 'O';
                GameStatus.innerHTML = `It's ${turn}'s turn`;
            }
            else if (turn === 'O'){
                cell[i].innerHTML = 'O';
                statusGame[i] = turn;
                cnt++;
                if(Game_Status(statusGame)){
                    return;
                }
                if(cnt === 9){
                    GameStatus.innerHTML = "Game ended in a draw";
                    return;
                }
                turn = 'X';
                GameStatus.innerHTML = `It's ${turn}'s turn`;
                            
            }
        }
    })
}
GameRestatrt.addEventListener('click', () => {
    for(let i=0; i<cell.length; i++){
        cell[i].innerHTML = "";
        statusGame[i] = "";
    }
    cnt = 0;
    turn = 'X';
    GameStatus.innerHTML = `It's ${turn}'s turn`;   
})



