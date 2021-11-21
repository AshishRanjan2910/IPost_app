import React from 'react';
import './FIs.css'

const FIs = () => {
    return (
        <div>
            <main>
                <div>
                    <section className="cards">
                        <div className="container">
                            <div class="card">
                                <i class="fa fa-signal fa-5x"></i>
                                <h3>Cash Flow with improved Invoice management</h3>
                                <p>Now, you just have to upload Outstanding Bil to avail the feature of Invoice Discounting by premium Financial Institution. to The funds free recover your cash flow position and the extra working capital formed allows your business to rise.</p>
                            </div>
                            <div className="card">
                                <i class="fa fa-signal fa-5x"></i>
                                <h3>One platform for all Financial Institution</h3>
                                <p> Select any of the premium Financial Institution and get to know the benefits, they are providing with Invoice Discounting. The service is managed on a confidential basis yet managed by all Financial Institution at a time.</p>
                            </div>
                            <div className="card">
                                <i class="fa fa-signal fa-5x"></i>
                                <h3>Enhance relationship with customer with ease</h3>
                                <p>Large number of human resources gets managed by Invoice Discounting. You remain in interaction with your customers with them ignorant of the capital agreement.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="CR">
                <p>TVS Credit copyright<sup>&copy;</sup> 2021</p>
            </footer>
        </div>
    )
}

export default FIs




// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// const FIs = () => {

//     render(){
//         let itemList = this.props.items.map(item=>{
//             return(
//                 <div className="card" key={item.id}>
//                     <div className="card-image">
//                         <img src={item.img} alt={item.title}/>
//                         <span className="card-title">{item.title}</span>
//                         <Link to="/Invoice" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
//                     </div>
//                     <div className="card-content">
//                         <p>{item.desc}</p>
//                         <p><b>Price: INR {item.price}</b></p>
//                     </div>
//                 </div>
//             )
//         })

//         return(
//             <div className="container">
//                 <h3 className="center">Available Financial Institutions</h3>
//                 <div className="box">
//                     {itemList}
//                 </div>
//             </div>
//         )
//     }
// }

// export default FIs
