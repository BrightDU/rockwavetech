import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem } from "react-materialize";
import { NavbarBrand, Nav, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
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
        <div className="fixed-top">
            <Navbar brand={<img src={logo} width="100px" height="50px" className="img-fluid mb-3" />} alignLinks="right">
                   <div className="text-center">
                        <div className="right">

                            <NavItem href="home">
                                Home
                            </NavItem>
                            <NavItem href="aboutus">
                                About
                            </NavItem>
                            <NavItem href="gallery">
                                Gallery
                            </NavItem>
                            <NavItem href="contactus">
                                Contact
                            </NavItem>
                        </div>
                    </div>
            </Navbar>  
        </div>  
        );
    }
}

export default Header;