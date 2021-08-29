import React, { createContext, useState, useContext, SetStateAction, Dispatch, FC } from 'react';

export type LoadingContext = {
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
}

const LoadingContext = createContext<LoadingContext | null>(null);

export const LoadingProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
