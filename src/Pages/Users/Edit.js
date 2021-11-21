import React, {useState, useEffect} from 'react';
import './Edit.css';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Edit = () => {
    let history = useHistory();
    let {id} = useParams();

    const [user, setUser] = useState({
        "Invoice_Number": '',
        "Bill_Value": '',
        "IFSC_Code": '',
        "Account_Number": '',
        "Full_Invoice_Details": '' 
    })

    const { Invoice_Number, Bill_Value, IFSC_Code, Account_Number, Full_Invoice_Details } = user;

    const inputChangeHandler =(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        LoadUser();
    }, [])


    const onSubmitHandler= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3004/users/${id}`, user);
        history.push('/Leads');
    }

    const LoadUser = async()=>{
        const data = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(data.data)
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '1rem auto' }}>Invoice Details Form</h1>
        <div className="container-contact">
            <div className="wrap-contact">
            <form
                name="contact"
                className="contact-form validate-form"
                onSubmit={(e)=>onSubmitHandler(e)}
            >
                <div
                className="wrap-input validate-input"
                data-validate="Please enter the Invoice Number"
                >
                <input
                    className="input"
                    type="text"
                    name="Invoice_Number"
                    placeholder="Invoice Number"
                    value = {Invoice_Number}
                    onChange = {(e)=>inputChangeHandler(e)}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter Bill Value"
                >
                <input
                    className="input"
                    type="num"
                    name="Bill_Value"
                    placeholder="Bill Value"
                    value = {Bill_Value}
                    onChange = {(e)=>inputChangeHandler(e)}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter IFSC Code"
                >
                <input
                    className="input"
                    type="text"
                    name="IFSC_Code"
                    placeholder="IFSC Code"
                    value= {IFSC_Code}
                    onChange = {(e)=>inputChangeHandler(e)}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter Account Number"
                >
                <input
                    className="input"
                    type="num"
                    name="Account_Number"
                    placeholder="Account Number"
                    value = {Account_Number}
                    onChange = {(e)=>inputChangeHandler(e)}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter the all other Information related to Invoice"
                >
                <textarea
                    className="input"
                    type="text"
                    name="Full_Invoice_Details"
                    placeholder="Full Invoice Details"
                    value = {Full_Invoice_Details}
                    onChange = {(e)=>inputChangeHandler(e)}
                ></textarea>
                </div>

                <div className="container-contact-form-btn">
                <button type="submit" className="contact-form-btn">
                <span>Submit</span>
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Edit
