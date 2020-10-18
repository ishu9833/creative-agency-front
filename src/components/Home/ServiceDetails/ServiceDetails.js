import React from 'react';
import "./ServiceDetails.css";
import { useHistory } from 'react-router-dom';

const ServiceDetails = ({ service, handleAddServiceTitle}) => {

    const history = useHistory();
    const handleClientProfile = () => {
        history.push("/orders")
    }
    return (
        <div className="col-md-3 text-center ml-5 ourServices"  onClick={handleClientProfile} >
            {

                service.image ?
                <img className="logo" style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`}  alt="" />
                :
                <img className="logo" style={{ height: '50px' }} src={`https://mighty-plateau-69732.herokuapp.com/${service.img}`}  alt="" />

            }
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <p onClick={() => handleAddServiceTitle(service)} className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetails;


