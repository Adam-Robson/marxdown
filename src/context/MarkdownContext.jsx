import React, { useState, useContext, createContext } from 'react';

const MarkdownContext = createContext();

function MarkdownProvider({ children }) {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
      { children } 
    </MarkdownContext.Provider>
  )
}

function useMarkdownContext() {
  const context = useContext(MarkdownContext);
  if (context === undefined) {
    throw new Error('context must be used within a provider!');
  }
  return context
}

export { MarkdownProvider, useMarkdownContext };
