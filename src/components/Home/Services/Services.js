import React, { useContext, useEffect, useState } from 'react';
import "./Services.css";
import service1 from "../../Resources/images/icons/service1.png";
import service2 from "../../Resources/images/icons/service2.png";
import service3 from "../../Resources/images/icons/service3.png";
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { UserContext } from '../../../App';
// import service4 from "../../Resources/images/icons/service4.png";
// import service5 from "../../Resources/images/icons/service5.png";






const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    const {serviceTitle, setServiceTitle} = useContext(UserContext); 

    const handleAddServiceTitle = (service) => {
        setServiceTitle(service);
    }

    useEffect( () => {
        fetch('https://mighty-plateau-69732.herokuapp.com/service')
        .then( res => res.json())
        .then(data => setServiceData(data))
    })
    return (
        <div>
            <section className="services-container mt-5">
            <div className="text-center">
                <h4><b>Provide awesome <span style={{color: '#7ab259'}}>service</span></b> </h4>
            </div>
            <div className="d-flex justify-content-center">
            <div className="col-md-10 w-75 row mt-5 pt-5 main-service">
                {
                    serviceData.map(service => <ServiceDetails handleAddServiceTitle={handleAddServiceTitle} service={service} key={service.title}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
        </div>
    );
};

export default Services;