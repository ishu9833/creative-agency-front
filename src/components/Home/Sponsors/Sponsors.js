import React from 'react';
import netflix from "../../Resources/images/logos/netflix.png";
import airbnb from "../../Resources/images/logos/airbnb.png";
import google from "../../Resources/images/logos/google.png";
import slack from "../../Resources/images/logos/slack.png";
import uber from "../../Resources/images/logos/uber.png";



const Sponsors = () => {
    return (
        <section >
            <div className="row d-flex justify-content-md-around">
                
                    <div> <img style={{width:"100px"}}  src={netflix} alt="" /> </div>
                    <div> <img style={{width:"100px"}} src={google} alt="" /> </div>
                    <div> <img style={{width:"100px"}} src={slack} alt="" /> </div>
                    <div> <img style={{width:"100px"}} src={airbnb} alt="" /> </div>
                    <div> <img style={{width:"100px"}} src={uber} alt="" /> </div>
                
            </div>
        </section>
    );
};

export default Sponsors;