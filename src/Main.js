import React, { useState } from 'react';
import App from './App';
import Page2 from './Page2';

function Main() {
  const [showPage2, setShowPage2] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPage2(!showPage2)}>
        {showPage2 ? 'Volver' : 'Ir a Página 2'}
      </button>
      {showPage2 ? <Page2 /> : <App />}
    </div>
  );
}

export default Main;
