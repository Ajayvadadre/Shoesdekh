// ScrollContext.js
import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollToSectionRef = useRef(null);

  return (
    <ScrollContext.Provider value={scrollToSectionRef}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollToSection = () => {
  return useContext(ScrollContext);
};
