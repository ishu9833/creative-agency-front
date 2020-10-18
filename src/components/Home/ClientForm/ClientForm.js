import React from 'react';
import "./ClientForm.css";
const ClientForm = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center mt-5 form-body">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h4 style={{ color: 'black' }}>Let us handle your <br /> project <b><span style={{ color: "#7ab259" }}>professionally</span></b></h4>
                <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder=" Your email Address *" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your name/ company's name *" />
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message *"></textarea>
                    </div>
                    <div className="form-group text-left">
                        <button type="button" className="btn btn-dark"> Submit </button>
                    </div>
                </form>
            </div>
            <div className="copyRight col-md-4 col-sm-6 col-12 offset-md-4  mt-3">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </main>
    );
};

export default ClientForm;