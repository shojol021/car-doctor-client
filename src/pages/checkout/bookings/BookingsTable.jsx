

const BookingsTable = ({ booking, idx, handleDelete }) => {
    const {_id, name, email, amount, date, title, img } = booking;

    

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
                <button className="btn btn-sm">Details</button>
            </td>
        </tr>
    );
};

export default BookingsTable;