import React from 'react'
import { useRef, useState, useEffect } from 'react'




const SoftwareTemplate = ({ software }) => {
  const [hold, setHold] = useState(false)
  const [position, setPosition] = useState({ x: window.innerWidth / 2.5, y: window.innerHeight / 5 }) //rough centering
  const ref = useRef()


  // Monitor changes to position state and update DOM
  useEffect(() => {
    if (ref.current) {
      ref.current.style.left = `${position.x}px`
      ref.current.style.top = `${position.y}px`
    }
  }, [position])

  //updating position on hold
  const onMouseMove = (event) => {
    if (hold) {
      //moving left 
      if (event.movementX <= 0) {
        if (position.x >= 2 ) {
          setPosition({ x: (position.x + event.movementX), y: (position.y + event.movementY) })
        } else if (event.movementX >= 0) {
          setPosition({ x: position.x + event.movementX, y: position.y + event.movementY })
        }
      }
      //moving right
      else if (event.movementX >= 0 ) {
        if (position.x <= window.innerWidth - ref.current.clientWidth - 5) {
          setPosition({x: (position.x + event.movementX),y: position.y + event.movementY})
        } else if (event.movementX <= 0) {
          setPosition({x: position.x + event.movementX, y: position.y + event.movementY})
        }
      }
    }
  }

  return (
    <div className='software-container' id='software-id' ref={ref} onMouseMove={onMouseMove}>
      <header id='software-header-id'
        onMouseDown={() => setHold(true)}
        onMouseUp={() => setHold(false)}>
        <div className='beginning' >
          <p unselectable="on" className='unselectable'>{software.name} { }</p>
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
          {software.app}
        </div>
      </div>
    </div>
  )

}


export default SoftwareTemplate
