import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import './User.css'

const User = () => {

    const [user, setUser] = useState({
        "name": '',
        "mobile": '',
        "email": '',
        "message": '' 
    })

    const { name, mobile, email, message } = user;

    const {id} = useParams();

    useEffect(() => {
        LoadUser();
    }, [])

    const LoadUser = async()=>{
        const data = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(data.data)
    };

    return (
        <div className="user">
            {<div className="user-card">
                <h3>Name: {name}</h3>
                <h3>Email id: {email}</h3>
                <h3>Contact no.: {mobile}</h3>
                <h3>Message: </h3>
                <h4>{message}</h4>
            </div>}
        </div>
    )
}

export default User
