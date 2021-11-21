import React from 'react'

const Home = () => {
    return (    
        <div>
            <header className="InvoiceCov">
                <div className="container">
                        <h1>Invoice Discounting made simple!</h1><br />
                        <h2 className="FullForm">IPost: Invoice post Outstanding Sum Total</h2><br/>
                        <p className="des">Invoice financing works in a manner that discounting is provided by a range of lenders. This is provided by those who will offer you a percentage of money possessed on your invoices once they are upraised. This implies that money will go into account instantly. It is irrespective of how long it takes for a customer to recompense after doing invoicing.</p>
                </div>
            </header>
            <link rel="stylesheet" href="./styles/style.css" type="text/css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="../images/InvoiceCov.jpg" />
        
        
            <div className = "newsletter">
            <div className="container">
                <h2>Subscribe to get more information!</h2>
                <form
                    name="subscribe"
                    action = "#"
                >
                    <input
                        className="email"
                        type="email"
                        placeholder="Enter your email address"
                    />

                    <button type="submit" className="btn"><span>Subscribe</span></button>
                </form>
            </div>
            </div>
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
            <footer className="CR">
                <p>TVS Credit copyright<sup>&copy;</sup> 2021</p>
            </footer>
    </div>
    )
}

export default Home
