import React from 'react';
import Services from '../../Home/Services/Services';
import Orders from '../Orders/Orders';
import Review from '../Review/Review';
import ServiceLists from '../ServiceLists/ServiceLists';
import Sidebar from '../Sidebar/Sidebar';

const ClientProfile = () => {
    return (
        <div>
            <Sidebar/>
            <Orders/>
            <ServiceLists/>
            <Review/>
        </div>
    );
};

export default ClientProfile;