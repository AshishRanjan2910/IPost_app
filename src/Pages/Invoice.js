import React, { useState, useEffect } from 'react';
import './Invoice.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Invoice = () => {
    let history = useHistory();

    const [user, setUser] = useState({
        "Invoice_Number": '',
        "Bill_Value": '',
        "IFSC_Code": '',
        "Account_Number": '',
        "Full_Invoice_Details": '',
        "prevExistence": 'None',
        "blockchain": 'Fine',
        "timestamp": new Date(),
        "previousHash": '',
        "hash": '',
    })

    const [prevUsers, setPrevUsers] = useState([]);

    useEffect(() => {
        LoadPrevUsers();
    }, [])

    const LoadPrevUsers = async()=>{
        const data = await axios.get(`http://localhost:3004/users`);
        setPrevUsers(data.data)
    };

    

    const { Invoice_Number, Bill_Value, IFSC_Code, Account_Number, Full_Invoice_Details} = user;

    const SHA256=require('crypto-js/sha256')

    class Block{
        constructor(index, timestamp, data, previousHash=""){
            this.index=index;
            this.timestamp=timestamp;
            this.data=data;
            this.previousHash=previousHash;
            this.hash=this.calculateHash();
        }

        calculateHash(){
            return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)).toString();
        }
    }

    class Blockchain{
        constructor(){
            this.chain=[this.createGenesisBlock()];
        }

        createGenesisBlock(){
            return new Block(0, "01/01/2021", "Genesis Block", "0");
        }

        getLatestBlock(){
            return (this.chain[this.chain.length-1]);
        }

        addBlock(newBlock){
            newBlock.previousHash=this.getLatestBlock().hash;
            newBlock.hash=newBlock.calculateHash();
            this.chain.push(newBlock);
        }

        isChainValid(){
            for(let i=1;i<this.chain.length; i++){
                const currentBlock=this.chain[i];
                const previousBlock=this.chain[i-1];

                if(currentBlock.hash !== currentBlock.calculateHash()){
                    return false;
                }

                if(currentBlock.previousHash !== previousBlock.hash){
                    return false;
                }
            }
            
            return true;
        }
        isBlockRepeated(){
            const latestBlock=this.chain[this.chain.length-1];
            for(let i=1;i<this.chain.length-2; i++){
                if(this.chain[i].Invoice_Number===latestBlock.Invoice_Number) {
                    return true;
                }
            }
            
            return false;
        }

    }

    let invoiceBlockchain= new Blockchain();
    let i;
    for(i=1; i<prevUsers.length; i++){
        invoiceBlockchain.addBlock(new Block(i, prevUsers.timestamp, prevUsers.Invoice_Number));
    }
    console.log(JSON.stringify(invoiceBlockchain, null, 4));
    

    const onChangeHandler =(e)=>{
        setUser({...user,[e.target.name]: e.target.value});
    }

    const onSubmitHandler= async (e)=>{
        invoiceBlockchain.addBlock(new Block(i, user.timestamp, user.Invoice_Number));
        if(invoiceBlockchain.isChainValid()){
            setUser({...user,blockchain: 'Error Initiated'});
        }
        if(invoiceBlockchain.isBlockRepeated()){
            setUser({...user,prevExistence: 'Yes'});
        }
        let ph= invoiceBlockchain.chain[invoiceBlockchain.chain.length-1].previousHash;
        setUser({...user, previousHash: ph});
        let h= invoiceBlockchain.chain[invoiceBlockchain.chain.length-1].hash;
        e.hash=h;
        e.previousHash=ph;
        setUser({...user,hash: h});
        e.preventDefault();
        await axios.post(`http://localhost:3004/users`, user);
        history.push('/SubmitDone');
    }

    return (
        <div>
                <link rel="stylesheet" href="./styles/style.css" type="text/css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="../images/InvoiceCov.jpg" />
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
                    onChange = {(e)=>onChangeHandler(e)}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter IFSC Code"
                >
                <input
                    className="input"
                    type="num"
                    name="Bill_Value"
                    placeholder="Bill value (in INR)"
                    value = {Bill_Value}
                    onChange = {(e)=>onChangeHandler(e)}
                />
                </div>

                <div
                className="wrap-input validate-input"
                data-validate="Please enter bill value"
                >
                <input
                    className="input"
                    type="text"
                    name="IFSC_Code"
                    placeholder="IFSC Code"
                    value= {IFSC_Code}
                    onChange = {(e)=>onChangeHandler(e)}
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
                    onChange = {(e)=>onChangeHandler(e)}
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
                    onChange = {(e)=>onChangeHandler(e)}
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
        <footer className="CR">
            <p>TVS Credit copyright<sup>&copy;</sup> 2021</p>
        </footer>
        </div>
    )
}

export default Invoice
