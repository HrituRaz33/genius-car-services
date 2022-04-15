import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='services-title mt-5'>Our Services</h1>
            <dir className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </dir>
        </div>
    );
};

export default Services;