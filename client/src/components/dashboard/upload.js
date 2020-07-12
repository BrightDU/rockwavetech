import React, { Component } from 'react';
import {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import { useMutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';


export const CREATE_UPLOAD = gql`
  mutation createUpload($thumbnail: String, $picture: String, $description: String) {
    createUpload(thumbnail: $thumbnail, picture: $picture, description: $description) {
      thumbnail
      picture
      description
    }
  }
`

const Upload = (props) => {
    
    //app state
    const [thumbnail, setThumbnail] = useState('');
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');

    //handle form fields
    const handleChange = e => {
        const { name, type, value } = e.target;
        setDescription(value);
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
        console.log(file);
    }
      
     //const { loading, error, data }  = useMutation(CREATE_UPLOAD);
     
        return(
            
            <div className="container min-height content">
                <div className="row">
                    <div className="col-md-2 col-sm-0"></div>
                    <div className="col-md-8 col-sm-12 ">
                       <Form className="border p-4">
                       <FormGroup>
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
                               placeholder="Image Description"
                               onChange={handleChange}
                               />
                            <Button className="btn-u m-3" size="lg" blockdd>Create </Button>
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