import React from 'react'
import { useSelector } from 'react-redux'

function Navbar  ()  {
    const amount = useSelector(state => state.amount)
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Canara Bank of Vikash</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                   

                </ul>
               <div>
                <button disabled={true} className='btn-primary'>Your Bilance: {amount}</button>
               </div>
            </div>
        </nav>
    )
}

export default Navbar
