import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import { Footer } from './components/Footer/styled'
import GlobalStyle from './components/GlobalStyle'
import { TextFooter } from '/Users/ramita/eatsomewhere-react/src/components/Typography'



function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback="...Loading">
          <Switch>
          {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
          <Footer ><TextFooter>Copy right by where to eat</TextFooter></Footer>
        </Suspense>
      </Router>
    </>
  )
}

export default App
