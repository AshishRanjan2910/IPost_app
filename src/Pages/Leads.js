import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Leads.css'

const Leads = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        LoadUsers();
    }, [])

    const LoadUsers = async()=>{
        const data = await axios.get(`http://localhost:3004/users`);
        setUsers(data.data)
    };

    // LoadUsers();

    return (
        <div className="Leads">
            <h1>Leads</h1>
            <div className="user-cards">
                {
                    users.map((user)=>(
                        <div className="user-card" key = {user.id}>
                            <h3>Name: {user.name}</h3>
                            <h3>Email id: {user.email}</h3>
                            <h3>Contact no.: {user.mobile}</h3>
                            <h3>Message: </h3>
                            <h4>{user.message}</h4>
                            <div className="user-options">
                                <h3>View</h3>
                                <h3>Edit</h3>
                                <h3>Delete</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Leads
