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

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure want to delete?")
        if (proceed) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Eddit/Delete</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Job</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {bookings.map((booking, idx) => <BookingsTable
                            key={idx}
                            idx={idx + 1}
                            booking={booking}
                            handleDelete={handleDelete}></BookingsTable>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;