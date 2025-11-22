import React, { createContext, useContext, useState } from 'react';

const TextContext = createContext(null);

export function TextProvider({ children }) {
  const [text, setText] = useState('');
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
}

export function useText() {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useText must be used within a TextProvider');
  }
  return context;
}
