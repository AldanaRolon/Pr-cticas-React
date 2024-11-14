import React, { useState } from 'react';
import'./Button.css';
import Page2 from './Page2'

function Button() {

    const [showPage2, setShowPage2] = useState(false);
    const handleButtonClick = () => {
        setShowPage2(true);
      };

    return (
        <div>
            <button onClick={handleButtonClick} className='button'>Continuar</button>
   
            {showPage2 && (
                 <div>
                  <Page2 />
                      <button onClick={() => setShowPage2(false)}>Volver a Página Principal</button>
                 </div>
                 )}
         </div>
        
    );
};

export default Button;
