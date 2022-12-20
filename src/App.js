import { useState, useRef } from 'react';
import { encryptTextFromFile, decryptTextFromFile } from './services/encrypt-decrypt.js'
import './App.css';

function App() {

  const encryptText = () => {
    const actualText = handleClick();
    setUpdated(encryptTextFromFile(actualText));
  }

  const decryptText = () => {
    const actualText = handleClick();
    setUpdated(decryptTextFromFile(actualText));
  }

  const copyText = () => {
    navigator.clipboard.writeText(updated);
    alert('Copied to clipboard succesfully!');
  }

  const inputRef = useRef(null);
  const [updated, setUpdated] = useState('')
  const handleClick = () => {
    setUpdated(inputRef.current.value);
    return inputRef.current.value;
  }

  

  return (
    <div className="App">
      <div className='header'>
        <img src={require('./img/alura-logo.png')} alt='alura-logo'></img>
        <header> Codificador - Decodificador </header>
      </div>
      <div className='flex-container'>
        <div className='input-box'>
          <textarea ref={inputRef} placeholder='Ingresa el texto aquí' className='input-field'></textarea>
          <div className='input-buttons'>
            <button id='encrypt' onClick={encryptText}> Encriptar </button>
            <button id='decrypt' onClick={decryptText}> Desencriptar </button>
          </div>
        </div>
        <div className='output-box'>
          <textarea placeholder='El resultado se verá aquí' className='output-field' value={updated} readOnly></textarea>
          <div className='output-buttons'>
            <button id='copy' onClick={copyText}> Copiar </button>
          </div>
        </div>
      </div>
      <div className='footer'>
        <footer> Made with {"<3"} by MoodzUnl </footer>
      </div>
    </div>
  );
}

export default App;
