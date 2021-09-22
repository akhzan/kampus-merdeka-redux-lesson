import './normalize.css'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Success from './Success'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
