import './App.css';
import { BrowserRouter, Route , Switch,  useLocation, useNavigate  } from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/DetailPage/Detail';
import CreatePage from './components/FormPage/CreatePoke';
import Footer from "./components/Footer/Footer.jsx";
import BackTop from "./components/BackTop/BackTop.jsx";

function App() {


  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/home' component={HomePage} />
    <Route  path='/create' component={CreatePage} />
    <Route exact path="/home/:id" component={DetailPage}/>
    </Switch>
    <Footer /> 
     <BackTop />
    </div>
  
    </BrowserRouter>
  );
}

export default App;
