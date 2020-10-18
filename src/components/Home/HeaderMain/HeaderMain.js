import React from 'react';
import { Link } from 'react-router-dom';
import frame from "../../Resources/images/logos/Frame.png";
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: 'black'}}>Let's Grow Your <br/> Brand To The <br/> <b><span style={{color:"#7ab259"}}>Next Level</span></b></h1>
                <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/" ><button className="text-center text-white" style={{backgroundColor:"black", width:"120px", border:"none", borderRadius:"5px"}}>Hire us</button> </Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;