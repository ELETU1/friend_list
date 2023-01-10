import React, { useState } from 'react'
import './App.css'
import Friend from './Friend'

const Data = [
  {
    id: 1,
    name: "Ibn Issa"
  },
  {
    id: 2,
    name: "ELETUTECH"
  },
  {
    id: 3,
    name: "Abu Roslaan"
  },
  {
    id: 4,
    name: "Eletu"
  }
]

const App = () => {
  const [friend, setFriend] = useState(Data)
  return (
    <div className='app'>
      <h3>Number of Friends : {friend.length}</h3>
        <Friend name={friend}/>
      <button className='d' onClick={ ()=> {setFriend([])}}>Clear All</button>
      <button onClick={ ()=> {setFriend(Data)}}>Get All</button>      
    </div>
  )
}

export default App;
