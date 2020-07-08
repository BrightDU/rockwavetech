import React, { Component } from 'react';
import amp from "../images/amp2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
class Images extends Component {
   
    render(){
        return(
            <div className="container content">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-2">
                    <Card>
                    <CardImg top width="100%" src={amp} alt="Image one" />
                    <CardBody>
                    <CardTitle>Image Name</CardTitle>
                    <Button className="mx-2" >Edit <FontAwesomeIcon icon={faEdit}/>  </Button>
                    <Button className="mx-2" color="danger" >Delete <FontAwesomeIcon icon={faTrash}/></Button>
                    </CardBody>
                </Card>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-2">
                    <Card>
                    <CardImg top width="100%" src={amp} alt="Image one" />
                    <CardBody>
                    <CardTitle>Image Name</CardTitle>
                    <Button className="mx-2" >Edit <FontAwesomeIcon icon={faEdit}/>  </Button>
                    <Button className="mx-2" color="danger" >Delete <FontAwesomeIcon icon={faTrash}/></Button>
                    </CardBody>
                </Card>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-2">
                    <Card>
                    <CardImg top width="100%" src={amp} alt="Image one" />
                    <CardBody>
                    <CardTitle>Image Name</CardTitle>
                    <Button className="mx-2" >Edit <FontAwesomeIcon icon={faEdit}/>  </Button>
                    <Button className="mx-2" color="danger" >Delete <FontAwesomeIcon icon={faTrash}/></Button>
                    </CardBody>
                </Card>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-2">
                    <Card>
                    <CardImg top width="100%" src={amp} alt="Image one" />
                    <CardBody>
                    <CardTitle>Image Name</CardTitle>
                    <Button className="mx-2" >Edit <FontAwesomeIcon icon={faEdit}/>  </Button>
                    <Button className="mx-2" color="danger" >Delete <FontAwesomeIcon icon={faTrash}/></Button>
                    </CardBody>
                </Card>
                    </div>
                </div>
            </div> 
        );
    }
}


export default Images;