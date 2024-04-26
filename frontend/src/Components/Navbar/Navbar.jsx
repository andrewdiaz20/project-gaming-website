import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    


<div className='navbar'>


    {/* logo section */}
    <section className='logoSection'> 
  <div>
    <img src="#" alt="logoImage" />
  </div>
    </section>




   {/* search home profile section */}
    <section className='searchHomeProfile'>

   {/* search and home */}
   <div className='searchHome'>

    {/* search */}
    <div className='search-bar-container'>
    
          <input type="text" placeholder="search " className="search" />
          <button className="btnSearch">SEARCH</button>

    </div>

    {/* Home */}
    <div className='home'>
      <a href=""></a>
    <a href="/">Home</a>
    </div>
</div>

{/* profile and  sign in/sign up  */}

<div>
      
</div>
    </section> 

</div> 
  )
}

export default Navbar