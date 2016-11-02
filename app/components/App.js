import React from 'react';
import Navbar from './navbar/NavbarContainer'


export default ({children}) => {
    return (
          <div>
            <Navbar />
            {children}
          </div>
    )                                                                     
}
