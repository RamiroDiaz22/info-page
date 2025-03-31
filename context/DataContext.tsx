"use client";

import React, { createContext, useContext } from "react";

interface DataContextProps {
  phone: string | null;
  email: string | null;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{
  phone: string | null;
  email: string | null;
  children: React.ReactNode;
}> = ({ phone, email, children }) => {
  return (
    <DataContext.Provider value={{ phone, email }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("usePhone must be used within a PhoneProvider");
  }
  return context;
};
