import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
    const serviceInfo = useLoaderData()
    const {user} = useContext(AuthContext)
    console.log(serviceInfo)
    const {_id, title, img, price } = serviceInfo

    const handleCheckout = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const amount = form.amount.value;
        console.log(name, date, email, amount)

        const order = {
            name, date, email, amount, img, title
        };

        fetch(`http://localhost:5000/booking`, {
            method: 'post',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('Booked')
            }
        })
    }
    return (
        <form onSubmit={handleCheckout}>
            <div className="flex justify-center">
                <img src={img} alt="" className="w-96 rounded-md" />
            </div>
            <div className="flex justify-center items-center">
                <div className="space-y-4">
                    <div className="flex space-x-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" placeholder="Type here" name='name' className="input input-bordered w-[400px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="Type here" name='date' className="input input-bordered w-[400px]" />
                        </div>
                    </div>
                    <div className="flex space-x-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Type here" name='email' defaultValue={user.email} className="input input-bordered w-[400px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="number" placeholder="Type here" name='amount' defaultValue={price} className="input input-bordered w-[400px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-5">
                <button type="submit" className="btn w-3/4">Book Now</button>
            </div>
        </form>
    );
};

export default Checkout;