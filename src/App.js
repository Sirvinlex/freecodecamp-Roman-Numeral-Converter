import React, { useState } from 'react'
import './App.css';
import { convertToRoman } from './func';

function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) =>{
    setValue(e.target.value);
    setResult('');
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const myNum = Number(value);
    if (myNum === '' || myNum === 0 || !myNum) alert('Please enter a valid Number')
    else{
      setResult(convertToRoman(myNum))
    }
    setValue('');
  }

  return (
    <div className="App">
      <p className='title'>Roman Numeral Converter</p>
      <div className='display-div'><p>{result}</p></div>
      <form className='form' onSubmit={handleSubmit}>
        <input className='input' type='input' value={value} placeholder='Type number here' onChange={handleChange} />
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
