import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from 'firebase/app'
import store from './store/store'

const Main = lazy(() => { return import('./pages/Main') })
const SignIn = lazy(() => { return import('./pages/SignIn') })
const SignUp = lazy(() => { return import('./pages/SignUp') })
const Home = lazy(() => { return import('./pages/Home') })
const Publish = lazy(() => { return import('./pages/Publish') })

const firebaseConfig = {
  apiKey: "AIzaSyDVyqlEn9UrDdjdzi3FmydIUcdOaWCq8_0",
  authDomain: "react-redux-firebase-aut-1f450.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-aut-1f450.firebaseio.com",
  projectId: "react-redux-firebase-aut-1f450",
  storageBucket: "react-redux-firebase-aut-1f450.appspot.com",
  messagingSenderId: "302090315770",
  appId: "1:302090315770:web:328943af26f41ccb6e6643"
}
firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Router>
          <Switch>
            <Route component={SignIn} path='/signin'/>
            <Route component={SignUp} path='/signup'/>
            <Route component={Home} path='/home'/>
            <Route component={Publish} path='/publish'/>
            <Route component={Main}/>
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  )
}

export default App