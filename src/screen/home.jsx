import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SidebarComponent from '../components/sidebar';
import Spinner from 'react-spinkit';
// import Details from './details';

export default function HomeScreen() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 3000)


    }, [])

    return (
        <div className="home">
            <Navbar />



            <div className="home__c">
                <SidebarComponent />

                <div className="home__c-c">
                    {
                        isLoading
                            ?
                            <Spinner className='spinner' name="ball-pulse-sync" color='orange'/>
                            :
                            <div className="home__c-c-c">
                                <CardComponent />
                                <CardComponent />
                                <CardComponent />
                                <CardComponent />
                                <CardComponent />
                                <CardComponent />
                            </div>
                    }


                </div>

            </div>
        </div>
    )
}


function CardComponent() {
    return (
        <div class="card" >
            <div class="card-body">
                <h5 class="card-title">Location</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Location of Coaching</h6>
                <p class="card-text"></p>

            </div>
        </div>
    )
}