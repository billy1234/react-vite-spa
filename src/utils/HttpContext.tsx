import axios from "axios";
import React, { ReactNode } from "react";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    "user-token": "ab-cd-ef-g",
  },
});

export const HttpClientContext = React.createContext(httpClient);

export function HttpClientProvider({ children }: { children: ReactNode }) {
  return (
    <HttpClientContext.Provider value={httpClient}>
      {children}
    </HttpClientContext.Provider>
  );
}
