import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import ClientForm from '../ClientForm/ClientForm';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OurWorks></OurWorks>
            <ClientFeedback></ClientFeedback>
            <ClientForm></ClientForm>
        </div>
    );
};

export default Home;