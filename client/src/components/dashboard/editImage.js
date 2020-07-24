import React, { Component, useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql }  from 'apollo-boost';
import { UPLOADS_QUERY } from './images';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input
  } from 'reactstrap';
  


//get a single upload you want to edit
export const GET_UPLOAD = gql`
  query upload($id: ID!){
      upload(id: $id){
          id
          thumbnail
          picture
          description
      }
  }
`;

//update a single upload
export const UPDATE_UPLOAD = gql`
    mutation editUpload($id:ID!, $thumbnail: String, $picture: String, $description: String){
        editUpload(id: $id, thumbnail: $thumbnail, picture: $picture, description: $description){
            id
            thumbnail
            picture
            description
        }
    }
`; 


const EditImage = (props, {match, location}) => {

        //app state
        const [thumbnail, setThumbnail] = useState('');
        const [picture, setPicture] = useState('');
        const [description, setDescription] = useState('');

        //destructure the id from match
        const { params: { id }} = props.match;

        //Query mutation
        const { loading, error, data } = useQuery(GET_UPLOAD, {
            variables: { id }});

        
        //handle form fields
        const handleChange = e => {
            const newDesc = e.target.value;
            setDescription(newDesc);
        }

        //update the cache
        const update = (proxy, {data: { editUpload }}) => {
            //manually update the cache on the client, to sync with the server data.
            const data = proxy.readQuery({ query: UPLOADS_QUERY });

            //Put the uploads back 
            proxy.writeQuery({ query: UPLOADS_QUERY , data: {
                ...data,
                // description: [data.description, editUpload]
            }});
        }

       
        //Mutation mutation
        const [editUpload] = useMutation(UPDATE_UPLOAD, { update: update });



        //onClick handler
        const handleSubmit = (e, props) => {
            e.preventDefault();
            editUpload({
                variables: { id, description},
                optimisticResponse: {
                 __typename: "Mutation",
                 editUpload: {
                     __typename: "upload_response",
                    id,
                    description,
                    thumbnail,
                    picture
                    
                 }
                }
            });
        }
         
            
        if(loading) { return <p>Loading!....</p>}
        if(error){ console.log(error)}
        return(
            <div>
                <div className="container content">
                    <div className="row">
                        <div className="col-md-3 col-sm-0"></div>
                        <div className="col-md-6 col-lg-6 col-sm-12">        
                        <Card>
                            <CardBody>  
                              <CardImg top width="100%" src={data.upload.thumbnail} alt="Uploaded Image" />                             
                            </CardBody>
                        </Card>
                        <form method="POST" onSubmit={handleSubmit}>     
                            <Input type="textarea" name="description" id="description" defaultValue={data.upload.description} onChange={handleChange}/>
                            <Button type="submit" className="my-2" >Updat{loading ? "Updating....": "e"}</Button>
                        </form>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-0"></div>
                </div> 
            </div>
        );
    
}


export default EditImage;