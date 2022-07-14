import React, { createContext, Component } from 'react'

const FirebaseContext = createContext({})

export const FirebaseProvider = FirebaseContext.Provider
export const FirebaseConsumer = FirebaseContext.Consumer

export const  firebaseHOC = Component => props => (
  <FirebaseConsumer>
    {state => <Component {...props} firbase={state} />}
  </FirebaseConsumer>
)

/*
Dans ce fichier, on crée aussi notre HOC (High Order Component)
qui nous permettra de l’utilise dans l’application.
*/ 