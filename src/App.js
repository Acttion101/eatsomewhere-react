import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'


const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const Register = lazy(() => import('./pages/Register'))
const News = lazy(() => import('./pages/News'))
const Community = lazy(() => import('./pages/Community'))

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
          <Route path="/news" exact component={News} />
          <Route path="/community" exact component={Community} />
        </Switch>
      </Suspense>
    </Router>
    </>
  )
}

export default App
