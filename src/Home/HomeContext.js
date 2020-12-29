import React, { Children, createContext, useContext, useState } from 'react';

const initialState = {
  currentMode: '',
  setMode: () => {},
};

export const HomeContext = createContext(initialState);

export default ({ props, children }) => {
  const [currentMode, setMode] = useState('main');

  return (
    <HomeContext.Provider value={{ currentMode, setMode }} {...props}>
      {children}
    </HomeContext.Provider>
  );
};
