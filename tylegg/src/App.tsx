import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TyleProfile from "pages/TyleProfile";
import { RecoilRoot } from "recoil";
import Login from "pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TyleCreate from 'pages/TyleCreate';
import GoogleReturn from "pages/GoogleReturn";

function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile/:tyleName" element={<TyleProfile />}></Route>
          <Route path="/googlereturn" element={<GoogleReturn />}></Route>
          <Route path="/newtyle" element={<TyleCreate />}></Route>
        </Routes>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
