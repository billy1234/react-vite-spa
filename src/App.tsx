import "./App.css";
import React from "react";
import { AppContainer } from "./components/AppContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { HttpClientProvider } from "./utils/HttpContext";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index={true} element={<Home />} />
      <Route path="ping" element={<h1>pong</h1>} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <HttpClientProvider>
          <AppContainer>
            <RouterProvider router={router} />
          </AppContainer>
        </HttpClientProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
