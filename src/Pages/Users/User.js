import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './User.css'

const User = () => {

    const [user, setUser] = useState({
        "Invoice_Number": '',
        "Bill_Value": '',
        "IFSC_Code": '',
        "Account_Number": '',
        "Full_Invoice_Details": '' 
    })

    const { Invoice_Number, Bill_Value, IFSC_Code, Account_Number, Full_Invoice_Details } = user;


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
                <h3>Invoice Number: {Invoice_Number}</h3>
                <h3>Bill value: {Bill_Value}</h3>
                <h3>IFSC Code.: {IFSC_Code}</h3>
                <h3>Account Number: {Account_Number}</h3>
                <h3>Full Invoice Details: </h3>
                <h4>{Full_Invoice_Details}</h4>
                <br/>  
                <div className="LeadPage"><Link to="/Leads">Back to leads page</Link></div>
            </div>}
            
        </div>
    )
}

export default User
