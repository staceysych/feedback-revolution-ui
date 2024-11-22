"use client";

import React, { createContext, useContext, useState } from "react";
import Loading from "@/app/components/Loading";

interface LoaderContext {
  isLoading: boolean;
  setIsPageLoading: (isLoading: boolean) => void;
}

const LoaderContext = createContext<LoaderContext | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsPageLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsPageLoading }}>
      {isLoading ? <Loading /> : children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const loaderContext = useContext(LoaderContext);

  if (!loaderContext) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }

  return loaderContext;
};
