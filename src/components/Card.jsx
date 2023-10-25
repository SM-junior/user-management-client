import Swal from 'sweetalert2'
import { FaDeleteLeft, FaPen } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Card = ({ user, users, setUsers }) => {
    const { name, _id, gender, status, email } = user;

    // generating auto serial no
    const serial = users.indexOf(user) + 1

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = users.filter(u => u._id !== _id)
                        setUsers(remaining)
                    })
            }
        })
    }

    return (
        <tr>
            <th>{serial}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td className='flex'>
                <button onClick={() => handleDelete(_id)} className='me-4 text-lg text-red-500 hover:scale-150'><FaDeleteLeft></FaDeleteLeft></button>
                <Link to={`/update/${_id}`}><button className='hover:scale-150'><FaPen></FaPen></button></Link>
            </td>
        </tr>
    );
};

export default Card;