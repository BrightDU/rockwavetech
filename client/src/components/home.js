import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Parallax, Background } from 'react-parallax';
import TestimonalCarousel from './testimonalCarousel';
import consult from './images/consult.png';
import screw from './images/screw.png';
import install from './images/install.png';
import descImage from './images/descImage.png';
import lfc_logo from './images/lfc_logo.png';
import iam_logo from './images/iam.png';
import obum_logo from './images/obum.png';
import rhogic_logo from './images/rhogic.png';
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
   
    render(){
        const rockstyle = {
    
            fontSize: '100px',
            fontWeight: '90px',
            textAlign: 'center',
            paddingTop: '170px',
            fontFamily: 'Comfortaa, cursive',
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

        return(
            <div>
                
                <Parallax  bgImage={require('./images/banner3_grey_overlay2.png')}>
                     <div style={{ minHeight: '600px', position: "relative", zIndex: "", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                        <div style={rockstyle}>
                            ROCKWAVE <br/>
                            ENGINEERING
                            <br/>
                            <h3>The Sound Clinic</h3>
                            <hr style={hrStyle}/>
                        </div>
                     </div>
                     
                </Parallax>

                
        
                <div className="container" style={{ }}>
                    <div className="row">           
                        <div className="col-md-6 rightdesc">
                            <img src={descImage} className="img-responsive rounded"/>
                        </div> 
                        <div className="col-md-6 leftdesc ">
                            Rockwave Engineering is an electronic maintenance lab for all kinds of Musical and light equipments. We are enthusiastic about what we do because we delight in creating a condusive atmosphere that is safe for all your sound and lighting equipments.
                            
                        </div> 
                    </div>     
                </div>
        
                
                <Parallax   
                    bgImage={require('./images/repairs1.jpg')}
                    strength={700}
                >
                
                  <div style={{ height: '100%' }}> 
                    <section className="container">
                        <h1 className="wedo mt-3 display-3">We Do</h1>
                        <div className="section row">
                            <div className="col-md-4">
                                <img src={screw} className="img-responsive ml-4"/>
                                <h2 className="wedo3 one display-4 col-sm-12">REPAIRS</h2>
                            </div>
                            <div className="col-md-4">
                                <img src={install} className="img-responsive ml-30"/>
                                <h2 className="wedo3 two display-4">INSTALLATION</h2>
                            </div>
                            <div className="col-md-4">
                                <img src={consult} className="img-responsive ml-10"/>
                                <h2 className="wedo3 three display-4">CONSULTANCY</h2>
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
                       
                            <div className="col-md-3">
                                <img src={rhogic_logo} />
                            </div>                            
                            <div className="col-md-3">
                                <img src={lfc_logo} />
                            </div>
                            <div className="col-md-3">
                                <img src={obum_logo} />
                            </div>
                            <div className="col-md-3">
                                <img src={iam_logo} />
                            </div>
                        
                    </div>
                 </div>
            </div>
       );
    }
}


export default Home;