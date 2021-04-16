import React from 'react'
import img from './img/character.png'

/* 
audio = new Audio('audioTest');

audio.addEventListener('ended',function(){
  audio.src = "new url";
  audio.pause();
  audio.load();
  audio.play();
});*/

const Game = () => {
  return (
    <section className='game-container'>
      <img src={img} ></img>
    </section>
  )
}

export default Game
