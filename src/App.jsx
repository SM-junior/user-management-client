
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Card from './components/Card'

function App() {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  return (
    <div>
      <div className='w-5/6 mx-auto py-10'>
        <Link className='hover:text-green-400' to="/add"><span className='text-2xl'>+</span> Add User</Link>
      </div>
      <div className="overflow-x-auto mx-auto w-5/6">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => <Card
                key={user._id}
                user={user}
                users={users}
                setUsers={setUsers}
              ></Card>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
