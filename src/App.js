import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store/store'

const Main = lazy(() => { return import('./pages/Main') })
const Login = lazy(() => { return import('./pages/Login') })
const Register = lazy(() => { return import('./pages/Register') })
const Home = lazy(() => { return import('./pages/Home') })

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Router>
          <Switch>
            <Route component={Login} path='/login'/>
            <Route component={Register} path='/register'/>
            <Route component={Home} path='/home'/>
            <Route component={Main}/>
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  )
}

export default App