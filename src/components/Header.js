import React from 'react';

function Header ({titulo}) {
    return ( 
        
        <nav className="app">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo black-text text-darken-2">{titulo}</a>
            </div>
        </nav>
    
    );
}
 
export default Header;