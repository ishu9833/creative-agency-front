import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from "../../Resources/images/logos/logo.png";
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import AdminServiceTable from './AdminServiceTable';


// const serviceTableData = [
//     {
//         id: 1,
//         name: "Kazi Arif",
//         email: "arif.133@gmail.com",
//         service: "Graphic Design",
//         project_details: "Find the best way to look the project",
//         status: "pending"

//     },
//     {
//         id: 2,
//         name: "Ishtaique",
//         email: "ishtiaque.133@gmail.com",
//         service: "Graphic Design",
//         project_details: "Find the best way to look the project",
//         status: "pending"

//     },
//     {
//         id: 3,
//         name: "Mohammad",
//         email: "mohammad.133@gmail.com",
//         service: "Graphic Design",
//         project_details: "Find the best way to look the project",
//         status: "pending"

//     },
// ]

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: 'none',
    boxShadow: "2px 0px 0px 0px lightGray"
}

const ServiceListAdmin = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [serviceTableData, setServiceTableData] = useState([]);
    useEffect( () => {
        fetch('https://mighty-plateau-69732.herokuapp.com/serviceListData')
        .then(res => res.json())
        .then(data => setServiceTableData(data))
    }, [])
    return (
        <>
            <div className="container row p-5">
                <div className="col-md-3">
                    <img style={{ width: "110px" }} src={logo} alt="" />
                </div>
                <div className="col-md-5">
                    Service List
            </div>
                <div className="col-md-5 d-flex justify-content-end">
                    {/* {loggedInUser.name} */}
                </div>
            </div>
            <div class="container row">

                <div className="col-md-3">
                    <SidebarAdmin />
                </div>
                <div style={containerStyle} className="col-md-9 p-5">
                    <table className="table table-borderless">
                        <thead style={{ backgroundColor: "White", borderRadius: "8px" }}>
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceTableData.map(serviceData =><AdminServiceTable serviceData={serviceData}></AdminServiceTable> )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ServiceListAdmin;