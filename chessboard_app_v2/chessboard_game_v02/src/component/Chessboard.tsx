import React from 'react';
import './Chessboard.css'

export default Chessboard;
//create array with tiles 
const LetterTiles = ['a', 'b', 'c', 'd', 'e','f','g','h'];
const NumberTiles = ['1', '2', '3', '4', '5','6','7','8']

function Chessboard(){
 // render tiles with 2 for loops
 let board = [];

 //letterTiles for loop, render tiles so that the numbers and letters reads correct, from top left to bottom right
for (let j = NumberTiles.length-1; j >= 0; j--) //numbertiles so that it renders one number with diff letters first.
 {
  for (let i = 0; i < LetterTiles.length; i++) {
    //add number and position index to give a tile a color, result of index: even  = black, odd = white.
    const numberIndex = j+i + 2 // +2 to start from count number 2 (sinxe 1 + 1 = 2)

    //check if numberIndex is modulus 2.
    if (numberIndex % 2 === 0){
      board.push(<div className='tile_black'>{LetterTiles[i]}{NumberTiles[j]} </div>) //renders the axisis, span needs to be written exactly like that, otherwise the numbering looks weird
    } else {
      board.push(<div className='tile_white'>{LetterTiles[i]}{NumberTiles[j]} </div>) //renders the axisis, span needs to be written exactly like that, otherwise the numbering looks weird
    }
   
  }
 }
  
  
  
  
  
  return <>
  
   <div id="board"> {board}</div>
  </>

  

}