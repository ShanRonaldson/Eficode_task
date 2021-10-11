import React from "react"
import * as Realm from "realm-web";

export function Login({ setUser }) {
    const loginAnonymous = async () => {
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);
    };
    return <button onClick={loginAnonymous}>Log In</button>;
  }