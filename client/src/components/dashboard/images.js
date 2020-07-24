import React, { Component } from 'react';
import amp from "../images/amp2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import DeleteImage from './deleteImage';
import EditImage from './editImage';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, NavItem
  } from 'reactstrap';

import { Mutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';


export const UPLOADS_QUERY = gql`
  query uploads {
    uploads {
      id
      thumbnail
      picture
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
                        {data && data.uploads.map(datum => (
                            <div className="col-md-4 col-lg-4 col-sm-2">
                            <Card key={datum.id}>
                                <CardImg top width="100%" src={datum.thumbnail} alt="Thumbnail Image" />
                                <CardBody>
                                <CardTitle>{datum.description}</CardTitle>
                                 <Link to={`/dashboard/edit/${datum.id}`}><Button className="mx-2">Edit <FontAwesomeIcon icon={faEdit}/> </Button></Link>
                                <DeleteImage id={datum.id}>Delete</DeleteImage>
                                </CardBody>
                            </Card>
                            </div>
                        ))}
                    </div>
                </div>
        );
            
}
    


export default Uploads;