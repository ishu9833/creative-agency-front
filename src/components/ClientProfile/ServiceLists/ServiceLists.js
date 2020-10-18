import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from "../../Resources/images/logos/logo.png";
import { UserContext } from '../../../App';
// import service1 from "../../Resources/images/icons/service1.png";
// import service2 from "../../Resources/images/icons/service2.png";
// import service3 from "../../Resources/images/icons/service3.png";
// import service4 from "../../Resources/images/icons/service4.png";
// import service5 from "../../Resources/images/icons/service5.png";
import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';

// const ServiceListsData =[
//     {
//         id: 1,
//         img: service1,
//         title:"Web and Mobile design",
//         description:"we craft stunning and amazing web UI, using a well drafted UX to fit your product."
//     },
//     {
//         id: 2,
//         img: service2,
//         title:"Graphic design",
//         description:"Amazing flyers, social media posts and brand  that would make your brand stand out."
//     },
// ]

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: 'none',
    boxShadow: "2px 0px 0px 0px lightGray",
    height: "450px"
}
const ServiceLists = () => {
    const {loggedInUser} = useContext(UserContext);
    const {email} = loggedInUser;
    const [serviceListsData, setServiceListsData] = useState([]);


    useEffect( () => {

    if(email){
        fetch('http://localhost:5000/serviceListData/'+email)
        .then( res => res.json())
        .then( userData => setServiceListsData(userData))
    }
    },[email]);
    return (
        <>
            <div className="container row p-5">
                <div className="col-md-2">
                    <img style={{ width: "110px" }} src={logo} alt="" />
                </div>
                <div className="col-md-5">
                    Service
                </div>
                <div className="col-md-5 d-flex justify-content-end">
                    {loggedInUser.name}
                </div>
            </div>
            <div class="container row">

                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div style={containerStyle} className="col-md-10 p-5">
                     <div  className="row col-md-12 col-sm-6 col-12">
                        {
                            serviceListsData.map(data => <ServiceListDetails serviceListData={data} ></ServiceListDetails> )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceLists;