import { useEffect, useState } from "react";

// need to install @types/react-router-dom -D cuz works with typescript
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from './pages/Home'
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/rooms/new' element={<NewRoom/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
