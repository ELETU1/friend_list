import React from 'react'

const Friend = ({name}) => {
  return (
    <>
      {name.map( (d) =>{
        return (
            <>
            <div className='friend'>
                <h2>{d.name}</h2>
            </div>
            </>
        )
      } )}
      </>
  )
}

export default Friend;
