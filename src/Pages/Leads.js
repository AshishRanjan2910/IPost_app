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

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:3004/users/${id}`);
        LoadUsers();
    }

    // LoadUsers();

    return (
        <div className="Leads">
            <h1>Claimed Invoices</h1>
            <div className="user-cards">
                {
                    users.map((user)=>(
                        <div className="user-card" key = {user.id}>
                            <h3>Invoice Number: {user.Invoice_Number}</h3>
                            <h3>Bill Value: {user.Bill_Value}</h3>
                            <h3>IFSC Code: {user.IFSC_Code}</h3>
                            <h3>Account Number: {user.Account_Number}</h3>
                            <h3>Full Invoice Details: </h3>
                            <h4>{user.Full_Invoice_Details}</h4>
                            <h3>Previous Existence: {user.prevExistence}</h3>
                            <div className="user-options">
                                <Link to = {`/user/${user.id}`}>View</Link>
                                {/* <Link to = {`/user/edit/${user.id}`}>Edit</Link>
                                <Link onClick = {()=>deleteUser(user.id)}>Delete</Link> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Leads
