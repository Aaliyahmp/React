import React, {Component} from 'react' ;
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
import MenuPage from './Components/MenuPage';
import NavBarPage from './NavBarPage';
import Contact from './Components/Contact';

class Routes extends Component{
    render(){
        return(
            <Router>
                <NavBarPage />
            <div>
                
                    <hr/>
                    <Route name="Home" exact path="/Home" component = {HomePage}/>
                    <Route name="About" path ="/About" component={AboutPage}/>
                    <Route name="Menu" path="/Menu"component= {MenuPage}/>      
                    <Route name="Contact" path= "/Contact" component ={Contact} />              
                
            </div>
            </Router>
        )
    }
}
export default Routes; 