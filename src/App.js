import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StyledGlobalStyle from './utils/styles/GlobalStyle'
import ProfilePage from './pages/ProfilePage'
import Header from './components/Header'
import Error from './pages/Error'
import HomePage from './pages/HomePage'

/**
 * App Module
 * @module /app.js
 * 
 * @author Nicolas Pedenau
 * @desription This application works with an API started with 'npm run start' command.
 * Then it can be started with 'npm start' command which build the display of the users profile 
 * See the Readme.md file {@tutorial README} to get started with this React Application
 */
const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <StyledGlobalStyle />
                <Header />
                <Switch>
                    <Route exact path="/suivi-sportif" component={HomePage} />
                    <Route exact path="/user/:profileId" render={(props) => <ProfilePage {...props} />} />
                    <Route path="*" component={Error} />
                </Switch>                 
            </BrowserRouter>
        </div>
    )

}

export default App
