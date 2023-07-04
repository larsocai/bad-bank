import React from 'react';
import { UserContext } from '../App';

function Balance() {
  const ctx = React.useContext(UserContext);
  
  return (
    <h1> Balance <br/>
      {JSON.stringify(ctx)}
    </h1>
  );
}

export default Balance;