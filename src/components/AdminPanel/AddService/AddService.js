import React, { useState } from 'react';
import "./AddService.css";
// import { UserContext } from '../../../App';
import logo from "../../Resources/images/logos/logo.png";
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import { AiOutlineCloudUpload } from 'react-icons/ai';







const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: 'none',
    boxShadow: "2px 0px 0px 0px lightGray"
}
const AddService = () => {
    
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);


    const handleBlur = e => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(service);
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('http://localhost:5000/addService', {
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
                <div className="col-md-3">
                    <img style={{ width: "110px" }} src={logo} alt="" />
                </div>
                <div className="col-md-5">
                    Add Service
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
                    <form onSubmit={handleSubmit} className="addServiceForm ">
                        <div className="container row d-flex justify-content-start addingService">
                            <div className="form-group col-md-6">
                                <label><small><b>Service Title</b> </small> </label>
                                <input onBlur={handleBlur} type="text" name="title" className="form-control" placeholder="Enter title" />
                            </div>

                            <div className="form-group col-md-4 uploadIcon">
                                <label className="custom-upload">
                                    <AiOutlineCloudUpload /> Upload icon
                                    <input onChange={handleFileChange} type="file" id="upload" className="form-control" />
                                </label>
                            </div>
                            <div className="form-group col-md-6">
                                <label><small><b>Description</b> </small> </label>
                                <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="30" rows="3" placeholder="Enter Description"></textarea>

                            </div>
                        </div>
                        <div className="container d-flex justify-content-end p-3">
                            <button type="submit" className="btn" style={{ backgroundColor: "#009444", color: "white" }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddService;