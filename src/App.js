import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'


const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const Register = lazy(() => import('./pages/Register'))
function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Suspense fallback="...Loading">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Suspense>
    </Router>
    </>
  )
}

export default App
