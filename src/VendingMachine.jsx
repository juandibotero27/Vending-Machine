import React from 'react';
import './VendingMachine.css';
import { Link } from 'react-router-dom';

const VendingMachine = () => {


    return (
        <div>
            <h3><Link to='/soda'>SODA</Link></h3>
            <h3><Link to='/chips' >CHIPS</Link></h3>
            <h3><Link to='/sardines'>FRESH SARDINES</Link></h3>
        </div>
    )
}

export default VendingMachine;