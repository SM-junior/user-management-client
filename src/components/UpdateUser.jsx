import { FaAngleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const { _id, name, email } = loadedUser;

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const user = { name, email, gender, status }

        fetch(`http://localhost:3000/users/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'WOW!',
                        text: 'User is updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <>
            <div className="w-5/6 mx-auto flex items-center content-center pt-4 hover:text-green-400">
                <FaAngleLeft></FaAngleLeft>
                <Link to="/">All Users</Link>
            </div>
            <div className="w-5/6 mx-auto">
                <h2 className="text-center text-4xl">Create new user</h2>
                <form onSubmit={handleUpdate} className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' defaultValue={name} className="input input-bordered w-full" />
                    </label>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='email' defaultValue={email} className="input input-bordered w-full" />
                    </label>
                    <div className='text-left mt-4 flex'>
                        <span className='me-10'>Gender</span>
                        <div className=" gap-10">
                            <input type="radio" name="gender" id="male" value='male' className="me-2" />
                            <label htmlFor="male" className="me-4">Male</label>
                            <input type="radio" name="gender" id="female" value='female' className="me-2" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className='text-left mt-4 flex'>
                        <span className='me-10'>Status</span>
                        <div className=" gap-10">
                            <input type="radio" name="status" id="active" value='active' className="me-2" />
                            <label htmlFor="active" className="me-4">Active</label>

                            <input type="radio" name="status" id="inactive" value='inactive' className="me-2" />
                            <label htmlFor="inactive">Inactive</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-accent w-full mt-6">Update user</button>
                </form>
            </div>
        </>
    );
};

export default UpdateUser;