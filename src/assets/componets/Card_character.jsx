import React from 'react'

const Card_character = ({character}) => {

   console.log(character)
  return (
    <div className='card'>
        <img src={`${character[2]?.thumbnail.path}.${character[2]?.thumbnail.extension}`} alt="" />
        <div className="body-card">
            <div className="body-text">
                <ul>
                    <li><span>Name: </span>{character[2].name}</li>
                    <li><span>Description: </span>{character[2].description}</li>
                </ul>
            </div>
        </div>
      
    </div>

    







  )
    
    
    

  
   
}

export default Card_character