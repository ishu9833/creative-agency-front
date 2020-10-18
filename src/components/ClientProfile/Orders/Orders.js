import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import logo from "../../Resources/images/logos/logo.png";
import { AiOutlineCloudUpload } from 'react-icons/ai';
import "./Orders.css";
import { useForm } from "react-hook-form";






const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: 'none',
    boxShadow: "2px 0px 0px 0px lightGray"
}

const Orders = () => {
    const { loggedInUser, serviceTitle } = useContext(UserContext);
    // console.log(serviceTitle.title);
    const [order, setOrder] = useState({});
    const [file, setFile] = useState(null);


    const handleBlur = e => {
        const newService = { ...order };
        newService[e.target.name] = e.target.value;
        setOrder(newService);
    }


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(order);
        formData.append('file', file);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('project', order.project);
        formData.append('price', order.price);
        formData.append('description', order.description);

        fetch('https://mighty-plateau-69732.herokuapp.com/userProject', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            });
            e.preventDefault();
    }
    
    return (

        <>
            <div className="container row p-5">
                <div className="col-md-2">
                    <img style={{ width: "110px" }} src={logo} alt="" />
                </div>
                <div className="col-md-5">
                    Order
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
                    <div className="col-md-12 col-sm-6 col-12">
                        <form onSubmit={handleSubmit} action="" style={{ width: "50%" }}>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" name="name" className="form-control" placeholder=" Your name/ company's name" required />
                                
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="email" name="email" className="form-control" placeholder="Your email address"  required/>
                                
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" name="project" className="form-control"  placeholder="Your Project" defaultValue={serviceTitle.title} required  />
                                
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="30" rows="3" placeholder="Your message" required></textarea>
                                
                            </div>
                            <div className="form-group d-flex justify-content-between twice-input">
                                <input onBlur={handleBlur}  type="text" name="price" className="form-control col-md-3" placeholder="Price" required />
                                
                                <label className="custom-upload">
                                   <AiOutlineCloudUpload/> Upload image
                                    <input onChange={handleFileChange} type="file" name="file" id="upload" className="form-control col-md-3" required />
                                </label>
                                
                            </div>
                            <div className="form-group text-left">
                                <button type="submit" className="btn btn-dark"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Orders;