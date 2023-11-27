import { createContext, useContext, useState, useEffect } from 'react';
import React from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [isLogged, setisLogged] = useState(() => {
    const storedValue = localStorage.getItem('isLogged');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    // Update localStorage whenever isLogged changes
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <MyContext.Provider value={{ isLogged, setisLogged }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};