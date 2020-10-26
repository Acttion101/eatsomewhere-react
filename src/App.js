import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'

import GlobalStyle from './components/GlobalStyle'

function App () {
  return (
    <>
      <link href='https://fonts.googleapis.com/css2?family=Fahkwang:wght@300&family=Pridi&display=swap' rel='stylesheet' />
      <GlobalStyle />
      <Router>
        <Suspense fallback='...Loading'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>

        </Suspense>

      </Router>
    </>
  )
}

export default App
