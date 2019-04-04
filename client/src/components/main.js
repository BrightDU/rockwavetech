import React, { Component } from 'react';
import Header from './header';
import Home from './home';
import About from './about';
import Gallery from './gallery';
import Contact from './contact';
import Footer from './footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; 
import RockwaveImageGallery from './rockwavegallery';
import Quotation from './quote';

class Main extends Component {
    constructor(props){
        super(props)


    }


    render(){

        const HomePage = () => {
            return(
                <Home />
            );
        }

        const Quotation = () => {
            return(
                <Quotation />
            );
        }

        const AboutPage = () => {
            return(
                <About />
            );
        }

        const ImageGallery = () => {
            return(
                <RockwaveImageGallery />
            );
        }

        const ContactPage = () => {
            return(
                <Contact />
            );
        }

        return(
            <div className="App">
                <Header />
                <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route path="/aboutus" component={AboutPage} />
                  <Route path="/gallery" component={ImageGallery} />
                  <Route path="/contactus" component={ContactPage} />
                  <Route path="/quote" component={Quotation} />
                  <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;