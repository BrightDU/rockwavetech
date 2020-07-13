import React, { Component } from 'react';
import amp from "../images/amp2.jpg"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input
  } from 'reactstrap';


class EditImage extends Component {
   
    render(){
        return(
            <div>

                <div className="container content">
                    <div className="row">
                        <div className="col-md-3 col-sm-0"></div>
                        <div className="col-md-6 col-lg-6 col-sm-12">
                        <Card>
                        <CardImg top width="100%" src={amp} alt="Image one" />
                        <CardBody>
                        <Input type="text" value="Image name editable" />
                        <Input type="textarea" name="description" id="description" value="Image Description Editable" />
                        <Button className="my-2" >Update</Button>
                        
                        </CardBody>
                        </Card>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-0"></div>
                </div> 
            </div>
        );
    }
}


export default EditImage;