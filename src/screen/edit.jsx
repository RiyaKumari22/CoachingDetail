import React from 'react'
import Navbar from '../components/Navbar'
import SidebarComponent from '../components/sidebar'
import Spinner from 'react-spinkit';

export default function Edit() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {

      setTimeout(() => {
          setIsLoading(false);
      }, 3000)


  }, [])
  return (

    <div className="edit">
      <Navbar />
      <div className="edit__c">
        <SidebarComponent />
        <div className="edit__c-c">
        {
                        isLoading
                            ?
                            <Spinner className='spinner' name="ball-pulse-sync" color='orange'/>
                            :


          <form className='form' action="">
          <h2>Update My Details</h2>
            <div className="form-row">
              <div className="form-col">
                <div className="form__item">
                  <label className='label' htmlFor="name">Name:</label>
                  <input className='input' type="name" placeholder='Enter your name' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Gender:</label>
                  <input type="name" className='input' placeholder='Enter your Gender' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Course:</label>
                  <input type="name" className='input' placeholder='Enter your Course' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Phone number:</label>
                  <input type="tel" className='input' placeholder='Enter your number' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Teaching Experience (in years):</label>
                  <input type="number" className='input' placeholder='Enter your teaching-experience' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Fee per hour:</label>
                  <input type="number" className='input' placeholder='Enter your fee-per-hour' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Qualification details:</label>
                  <input type="name" className='input' placeholder='Enter your qualification' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Visiting range:</label>
                  <input type="name" className='input' placeholder='Enter your address' />
                </div>
              </div>
              <div className="form-col">
                <div className="form__item">
                  <label className='label' htmlFor="name">Date-Of-Birth:</label>
                  <input type="date" className='input' placeholder='' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">City:</label>
                  <input type="name" className='input' placeholder='Enter your address' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Email:</label>
                  <input type="name" className='input' placeholder='Enter your City' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Email:</label>
                  <input type="email" className='input' placeholder='Enter your email' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Alternate Phone number:</label>
                  <input type="tel" className='input' placeholder='Enter your alternate number' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Present Address:</label>
                  <input type="name" className='input' placeholder='Enter your address' />
                </div>
             
                <div className="form__item">
                  <label className='label' htmlFor="name">Fee per month:</label>
                  <input type="number" className='input' placeholder='Enter your fee-per-month' />
                </div>
                <div className="form__item">
                  <label className='label' htmlFor="name">Terms and Conditions:</label>
                  <input type="name" className='input' placeholder='Enter your Terms & Conditions' />
                </div>
              </div>

              <div className="form-col" style={{ width: "100%" }}>
                <div className="form__item">
                  <label className='label' htmlFor="name">About yourself:</label>
                  <textarea type="name" className='input' rows={5} placeholder='Write here...' />
                </div>
              </div>
            </div>


            <input type="submit" className='form-submit' value="Submit"></input>
          </form>
}
        </div>
      </div>
    </div>
  )
}
