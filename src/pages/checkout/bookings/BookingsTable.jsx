

const BookingsTable = ({ booking, idx, handleDelete, handleUpdate }) => {
    const {_id, name, email, amount, date, title, img, status } = booking;

    

    return (
        <tr>
            <th>{idx}</th>
            <th className="space-x-4">
                <button className="btn btn-sm btn-prmary btn-square">E</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error btn-square">x</button>
            </th>
            <th>
                <div className="avatar">
                    <div className=" w-16 rounded-xl">
                        <img src={img} alt="" className="avatar" />
                    </div>
                </div>
            </th>
            <th>{name}</th>
            <td>{email}</td>
            <td>{title}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>
                {
                    status? <div className="font-bold text-green-500">Confirmed</div>:
                    <button onClick={() => handleUpdate(_id)} className="btn btn-sm">Confirm</button>
                }
            </td>
        </tr>
    );
};

export default BookingsTable;