import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import DeleteImage from './deleteImage';
// import { Button } from 'reactstrap';

import {
    Card, CardImg, CardBody,
    CardTitle, Button
  } from 'reactstrap';



export const UPLOADS_QUERY = gql`
  query uploads {
    uploads {
      src
      thumbnail
      thumbnailwidth
      thumbnailheight
      caption
      id
    }
  }
`


const Uploads = (props) => {
   
    const { loading, error, data } = useQuery(UPLOADS_QUERY);
        if(loading) { return (
          <center>
                <p>
                <div class="preloader-wrapper small active">
                  <div class="spinner-layer spinner-green-only">
                    <div class="circle-clipper left">
                      <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                      <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
                </p>
          </center>
        )}
        if(error) { console.log(error); }
        console.log(data);
        return(  
                <div className="container min-height content">
                    <div className="row col-md-8 col-sm-12">
                      <Button onClick={() => window.history.back()} className="btn-success"><i class="material-icons">arrow_back</i></Button> 
                    </div>
                    <div className="row">
                        {data && data.uploads.map(datum => (
                            <div className="col-md-4 col-lg-4 col-sm-2" key={datum.id}>
                            <Card key={datum.id}>
                                <CardImg top width="100%" src={datum.thumbnail} alt="Thumbnail Image" />
                                <CardBody>
                                <CardTitle>{datum.caption}</CardTitle>
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