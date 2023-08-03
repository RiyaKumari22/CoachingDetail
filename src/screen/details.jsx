import React, { useEffect, useState } from "react"
import Navbar from '../components/Navbar'
import SidebarComponent from '../components/sidebar'
import Spinner from 'react-spinkit';
import { customRequest } from "../utility/request";


export default function Details() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {


  }, [])
  const [users, setUsers] = useState([])
  const fetchUserData = () => {
    // fetch("https://64a2787bb45881cc0ae5305b.mockapi.io/api/v1/books", { method: "GET" })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log(data[data.length - 1]);
    //     setIsLoading(false);  
    //     setUsers(data[data.length - 1])
    //   })

    customRequest('https://64a2787bb45881cc0ae5305b.mockapi.io/api/v1/books').then(res => {
      setIsLoading(false);
      setUsers(res[res.length - 1]) 
    })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files[0]);
      setFile("https://64a2787bb45881cc0ae5305b.mockapi.io/api/v1/books".createObjectURL(e.target.files[0]));}
  // const [imageData, setImageData] = useState('');

  // useEffect(() => {
 
  //   fetch('https://64a2787bb45881cc0ae5305b.mockapi.io/api/v1/books')
  //     .then(response => response.blob()) 
  //     .then(blob => {
       
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImageData(reader.result); 
  //       };
  //       reader.readAsDataURL(blob);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  


  return (

    <div className="details">
      <Navbar />
      <div className="detail__c">
        <SidebarComponent />
        <div className="detail__c-c">
          {
            isLoading
              ?
              <Spinner className='spinner' name="ball-pulse-sync" color='orange' />
              :
              <div className="tcard">
                <div className="tcard-body">
                  <h2>Current Details</h2>
                  <div className="head">
                    <div className="head__img">
                      <img src={file} alt="img" />

                    </div>
                    <div className="head__item">
                   
                        <h5 class='title'>Name: {users.teacher_name.toString().trim()}</h5>
                            <h5 class='title'>Date-Of-Birth: {users.dob.toString().trim()}</h5>
                     <h5 class='title'>Gender: {users.gender.toString().trim()}</h5>
                    </div>
                  </div>
                  <div className="section">
                    <div className="section__item">
                      <h5 className="title">City: {users.city.toString().trim()}</h5>
                      <h5 className='title'>Course: {users.course.toString().trim()}</h5>
                      <h5 className='title'>Email: {users.email.toString().trim()}</h5>
                      <h5 className='title'>Phone number: {users.phone.toString().trim()}</h5>
                      <h5 className='title'>Alternate Phone number: {users.altphone.toString().trim()}</h5>
                      <h5 className='title'>Teaching Experience: {users.teacher_experience.toString().trim()}</h5>



                    </div>
                    <div className="section__item">
                      <h5 className='title' >Present Address:  {users.address.toString().trim()}</h5>
                      <h5 className='title'>Fee per hour:{users.feeph.toString().trim()}</h5>
                      <h5 className='title'>Fee per month:{users.feepm.toString().trim()}</h5>
                      <h5 className='title'>Qualification details:{users.qualification.toString().trim()}</h5>
                      <h5 className='title'>Terms and Conditions:{users.terms.toString().trim()}</h5>
                      <h5 className='title'>Visiting range:{users.range.toString().trim()}</h5>

                    </div>
                    <div className="section__item-i">
                      <h5 className='title'>About Yourself:{users.bio.toString().trim()}</h5>

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
