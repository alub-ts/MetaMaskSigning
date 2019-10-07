import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <button
        onClick={() =>
          window.web3.eth.getBalance(
            '0xab7c74abC0C4d48d1bdad5DCB26153FC8780f83E',
            (error, result) => {
              console.log(error);
              console.log(result.toString(10));
            }
          )
        }
      >
        Test button
      </button>
    </div>
  );
}

export default App;
