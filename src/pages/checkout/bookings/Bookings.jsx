import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import BookingsTable from "./BookingsTable";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Job</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {bookings.map((booking, idx) => <BookingsTable key={idx} idx={idx+1} booking={booking}></BookingsTable>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;