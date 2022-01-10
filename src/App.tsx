import firebase from "firebase/compat/app";
import { createContext } from "react";
import { useEffect, useState } from "react";

// need to install @types/react-router-dom -D cuz works with typescript
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth } from "./services/firebase";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/rooms/new" element={<NewRoom />}></Route>
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
