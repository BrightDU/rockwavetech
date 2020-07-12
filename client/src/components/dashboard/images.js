import React, { Component } from 'react';
import amp from "../images/amp2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import { Mutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';


export const UPLOADS_QUERY = gql`
  query UploadQuery {
    uploads {
      id
      url
      description
    }
  }
`




const Uploads = (props) => {
   
    const { loading, error, data } = useQuery(UPLOADS_QUERY);
        if(loading) { return <p>Loading....</p>}
        if(error) { console.log(error); }
        console.log(data);
        return(  
                <div className="container">
                    <div className="row">
                        {data.uploads.map(datum => (
                            <div className="col-md-4 col-lg-4 col-sm-2">
                            <Card>
                                <CardImg top width="100%" src={datum.url} alt="Image one" />
                                <CardBody>
                                <CardTitle>{datum.description}</CardTitle>
                                <Button className="mx-2" >Edit <FontAwesomeIcon icon={faEdit}/>  </Button>
                                <Button className="mx-2" color="danger" >Delete <FontAwesomeIcon icon={faTrash}/></Button>
                                </CardBody>
                            </Card>
                            </div>
                        ))}
                    </div>
                </div>
        );
            
}
    


export default Uploads;