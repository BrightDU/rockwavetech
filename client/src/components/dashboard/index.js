import React, { Component } from 'react';
import {Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt, faImages } from '@fortawesome/free-solid-svg-icons'


class Dashboard extends Component {
   
    render(){
        return(
            <div className="container min-height content">
                <div className="row text-center ">
                    <div className="col-md-3 col-sm-0"></div>
                    <div className="col-md-6 col-sm-12">
                         <Button className="m-2" color="secondary" href="/dashboard/upload"><FontAwesomeIcon className="mr-1" icon={faCloudUploadAlt} />Upload</Button>
                         <Button className="m-2" color="secondary" href="/dashboard/images"><FontAwesomeIcon className="mr-1" icon={faImages} />Images</Button>
                         </div>
                    <div className="col-md-3 col-sm-0"></div>
                </div>
                
            </div> 
        );
    }
}


export default Dashboard;