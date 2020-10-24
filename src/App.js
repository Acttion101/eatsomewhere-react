import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer } from './components/Footer/styled'
import GlobalStyle from './components/GlobalStyle'
import { TextFooter } from '../src/components/Typography'

const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const Register = lazy(() => import('./pages/Register'))
const News = lazy(() => import('./pages/News'))
// const Community = lazy(() => import('./pages/Community'))

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback="...Loading">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/news" exact component={News} />
            {/* <Route path="/community" exact component={Community} /> */} 
            <Footer />
            <TextFooter />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
