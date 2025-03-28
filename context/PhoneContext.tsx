"use client";

import React, { createContext, useContext } from "react";

interface PhoneContextProps {
  phone: string | null;
}

const PhoneContext = createContext<PhoneContextProps | undefined>(undefined);

export const PhoneProvider: React.FC<{
  phone: string | null;
  children: React.ReactNode;
}> = ({ phone, children }) => {
  return (
    <PhoneContext.Provider value={{ phone }}>{children}</PhoneContext.Provider>
  );
};

export const usePhone = (): PhoneContextProps => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error("usePhone must be used within a PhoneProvider");
  }
  return context;
};
