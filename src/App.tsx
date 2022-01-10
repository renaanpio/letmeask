import firebase from 'firebase/compat/app';
import {createContext} from 'react'
import { useEffect, useState } from "react";

// need to install @types/react-router-dom -D cuz works with typescript
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from './pages/Home'
import { NewRoom } from "./pages/NewRoom";
import { auth } from './services/firebase';


type UserFormat = {
  id: string,
  name: string,
  avatar: string | null;
}


type AuthContextType = {
  user: UserFormat | undefined;
  SignInWithGoogle: () => Promise<void> //devolve uma promisse pq eh async await e sem retorno
}


export const AuthContext = createContext({} as AuthContextType)

function App() {

  const [user, setUser] = useState<UserFormat>()

  async function SignInWithGoogle() {
    
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)

    if(result.user){
      const {displayName, photoURL, uid} = result.user

      if(!displayName || !photoURL){
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }


  return (
    <BrowserRouter>
    <div>
      <AuthContext.Provider value={{user, SignInWithGoogle}}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/rooms/new' element={<NewRoom/>}></Route>
      </Routes>
      </AuthContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
