import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css"

import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GrServices } from 'react-icons/gr';
import { MdRateReview } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "50vh" }}>
            <form>
                <ul className="list-unstyled">
                    <li><Link className="text-black" to="/orders"> <HiOutlineShoppingCart/> Order</Link> </li>
                    <li><Link className="text-black" to="/serviceList"><GrServices/> Service</Link></li>
                    <li><Link className="text-black" to="/review"><MdRateReview/> Review</Link></li>
                </ul>
            </form>
        </div>
    );
};

export default Sidebar;