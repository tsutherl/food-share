import React from 'react';
import Controls from './controls/Controls'


export default ({children}) => {
    return (
          <div>
            <Controls />
            {children}
          </div>
    )                                                                     
}
