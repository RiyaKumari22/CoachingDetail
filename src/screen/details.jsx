import React from 'react'
import Navbar from '../components/Navbar'
import SidebarComponent from '../components/sidebar'
import Spinner from 'react-spinkit';


export default function Details() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {

      setTimeout(() => {
          setIsLoading(false);
      }, 3000)


  }, [])
  return (
    
       <div className="details">
      <Navbar/>
      <div className="detail__c">
      <SidebarComponent/>
      <div className="detail__c-c">
      {
                        isLoading
                            ?
                            <Spinner className='spinner' name="ball-pulse-sync" color='orange'/>
                            :
      <div className="tcard">
      <div className="tcard-body">
      <h2>Current Details</h2>
      <div className="head">
        <div className="head__img">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0NGNX89GD-iF2DlkwVislMgxyLFv39Bow5HbkrUbkQ&s" alt="img" />

        </div>
         <div className="head__item">
         <h5 class='title'>Name:</h5>
         <h5 class='title'>Date-Of-Birth:</h5>

         <h5 class='title'>Gender:</h5>
         </div>
      </div>
      <div className="section">
        <div className="section__item">
        <h5 className="title">City:</h5>
      <h5 className='title'>Course:</h5>
      <h5 className='title'>Email:</h5>
      <h5 className='title'>Phone number:</h5>
      <h5 className='title'>Alternate Phone number:</h5>
      <h5 className='title'>Teaching Experience:</h5>

        </div>
        <div className="section__item">
        <h5 className='title'>Present Address:</h5>
                  <h5 className='title'>Fee per hour:</h5>
                  <h5 className='title'>Fee per month:</h5>
                  <h5 className='title'>Qualification details:</h5>
                  <h5 className='title'>Terms and Conditions:</h5>
                  <h5 className='title'>About yourself:</h5>

        </div>
     

      </div>

                    </div>
</div>
}
</div>
  </div>
  </div>
  )
}
