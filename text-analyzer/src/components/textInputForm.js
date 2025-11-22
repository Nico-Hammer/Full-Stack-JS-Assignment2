/**
 * import react and use state to create the component
 * import useText so that the component can share the input text
 * with the other components
 */
import React, { useState } from 'react';
import { useText } from '../context/TextContext';

function TextInput(){
  const { text, setText } = useText(); // set the global text to an empty string
  const [inputValue, setInputValue] = useState(text || ''); // set the input value (data from form) to an empty string or whatever is still stored in the global text
/**
 * when the form is submitted, make sure that the page does not reload and the data remains
 * then set the global text to the value that user put into the textbox
 * @param {*} event 
 */
  const handleSubmit = (event) => {
    event.preventDefault();
    setText(inputValue);
  };
/**
 * when the user is entering data into the textbox, save each change into a variable
 * and then save that into the inputValue
 * @param {*} event 
 */
  const handleInputChange = (event) => {
    const val = event.target.value;
    setInputValue(val);
  };
/**
 * set the inputValue and the global text to empty strings when the reset button is clicked
 * @param {*} e 
 */
  const handleReset = (e) =>{
    setInputValue('');
    setText('');
  }
/**
 * create and display the form when called
 */
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