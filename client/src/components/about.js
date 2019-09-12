import React, { Component } from 'react';
import imgcircle from './images/circle_image.jpg';

class About extends Component {
   
    render(){
        return(
            <div className="container">
                <div className="row content">
                    <div className="col-md-8">
                            Rockwave engineering services limited is an electrical/electronics maintenance company which specializes in the supply, repairs and technical maintenance of sound reinforcement systems and stage lighten systems.
                            The Company is equipped with professionals in various departments with modern troubleshooting machines and tools. We are dedicated to rendering of good and quality services to our clients in and outside the federal capital territory, Abuja.
                            You are sure to get the best services you need because in rockwave engineering, our good work speaks.
                            Our Area of coverage includes Churches, Schools, Halls, Conference room, Stadium etc.
                            We also specilaize in services in the following; AF Power Amplifier Systems, Digital and Analog mixers, Audio processors, Digital/Analog snake, LED stage lights, Beam moving head, Smoke machine, Fog machine, Input/Output Transducers A/F, Sound installation/Sound Engineering and Consultancy.
                           
                    </div>
                    <div className="col-md-4">
                        <img src={imgcircle} className="img-fluid rounded-circle" />
                    </div>   
                     
                </div>
            </div> 
        );
    }
}


export default About;