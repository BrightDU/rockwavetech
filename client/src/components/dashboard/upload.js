import React, { Component } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import {useState} from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';


export const CREATE_UPLOAD = gql`
  mutation createUpload($thumbnail: String, $src: String, $caption: String, $thumbnailwidth: Int, $thumbnailheight: Int) {
    createUpload(thumbnail: $thumbnail, src: $src, caption: $caption, thumbnailwidth: $thumbnailwidth, thumbnailheight: $thumbnailheight) {
      src
      thumbnail
      thumbnailwidth
      thumbnailheight
      caption
    }
  }
`

const Upload = (props) => {
    
    //app state
    const [thumbnail, setThumbnail] = useState('');
    const [src, setsrc] = useState('');
    const [thumbnailwidth, setThumbnailWidth] = useState(300);
    const [thumbnailheight, setThumbnailHeight] = useState(250);
    const [caption, setcaption] = useState('');

    //handle form fields
    const handleChange = e => {
        const { name, type, value } = e.target;
        setcaption(value);
    }

    //handle uploads
    const uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();

        data.append('file', files[0]);
        data.append('upload_preset', 'rockwavetech');

        const res = await fetch('https://api.cloudinary.com/v1_1/cprojects/image/upload', {
            method: 'POST',
            body: data,
        });
        const file = await res.json();

        //update state
        setsrc(file.secure_url);
        setThumbnail(file.eager[0].secure_url);
    }
      
    //upload mutation 
    const [createUpload,  { data, loading }]  = useMutation(CREATE_UPLOAD);
     
      
    //clean up
    const cleanUp = () => {
        setThumbnail('');
        setsrc('');
    }

        return(
            <div className="container min-height content">
                <div className="row col-md-8 col-sm-12 ">
                    <Button onClick={() => window.history.back()} className="btn-success"><i class="material-icons">arrow_back</i></Button> 
                </div>
                <div className="row">
                    <div className="col-md-2 col-sm-0"></div>
                    <div className="col-md-8 col-sm-12 ">
                       <Form method="POST" className="border p-4"
                        onSubmit={async e => {
                            //prevent form from reloading
                            e.preventDefault();

                            //call mutation
                            const resp = await createUpload({ variables: {thumbnail, src, caption, thumbnailwidth, thumbnailheight }})
                          
                            if(resp){                               
                                window.Materialize.toast('Successfully created!, navigate to images page to see your new upload.', 10000,  'green rounded');
                            } else {
                                window.Materialize.toast('Sorry!, could not submit your upload, please try again later or check your internet connection.', 10000, 'red rounded');
                            }
                            
                            console.log(resp);
                            cleanUp();
                            

                        }}>
                      
                       <FormGroup>
                          <div>
                                {thumbnail && <img width="150" height="100" src={thumbnail} 
                                alt="Preview"/>} </div>
                                <hr />
                            <Input 
                                className="m-3"
                                type="file" 
                                id="file" 
                                name="file"
                                placeholder="Upload Image"
                                required
                                onChange={uploadFile} 
                            />
                            <Input 
                               className="m-3" 
                               type="textarea" 
                               name="imageDescr" 
                               id="imeDescr"  
                               placeholder="Image caption"
                               required
                               onChange={handleChange}
                               />
                            <Button className="btn-u m-3" size="lg" blockdd>CREAT{loading ? 'ING...' : 'E' } </Button>
                        </FormGroup>
                        </Form>  
                        {/* <Modal isOpen={this.state.modal} toggle={this.toggle()} >
                            <ModalHeader toggle={this.toggle()}>Modal title</ModalHeader>
                            <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={this.toggle()}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle()}>Cancel</Button>
                            </ModalFooter>
                        </Modal> */}
                    </div>
                    <div className="col-md-2 col-sm-0"></div>
                </div>

                
            </div>  
        );
}



export default Upload;