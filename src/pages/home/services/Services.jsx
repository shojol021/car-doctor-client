import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [Services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="my-12">
            <div className="text-center mb-6">
                <h3 className='text-orange-500'>Services</h3>
                <h2 className='text-3xl'>Our Service Area</h2>
                <p className="text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-2 mx-32">
                {
                    Services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;