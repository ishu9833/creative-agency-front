import React from 'react';
import "./SidebarAdmin.css";
import { Link } from "react-router-dom";
import { GrServicePlay } from 'react-icons/gr';
import { BiAddToQueue } from 'react-icons/bi';
import { IoIosPersonAdd } from 'react-icons/io';

const SidebarAdmin = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "50vh" }}>
            <form>
                <ul className="list-unstyled">
                    <li><Link className="text-black" to="/serviceAdmin"> <GrServicePlay/> Service List</Link> </li>
                    <li><Link className="text-black" to="/addServices"><BiAddToQueue/> Add Service</Link></li>
                    <li><Link className="text-black" to="/makeAdmin"><IoIosPersonAdd/> Make Admin</Link></li>
                </ul>
            </form>
        </div>
    );
};

export default SidebarAdmin;