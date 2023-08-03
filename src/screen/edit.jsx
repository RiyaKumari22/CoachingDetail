import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SidebarComponent from '../components/sidebar'
import Spinner from 'react-spinkit';


export default function Edit() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [formdata, setFormData] = React.useState(new FormData())

  React.useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 3000)


  }, [])


  const handleOnInputChange = (e) => {
    if (e.target.name === "myfile") {
      alert(e.target.files.length)
      formdata.append('file', e.target.files[0])
    } else {
      formdata.append(e.target.name,e.target.value);
    }

  }

  function storeDataToAPI(e) {
    e.preventDefault()
    // const apiUrl = 'https://64a2787bb45881cc0ae5305b.mockapi.io/api/v1/books';
    const apiUrl = 'http://localhost:3001/upload';


    // console.log(JSON.stringify(formData))

    fetch(apiUrl, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: formdata,
    })
      .then(response => {
        if (response.status === 200) {
          console.log('Data stored successfully!');
        } else {
          console.error('Failed to store data. Status code:', response.status);
          response.text().then(errorMessage => {
            console.error('Error message:', errorMessage);
          });
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }

  const formData = {


  };

  // storeDataToAPI(formData);

  return (

    <div className="edit">
      <Navbar />
      <div className="edit__c">
        <SidebarComponent />
        <div className="edit__c-c">
          {
            isLoading
              ?
              <Spinner className='spinner' name="ball-pulse-sync" color='orange' />
              :


              <form className='form' action='https://getform.io/f/dc50b6e7-af85-49cb-8cca-6a4eec264ab6' method='POST' enctype="multipart/form-data">
                <h2>Update My Details</h2>
                <div className="form-row">
                  <div className="form-col">
                    <div className="form__item">
                      <label className='label' htmlFor="name">Name:</label>
                      <input className='input' type="text" name='teacher_name' placeholder='Enter your name' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Gender:</label>
                      <input type="text" className='input' name='gender' placeholder='Enter your Gender' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Course:</label>
                      <input type="text" className='input' name='course' placeholder='Enter your Course' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Phone number:</label>
                      <input type="number" className='input' name='phone' placeholder='Enter your number' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Present Address:</label>
                      <input type="text" name='address' className='input' placeholder='Enter your address' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Fee per hour:</label>
                      <input type="number" className='input' name='feeph' placeholder='Enter your fee-per-hour' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Qualification details:</label>
                      <input type="text" name='qualification' className='input' placeholder='Enter your qualification' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Terms & Conditions:</label>
                      <input type="text" name='terms' className='input' placeholder='Enter terms & conditions' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' for="upload"> Add File:</label>
                      <input className='input' type="file" name="myfile" onChange={handleOnInputChange} />
                    </div>
                  </div>
                  <div className="form-col">
                    <div className="form__item">
                      <label className='label' htmlFor="name">Date-Of-Birth:</label>
                      <input type="date" name='dob' className='input' placeholder='' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">City:</label>
                      <input type="text" name='city' className='input' placeholder='Enter your city' onChange={handleOnInputChange} />
                    </div>

                    <div className="form__item">
                      <label className='label' htmlFor="name">Email:</label>
                      <input type="text" name='email' className='input' placeholder='Enter your email' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Alternate Phone number:</label>
                      <input type="number" name='altphone' className='input' placeholder='Enter your alternate number' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Visiting range:</label>
                      <input type="text" name='range' className='input' placeholder='Enter your range' onChange={handleOnInputChange} />
                    </div>

                    <div className="form__item">
                      <label className='label' htmlFor="name">Fee per month:</label>
                      <input type="number" name='feepm' className='input' placeholder='Enter your fee-per-month' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' htmlFor="name">Teaching Experience (in years):</label>
                      <input type="text" name='teacher_experience' className='input' placeholder='Enter your teaching experience' onChange={handleOnInputChange} />
                    </div>

                    <div className="form__item">
                      <label className='label' htmlFor="name">Choose Class:</label>
                      <input className='input' name='class' type="number" placeholder='Select' onChange={handleOnInputChange} />
                    </div>
                    <div className="form__item">
                      <label className='label' for="upload"> Add Image:</label>
                      <input className='input' type="file" name="Image" onChange={handleOnInputChange} />
                    </div>
                  </div>

                  <div className="form-col" style={{ width: "100%" }}>
                    <div className="form__item">
                      <label className='label' htmlFor="name">About yourself:</label>
                      <textarea type="text" name='bio' className='input' rows={5} placeholder='Write here...' onChange={handleOnInputChange} />
                    </div>
                  </div>
                </div>


                <button type="submit" className='form-submit' onClick={storeDataToAPI}>Submit</button>
              </form>
          }
        </div>
      </div>
    </div>
  )
}
