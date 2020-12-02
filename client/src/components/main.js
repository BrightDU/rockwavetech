import React, { Component } from 'react';
import Header from './header';
import Home from './home';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import { Switch, BrowserRouter as Route, Redirect } from 'react-router-dom'; 
import RockwaveImageGallery from './rockwavegallery';
import Upload from './dashboard/upload';
import EditImage from './dashboard/editImage';
import DeleteImage from './dashboard/deleteImage';
import Uploads from './dashboard/images';
import Dashboard from './dashboard/index';
import Login from './dashboard/login';


class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading: false
        }
    }


    render(){

        // const HomePage = () => {
        //     return(
        //         <Home />
        //     );
        // }

        // const Quotation = () => {
        //     return(
        //         <Quotation />
        //     );
        // }

        // const AboutPage = () => {
        //     return(
        //         <About />
        //     );
        // }

        // const ImageGallery = () => {
        //     return(
        //         <RockwaveImageGallery />
        //     );
        // }

        // const ContactPage = () => {
        //     return(
        //         <Contact />
        //     );
        // }

        // const Dashboard = () => {
        //     return(
        //         <Dashboard />
        //     );
        // }

        // const Upload = () => {
        //     return(
        //         <Upload />
        //     );
        // }

        // const Images = () => {
        //     return(
        //         <Images />
        //     );
        // }

        // const EditImage = () => {
        //     return(
        //         <EditImage />
        //     );
        // }

        return(
            <div className="App">
                <Header />
    
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/aboutus" component={About} />
                  <Route path="/gallery" component={RockwaveImageGallery} />
                  <Route path="/contactus" component={Contact} />
                  <Route path="/admin" component={Login} />
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/dashboard/upload"  component={Upload} />
                  <Route path="/dashboard/edit/:id" component={EditImage} />
                  <Route path="/dashboard/delete" component={DeleteImage} />
                  <Route path="/dashboard/images" component={Uploads} />
                  <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;