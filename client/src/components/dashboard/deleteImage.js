import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { UPLOADS_QUERY } from './images';
import { useMutation } from 'react-apollo';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


export const DELETE_UPLOAD = gql`
    mutation deleteUpload($id: ID!) {
        deleteUpload(id: $id){
            id
        }
    }
`;

const DeleteImage = (props) => {
   
    const update = (cache, payload) => {
        //manually update the cache on the client, to sync with the server data.
        //read the cache for the upload we want to delete
        const data = cache.readQuery({ query: UPLOADS_QUERY });

        //filter the deleted upload out of the page
        data.uploads = data.uploads.filter(upload => upload.id !== payload.data.deleteUpload.id);

        //Put the uploads back
        cache.writeQuery({ query: UPLOADS_QUERY });
    }

    const [deleteUpload, { data }] = useMutation(DELETE_UPLOAD, {update: update});

    return(
        <div className="container">
           <Button 
           className="mx-2" color="danger"
           onClick={() => {
               const confirmResult = window.confirm("Deleting this image will remove it from your website gallery, do you want to proceed ?");
               if(confirmResult){
                deleteUpload({ variables: { id: props.id }}).catch(err => {
                    alert(err.message); //needs a component to handle SUCCESS
                });
            }
            }}
           >
               {props.children}
               <FontAwesomeIcon icon={faTrash}/>
           </Button>
        </div> 
    );
}


export default DeleteImage;