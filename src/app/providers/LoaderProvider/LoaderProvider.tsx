"use client";

import React, { createContext, useContext, useState } from "react";
import Loading from "@/app/components/Loading";

const LoaderContext = createContext({
  isLoading: false,
  setIsPageLoading: (loading: boolean) => {},
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsPageLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsPageLoading }}>
      {isLoading ? <Loading /> : children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
