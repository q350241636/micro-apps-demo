import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import App from './App'
import Page1 from './page1/page1'
import Page2 from './page2/page2'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/page1'>page1</Link>
            </li>
            <li>
              <Link to='/page2'>page2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/page1' page1>
            <Page1 />
          </Route>
          <Route path='/page2'>
            <Page2 />
          </Route>
          <Route path='/'>
            <App />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
