import React, { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = props => {
  const [loading, setLoading] = useState(false);

  const { children } = props;

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading
      }}
      {...props}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
