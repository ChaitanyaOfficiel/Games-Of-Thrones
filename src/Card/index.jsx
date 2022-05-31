import{useState} from 'react'
function Card({family, info}) {
const [name, setName] = useState([])
useEffect(() => {
  const infoData = () => {
    info.some((item) => {
      if(item.family === family || item.lastName === family){
       console.log(item.fullName)
       setName(item.fullName)
      }
      return 0
    }
)}
infoData()
},[family])
console.log(name)
return (
<div className="cont-flex">
   
   
      </div>
  )
}

export default Card

