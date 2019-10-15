import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import TitleHeader from './components/TitleHeader'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import User from './components/User'
import ExpenceList from './components/ExpenceList'
import ExpenceForm from './components/ExpenceForm'


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={TitleHeader} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/user" component={User} />
      <Route path="/all-expences" component={ExpenceList} />
      <Route path="/add-expence" component={ExpenceForm} />
    </Router>
  );
}

export default App;
