import React from 'react'

const Card_character = ({character}) => {

  
  const getRandomCharacter=(arr)=>{
    const indexRandom=Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  const indexCharacter=getRandomCharacter(character)
  console.log(indexCharacter)
  return (
    <div className='card'>
        <img src={`${indexCharacter?.thumbnail.path}.${indexCharacter?.thumbnail.extension}`} alt="" />
        <div className="body-card">
            <div className="body-text">
                <ul>
                    <li><span>Name: </span>{indexCharacter?.name}</li>
                    <li><span>Description: </span>{indexCharacter?.description}</li>
                </ul>
            </div>
        </div>
    </div>

    







  )
    
    
    

  
   
}

export default Card_character