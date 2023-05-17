import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {

    const {_id, title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{price}</p>
            </div>
            <div className="text-center">
                <Link to={`/service/${_id}`}><button className="mb-5 btn w-1/3">Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServicesCard;