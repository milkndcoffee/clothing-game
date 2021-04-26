import React from 'react'
import { useRef, useState, useEffect } from 'react'




const SoftwareTemplate = ({ software }) => {
  const [hold, setHold] = useState(false)
  const [position, setPosition] = useState({ x: window.screen.availWidth / 2.5, y: window.screen.availHeight / 5 }) //rough centering
  const ref = useRef()

  // Monitor changes to position state and update DOM
  useEffect(() => {
    if (ref.current) {
      ref.current.style.left = `${position.x}px`
      ref.current.style.top = `${position.y}px`
    }
  }, [position])

  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (hold) {
        if (position.x <= (window.screen.availWidth - ref.current.clientWidth -8)) {
          setPosition({
            x: position.x + event.movementX,
            y: position.y + event.movementY
          })
        console.log(ref.current.clientWidth)
        } else if(event.movementX <= 0){
          setPosition({
            x: position.x + event.movementX,
            y: position.y + event.movementY
          })
        }
        
      
    }
  }

  return (
    <div className='software-container' id='software-id' ref={ref} onMouseMove={onMouseMove}>
      <header id='software-header-id'
        onMouseDown={() => setHold(true)}
        onMouseUp={() => setHold(false)}>
        <div className='beginning' >
          <p unselectable="on" className='unselectable'>{software.name} {}</p>
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
