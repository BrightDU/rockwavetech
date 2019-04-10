import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavbarBrand, Nav, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Navbar, NavItem } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { Center } from 'react-center';
import logo from './images/rocklogo.png';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = { 
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleNav(){
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(event) {
        this.toggleModal();
        alert(`Welcome: ${this.name.value} we have recieved your ${this.projectbrief.value}`);
        event.preventDefault();
    }


    render(){
    return(
        <div className="header">
            
            <Navbar dark expand="md" color="black" fixed="top">
                <div className="container-fluid nbar">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src={logo} width="100px" height="50px" className="img-fluid mb-3"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="navi">Home</span> 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="navi nav-link" to="/aboutus">
                                    <span  className="navi"> About </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/gallery">
                                    <span className="navi">Gallery </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="navi"> Contact</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                        
                            <NavItem>
                                <Button style={{ border: 'orange'}} outline onClick={this.toggleModal}>
                                    <span className="" ></span> Request a Quote
                                </Button>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Tell Us about your project</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" 
                                placeholder="Your name" innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Project</Label>
                            <Input type="textarea" id="projectbrief" rows={10} name="projectbrief" 
                                placeholder="Tell us about your project..." innerRef={(input) => this.projectbrief = input} />
                        </FormGroup>
                        <Button type="submit" onClick={this.handleSubmit} value="submit" color="primary">SUBMIT</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>    
        );
    }
}

export default Header;