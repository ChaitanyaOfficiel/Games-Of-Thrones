import  {useEffect, useState} from 'react'
import stark from './assets/img/stark.png';
import lannister from  './assets/img/lannister.png';
import targaryen from './assets/img/targaryen.png';
import tyrell from './assets/img/tyrell.png';
import baratheon from './assets/img/baratheon.png';
 import greyjoy from './assets/img/greyjoy.png';
import  Card from './Card/index'
function App() {
  const [info, setInfo] = useState([])
  const [family, setFamily] = useState('')
  // const [name, setName] = useState('')
  // const [title,setTitle] = useState('')
  // const [img, setImg] = useState('')
  // const [house, setHouse] = useState('')
  useEffect(() => {
    const getInfo = async () => {
        const url = 'https://thronesapi.com/api/v2/Characters'
        const  res = await fetch(url)
        const data = await res.json()
     setInfo(data);
    }
    getInfo()
  }, [])

  return (
    <>
  <div className="container">
      <h1 className="game">Game of Thrones</h1>
      <li className='si-cont'>
     <img className='icon' src={stark} alt="stark" onClick={() => {setFamily('Stark')}} /> 
     <img className='icon' src={lannister} alt="lannister" onClick={() => {setFamily('Lannister')}}/> 
     <img className='icon' src={targaryen} alt ="targaryen" 
     onClick={() => {setFamily('House Targaryen')}}
     />
     <img className='icon' src={tyrell} alt='tyrell' 
     onClick={() => {setFamily('Tyrell')}}
     />
   <img className='icon' src={baratheon} alt='baratheon' 
     onClick={() => {setFamily('Baratheon')}}
     />
<img className='icon' src={greyjoy} alt='greyjoy' 
     onClick={() => {setFamily('Greyjoy')}}
     />
   </li>
    </div>
<Card family={family} info={info} /> 
    </>
  );
}

export default App;
 
