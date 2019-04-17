import React, { Component } from 'react';
import { Navbar } from "react-materialize";
import { NavbarBrand, NavItem, Nav, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
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
        const bgColor = {
            backgroundColor: "black",
            display: "inline-block"
        }
    return(
        <div className="fixed-top" >
            <Navbar style={bgColor} brand={<img src={logo} width="100px" height="50px" className="img-fluid mb-3" />} alignLinks="right">
                 
                    <Nav className="right">
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="linkk">Home </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="linkk">About</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/gallery">
                                <span className="linkk">Gallery </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="linkk">Contact </span>
                            </NavLink>
                        </NavItem>  
                    </Nav> 
               
            </Navbar>  
        </div>  
        );
    }
}

export default Header;