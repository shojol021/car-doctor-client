

const BookingsTable = ({ booking, idx }) => {
    const { name, email, amount, date, title, img } = booking;

    return (
        <tr>
            <th>{idx}</th>
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
        </tr>
    );
};

export default BookingsTable;