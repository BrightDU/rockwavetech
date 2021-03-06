import React, { Component } from 'react';
import  MapContainer  from './myMap';
import  ContactForm  from './myForm';


class Contact extends Component {
        
    render(){
        return(
            <div className="Container-fluid contct">
                <div className="row">
                    <div className="first col-12 col-md">
                      <MapContainer />
                    </div>
                    <div className="col-12 col-md m-2">
                       <ContactForm />
                    </div> 
                </div>
            </div> 
        );
    }
}


export default Contact;