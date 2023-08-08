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

 for (let i = 0; i < LetterTiles.length; i++){
  for (let j = NumberTiles.length-1; j >= 0; j++) {
    board.push(<span>{LetterTiles[i]}{NumberTiles[j]} </span>) //renders the axisis, span needs to be written exactly like that, otherwise the numbering looks weird
  }
 }
  
  
  
  
  
  return <>
  
   <div id="board"> {board}</div>
  </>

  

}