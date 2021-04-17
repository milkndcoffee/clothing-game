import React from 'react'

const SoftwareGrid = (items) => {
  return (
    <div className='software-grid-container'>
      <p>{items.length} </p>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      <div className='thumbnail-container'>
        <img className='thumbnail-template'></img>
        <p>nyaa</p>
      </div>
      
      
    </div>
  )
}


/* 

{items.softwares.map((software) => (
        <p>asd{software.name}</p>
      ))}


const UserCommentGrid = ({ items }) => {

  return (
    <section className='userCommentGrid'>
      {items.userData.map((item) => (
        <UserComment 
          key={item.id} 
          item={item}
          cardData={<Card data={findCard(item.cardId)} />}

        />
      ))}
    </section>
  )
}
*/
export default SoftwareGrid
