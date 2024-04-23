import React from 'react'
import UsersList from '../components/userslist'
import bguser from "../images/bg-image-10.jpg"

const Uzvlerimiz = () => {
  return (
    <>
    <div className='cart'>
    <div className='userbg-img'>
      <img src={bguser} alt='Userbg-img' style={{height:"400px", width:"100%"}}/>
      <div className="user-content">
        
           </div>
  </div>
        <div>
        <UsersList/>
        </div>
    </div>
    </>
  )
}

export default Uzvlerimiz