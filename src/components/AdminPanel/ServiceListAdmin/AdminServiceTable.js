import React from 'react';

const AdminServiceTable = ({serviceData}) => {
    console.log(serviceData);
    return (
        <tr>
            <td>{serviceData.name}</td>
            <td>{serviceData.email}</td>
            <td>{serviceData.project}</td>
            <td>{serviceData.description}</td>
            <td>{serviceData.status}</td>
        </tr>
    );
};

export default AdminServiceTable;