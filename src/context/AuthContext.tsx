import firebase from "firebase/compat/app";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";

type UserFormat = {
  id: string;
  name: string;
  avatar: string | null;
};

type AuthContextType = {
  user: UserFormat | undefined;
  SignInWithGoogle: () => Promise<void>; //devolve uma promisse pq eh async await e sem retorno
};

type AuthContextProvider = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProvider) {
  const [user, setUser] = useState<UserFormat>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function SignInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, SignInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
