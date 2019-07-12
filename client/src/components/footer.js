import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

class Footer extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <Parallax strength={600}>
                    <div className="footer" style={{ height: '150px', backgroundColor: "black" }}>
                        <div class="social-icons">
                            <ul>
                                <li><a href="https://www.facebook.com/rowvens/?_rdc=1&_rdr" target="_blank">
                                <i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/RockwaveL" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/rockwave-engineering-1148b0178/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="javascript:void()"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                        
                        copyright &copy; Rockwave Engineering
                    </div>
                </Parallax>
            </div>
           
        );
    }
}


export default Footer;