import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import TestimonalCarousel from './testimonalCarousel';
import consult from './images/consult.png';
import screw from './images/screw.png';
import install from './images/install.png';
import descImage from './images/descImage.png';
import  ClientsComponent  from './clientsComponent';
import ReactTypingEffect from 'react-typing-effect';

const rockstyle = {
    fontSize: '50px',
    fontWeight: '90px',
    textAlign: 'center',
    paddingTop: '170px',
    fontFamily: ' Comfortaa, Arial, cursive',
    color: 'orange' 
}

const hrStyle = {
    backgroundColor: 'orange',
    width: 200
}

const tesimonalBg = {
    backgroundColor: '#ff9900',
    position: 'relative',
    height: '100%'
}


class Home extends Component {
    
    render(){
       
        return(
            <div> 
            
                <Parallax  bgImage={require('./images/bnr.svg')}>
                        <div className="bannerword" style={{ minHeight: '600px', position: "relative", zIndex: "", backgroundSize: "contain", backgroundRepeat: "no-repeat", marginTop: "40px", }}>
                        
                        <div  style={rockstyle}>
                        <ReactTypingEffect
                        text={["Welcome to Rockwavetech", "The Sound Clinic"]}
                        />
                            {/* ROCKWAVE <br/>
                            ENGINEERING
                            <br/>
                            <h3>The Sound Clinic</h3>
                            <hr style={hrStyle}/> */}
                        </div>
                        </div>
                        
                </Parallax>

                
        
                <div className="container">
                    <div className="row">           
                        <div className="col-md-6 rightdesc">
                            <img src={descImage} className="img-fluid rounded"/>
                        </div> 
                        <div className="col-md-6 leftdesc ">
                            Rockwave Engineering is an electronic maintenance lab for all kinds of Musical and light equipments. We are enthusiastic about what we do because we delight in creating a condusive atmosphere that is safe for all your sound and lighting equipments.
                            
                        </div> 
                    </div>     
                </div>
        
                
                <Parallax   
                    bgImage={require('./images/blue2.svg')}
                    strength={700}>
                
                    <div style={{ height: '100%' }}> 
                    <section className="container">
                        <h1 className="wedo mt-3 display-3">We Do</h1>
                        <div className="">
                            
                            <div className="section row col-md-12 col-md-offset-2">
                                <div className="col-md-4 icons">
                                    <img src={screw} className="img-fluid"/>
                                    <h3 className="wedo3 one display-4">REPAIRS</h3>
                                </div>
                                <div className="col-md-4 icons">
                                    <img src={install} className="img-fluid"/>
                                    <h3 className="wedo3 two display-4">INSTALLATION</h3>
                                </div>
                                <div className="col-md-4 icons">
                                    <img src={consult} className="img-fluid"/>
                                    <h3 className="wedo3 three display-4">CONSULTANCY</h3>
                                </div>
                            </div>
                        </div>
                    </section> 
                    </div>
                </Parallax>

                <Parallax>
                        <div style={{ minHeight: '100px', position: "relative", zIndex: "10", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                </Parallax>

                <div className="testimonal" style={tesimonalBg}>
                    <center><h1 className="h1Head">What People Are Saying About Us</h1>
                    <small className="h1HeadSmall">Don't just hear from us, let the result speak for itself! </small>
                    </center>
                    
                    <TestimonalCarousel/>

                </div>

                    <div className="container" style={{ minHeight: '100px', padding: '50px 0 100px 0' }}>
                    <div className="clients">
                        <center>
                            Our Clients
                        </center>
                    </div>
                    <div className="row">
                        <ClientsComponent />
                    </div>
                    </div>
            </div>
        );

    }   
}

export default Home;