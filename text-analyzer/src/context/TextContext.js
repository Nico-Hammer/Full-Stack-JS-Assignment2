/**
 * import react, and context + state functions so that whatever
 * is sent here can be used by all components
 */
import React, { createContext, useContext, useState } from 'react';

const TextContext = createContext(null); // create the empty context
/**
 * context provider component that provides text state and setText function
 * to the rest of the components
 * @param {*} param0 
 * @returns 
 */
export function TextProvider({ children }) {
  const [text, setText] = useState('');
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
}
/**
 * hook that provides access to text state and setText function
 * from the TextContext. These must be used within a TextProvider 
 * @returns 
 */
export function useText() {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useText must be used within a TextProvider');
  }
  return context;
}