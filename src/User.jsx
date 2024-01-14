import { useEffect, useState } from "react";
import Friend from "./Friend";
export default function User(){
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    return(
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map((user) => <Friend friend={user} />)
            }
            
        </div>
    )
}