import React, { useState } from "react";
import SoftwareTemplate from "./SoftwareTemplate";

const SoftwareGrid = ({ softwares }) => {
  //TODO: make onclick appear software. maybe rerender it on screen.

  const [visibility, setVisibility] = useState(false);

  const changeVisibility = () =>{
    console.log(visibility)
    if (visibility){
      setVisibility(false);
    } else{
      setVisibility(true);
    }
  }

  const hideItem = {
    display: 'none'
  }
  const showItem = {
    display: 'block'
  }

  return (
    
    <div className="software-grid-container">
      {softwares.map((software) => (
        <>
        <div className="thumbnail-container" onClick={() => changeVisibility()}>
          <img className="thumbnail-template" alt={software.thumbnail_alt}></img>
          <p>{software.name}</p>
        </div>
        <div style={visibility ? showItem : hideItem} >
        <SoftwareTemplate software={software} />
      </div>
      </>
      ))}
    </div>
  );
};

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
export default SoftwareGrid;
