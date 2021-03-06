import React from 'react';
import { gql } from 'apollo-boost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'
import { UPLOADS_QUERY } from './images';
import { useMutation } from 'react-apollo';
import {
     Button
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
        cache.writeQuery({ query: UPLOADS_QUERY, data });
    }

    const [deleteUpload, { data }] = useMutation(DELETE_UPLOAD, 
        {update: update});

    return(
        <div className="container">
           <Button 
           className="mx-2" color="danger"
           onClick={() => {
               const confirmResult = window.confirm("Deleting this image will remove it from your website gallery, do you want to proceed ?");
               if(confirmResult){
                deleteUpload({ variables: { id: props.id }})
                .then((data) => {
                    window.Materialize.toast('Image ' + props.id + ' has been Successfully Deleted!', 10000,  'green rounded');
                })
                .then((data) => {
                    window.location.reload();
                })
                .catch(err => {
                    window.Materialize.toast('Sorry!, something went wrong, please try again later or check your internet connection.', 10000, 'red rounded');
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