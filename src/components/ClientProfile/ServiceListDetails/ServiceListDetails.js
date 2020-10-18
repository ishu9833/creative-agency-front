import React from 'react';



const divStyle = {
    border: "none",
    boxShadow: "0px 0px 1px 0px",
    borderRadius: "5px",
    padding: "8px",
    margin: "5px",
    backgroundColor: "white"
}
const ServiceListDetails = ({ serviceListData }) => {
    console.log(serviceListData);
    return (
        <div style={divStyle} className="col-md-5 text-start" >
            <img style={{ height: '50px' }} src={`data:image/png;base64,${serviceListData.image.img}`} alt="" />
            <h5 className="mt-3 mb-3"><b>{serviceListData.title}</b> </h5>
            <p className="text-secondary">{serviceListData.description}</p>
        </div>
    );
};

export default ServiceListDetails;