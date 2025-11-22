import React, { useState } from 'react';
import { useText } from '../context/TextContext';

function TextInput(){
  const { text, setText } = useText();
  const [inputValue, setInputValue] = useState(text || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(inputValue);
  };

  const handleInputChange = (event) => {
    const val = event.target.value;
    setInputValue(val);
  };

  const handleReset = (e) =>{
    setInputValue('');
    setText('');
  }

  return (
    <div>
      <h2>Enter text</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          id="textInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <br/>
        <div class="button-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default TextInput;