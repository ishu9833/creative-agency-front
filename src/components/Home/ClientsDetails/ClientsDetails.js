import React from 'react';

const ClientsDetails = ({ clientsFeed }) => {
    return (
        <div className="col-md-4 text-center" >
            <div style={{display:"inline-flex"}} >
                <img className=" mt-3" style={{ height: '50px' }} src={clientsFeed.img} alt="" />
                <h6 className="mt-4 ml-2 mb-3"> <b>{clientsFeed.name}</b> <br /><p><small>{clientsFeed.title}</small></p></h6>
            </div>
            <p className="text-secondary">{clientsFeed.description}</p>
        </div>
    );
};

export default ClientsDetails;