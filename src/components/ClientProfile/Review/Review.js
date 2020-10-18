import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import logo from "../../Resources/images/logos/logo.png";
import { useForm } from "react-hook-form";




const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: 'none',
    boxShadow: "2px 0px 0px 0px lightGray",
    height:"450px"
}
const Review = () => {
    const { loggedInUser} = useContext(UserContext);
    const [review, setReview] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {

        fetch('https://mighty-plateau-69732.herokuapp.com/userReview', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => setReview(result))
    };



    
    return (
        <>
            <div className="container row p-5">
                <div className="col-md-2">
                    <img style={{ width: "110px" }} src={logo} alt="" />
                </div>
                <div className="col-md-5">
                    Review
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
                        <form onSubmit={handleSubmit(onSubmit)} action="" style={{ width: "50%" }}>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Your name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" name="company" className="form-control" placeholder="Company's name. Designation" ref={register({ required: true })} />
                                {errors.company && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea name="description" className="form-control" id="" cols="30" rows="3" placeholder="Description" ref={register({ required: true })}></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>
                            <div className="form-group text-left">
                                <button type="submit" className="btn btn-dark"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;