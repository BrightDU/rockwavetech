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
          src
          caption
          thumbnailwidth
          thumbnailheight
      }
  }
`;

//update a single upload
export const UPDATE_UPLOAD = gql`
    mutation editUpload($id:ID!, $thumbnail: String, $src: String, $caption: String){
        editUpload(id: $id, thumbnail: $thumbnail, src: $src, caption: $caption){
            id
            thumbnail
            src
            caption
          
        }
    }
`; 


const EditImage = (props, {match, location}) => {

        //app state
        const [thumbnail, setThumbnail] = useState('');
        const [src, setsrc] = useState('');
        const [caption, setcaption] = useState('');
        const [thumbnailwidth, setThumbnailWidth] = useState(300);
        const [thumbnailheight, setThumbnailHeight] = useState(250);

        //destructure the id from match
        const { params: { id }} = props.match;

        //Query mutation
        const { loading, error, data } = useQuery(GET_UPLOAD, {
            variables: { id }});

        //   console.log(data.upload.src);
        //handle form fields
        const handleChange = e => {
            const newDesc = e.target.value;
            setcaption(newDesc);
        }

        //update the cache
        const update = (proxy, {data: { editUpload }}) => {
            //manually update the cache on the client, to sync with the server data.
            const data = proxy.readQuery({ query: UPLOADS_QUERY });

            //Put the uploads back 
            proxy.writeQuery({ query: UPLOADS_QUERY , data: {
               ...data,
                // caption: [data.caption, editUpload]
            }});
            
        }

       
        //Mutation mutation
        const [editUpload] = useMutation(UPDATE_UPLOAD, { update: update });



        //onClick handler
        const handleSubmit = (e, props) => {
            e.preventDefault();
            editUpload({
                variables: { id, caption, src},
                optimisticResponse: {
                 __typename: "Mutation",
                 editUpload: {
                     __typename: "upload_response",
                    id,
                    caption,
                    thumbnail,
                    src
                    
                 }
                }
            }).then((data) => {
                window.Materialize.toast('Successfully Edited!', 10000,  'green rounded');
            }).catch((data) => {
                window.Materialize.toast('Sorry!, something went wrong, please try again later or check your internet connection.', 10000, 'red rounded');
            })
        }
         
            
        if(loading) { return <p>Loading!....</p>}
        if(error){ console.log(error)}
        return(
            <div>
                <div className="container content">
                    <div className="row col-md-8 col-sm-12 ">
                        <Button onClick={() => window.history.back()} className="btn-success"><i class="material-icons">arrow_back</i></Button> 
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-0"></div>
                        <div className="col-md-6 col-lg-6 col-sm-12">        
                        <Card>
                            <CardBody>  
                              <CardImg top width="100%" src={data.upload.thumbnail} alt="Uploaded Image" />                             
                            </CardBody>
                        </Card>
                        <form method="POST" onSubmit={handleSubmit}>     
                            <Input type="textarea" name="caption" id="caption" defaultValue={data.upload.caption} onChange={handleChange}/>
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