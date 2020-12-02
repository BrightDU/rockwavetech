import React, { Component } from 'react';
import lfc_logo from './images/lfc_logo.png';
import iam_logo from './images/iam.png';
import rhogic_logo from './images/rhogic.png';
import prixair_logo from './images/prixair.png';

//import { TweenLite, TimelineMax, Linear } from '@tweenjs/tween.js';



class ClientsComponent extends Component {
    
    
    render(){
        return(    
            <div className="row">
               <div className="col-md-3 icons">
                    <img src={rhogic_logo} className="img-fluid" alt="client one, Rhogic studio, Abuja, Nigeria" />
                </div>                            
                <div className="col-md-3 icons">
                    <img src={lfc_logo} className="img-fluid" alt="client two, Living  Faith Church, Abuja, Nigeria"  />
                </div>
                <div className="col-md-3 icons">
                    <img src={prixair_logo} className="img-fluid" alt="client three, Prixair studio, Abuja, Nigeria" />
                </div>
                <div className="col-md-3 icons">
                    <img src={iam_logo} className="img-fluid" alt="client four, IAM studio, Abuja, Nigeria" />
                </div> 
            </div>
        );
    }
}

export default ClientsComponent;