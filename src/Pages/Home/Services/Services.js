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
        <div id='services' className='container'>
            <h1 className='text-center mt-5 text-primary'>Our Services</h1>
            <dir className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </dir>
        </div>
    );
};

export default Services;