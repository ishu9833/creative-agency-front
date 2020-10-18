import React, { useState } from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import logo from "../../Resources/images/logos/logo.png";
import { useForm } from "react-hook-form";


const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: 'none',
}
const MakeAdmin = () => {
    const [admin ,setAdmin] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => setAdmin(data))
    };
    return (
        <>
            <div className="container row p-5">
                <div className="col-md-3">
                    <img style={{ width: "110px" }} src={logo} alt="" />
                </div>
                <div className="col-md-5">
                    Make Admin
            </div>
                <div className="col-md-5 d-flex justify-content-end">
                    {/* {loggedInUser.name} */}
                </div>
            </div>
            <div class="container row">

                <div className="col-md-3">
                    <SidebarAdmin />
                </div>
                <div style={containerStyle} className=" col-md-9 p-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="addServiceForm d-flex">
                        <input type="email" name="email" className="form-control col-md-6" placeholder="example@gmail.com"ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <button type="submit" className="btn ml-2" style={{ backgroundColor: "#009444", color: "white" }}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;