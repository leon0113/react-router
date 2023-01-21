import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>This is from Friends</h2>
            <p>hello from {users.length}</p>
            {
                users.map(user => <Friend key={user.id} friend={user}></Friend>)
            }
        </div>
    );
};

export default Friends;