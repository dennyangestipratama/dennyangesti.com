import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@Pages/Home'

export default function App() {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Home} />
         </Switch>
      </Router>
   )
}
