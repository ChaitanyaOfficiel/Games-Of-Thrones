import{useState} from 'react'
function Card({family, info}) {
const [name,setName] = useState('')

return (
<div className="cont-flex">
   
   {info.some((item) =>  {
     if(family === ""){
       return 0
     }
      else if (item.family === family || item.lastName === family){
        // when above statement statifies it show character related to the family or their lastName
        console.log(item.fullName)
        // When i console.log the item.fullName it characters 
        setName(item.fullName)
       

    
      }
      return 0
   })}    
      <p>{name}</p>  
      </div>
  )
}

export default Card

