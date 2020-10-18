import React from 'react';
import customer1 from "../../Resources/images/customer-1.png";
import customer2 from "../../Resources/images/customer-2.png";
import customer3 from "../../Resources/images/customer-3.png";
import ClientsDetails from '../ClientsDetails/ClientsDetails';
import './ClientFeedback.css';



const clientsTalk = [
    {
        name:"Nash Patrik",
        title: "CEO, Manpal",
        description: "Glad to work with this site. They are great developer i ever seen before . I recommend you all visitors to work with them.",
        img:  customer1,
        id: 1
    },
    {
        name:"Boris Jhonson",
        title: "CEO, Netflix",
        description: "Glad to work with this site. They are great developer i ever seen before . I recommend you all visitors to work with them.",
        img:  customer2,
        id: 2
    },
    {
        name:"Md. Zakir",
        title: "CEO, Arabian",
        description: "Glad to work with this site. They are great developer i ever seen before . I recommend you all visitors to work with them.",
        img:  customer3,
        id: 3
    },
]

const ClientFeedback = () => {
    return (
        <div>
            <section className="services-container mt-5">
                <div className="text-center">
                    <h4><b>Clients <span style={{ color: '#7ab259' }}>Feedback</span></b> </h4>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5 main-service">
                        {
                            clientsTalk.map(clientFeed => <ClientsDetails clientsFeed={clientFeed}></ClientsDetails> )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientFeedback;