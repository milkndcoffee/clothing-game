import React from 'react'
import Game from './Game.js';

const SoftwareTemplate = () => {
  return (
    <div className='software-container'>
      <header>
          <div className='beginning'>
            <p>software name</p>
          </div>
          <div className='end'>
            <button>O</button>
            <button>X</button>
          </div>
      </header>
      <div>
        <div className='toolbar'>
          <button>help</button>
        </div>
        <hr />
        <div className='software'>
          <Game />
        </div>
      </div>
    </div>
  )
}


export default SoftwareTemplate
