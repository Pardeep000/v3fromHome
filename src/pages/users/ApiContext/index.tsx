import React, { createContext, useContext, ReactNode } from "react";

interface ApiProviderProps {
  [x: string]: any;
  contextData: any;
  children: ReactNode;
}
const ApiContext = createContext<ApiProviderProps | null>(null);

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ contextData, children }: ApiProviderProps) {
  return (
    <ApiContext.Provider value={contextData}>{children}</ApiContext.Provider>
  );
}
