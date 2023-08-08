import React from 'react'
import './helpbutton.css'
const HelpButton = () => {
    function myfun(){
        alert('Players: Tic-tac-toe is a two-player game. One player will use "X," and the other will use "O."/nStarting the game: Decide who goes first; you can flip a coin, play rock-paper-scissors, or choose any other fair method. The player who goes first will use "X."\nTaking turns: Players take turns placing their symbols ("X" or "O") in an empty cell of the grid. The first player starts by placing their symbol on any empty cell of the 3x3 grid.\nObjective: The goal is to get three of your symbols in a row. This can be achieved horizontally, vertically, or diagonally.\nWinning: The game ends when one player successfully places three of their symbols in a row, and that player wins the game. If all the cells are filled, and neither player has three symbols in a row, the game is a draw.\nDraw (Tie): If all the cells are filled, and neither player has three symbols in a row, the game is a draw. No one wins in this case.\nStrategies: As the game progresses, players should try to block their opponent from getting three in a row while also creating opportunities to get three in a row themselves.\nAnnouncing the Winner: If a player gets three symbols in a row (horizontally, vertically, or diagonally), they should announce "Tic-Tac-Toe!" or simply state that they have won the game.\nStarting a new game: You can play multiple rounds, switching who goes first each time')
    }
  return (
    <div class="button" clasName="App">
        <button variant="container" onClick={myfun}>Help</button>
      </div>
  )
}

export default HelpButton