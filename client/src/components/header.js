import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
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
        const headerNav = {
            backgroundColor: "#ff9900",
            color: "white"
        }

        const menus = {
            margin: "-3% 0 0 0",
            backgroundColor: "#ff9900" 
        }

       

    return( 
        

        // <div>
        //     <nav></nav>
        //     <ul id="slide-out" class="sidenav">
        //         <li>
        //             <div class="user-view">
        //                 <di>
        //                     <img src={logo} />
        //                 </di>
        //                 <a href="#company"><img class="circle" src={logo} /></a>
        //                 <a href="#name"><span class="white-text name">Admin</span></a>
        //             </div>
        //         </li>
        //         <li><a href="/">Home</a></li>
        //         <li><a href="/aboutus">About</a></li>

        //     </ul>
        //     <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

        // </div>
      
        <div className="fixed-top">
        <Navbar style={headerNav} expand="md" dark alignLinks="right" >
          <div className="container customHeader">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/home"><img src={logo} width="40%" height="30%" className="img-fluid mb-4" alt="Rockwavetech logo" /></NavbarBrand> 
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav style={menus} className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                    <span className="linkk">Home</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                        <span className="linkk">About </span>
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
                <NavItem>
                    <NavLink className="nav-link" to="/admin">
                         <span className="linkk">Login</span>
                    </NavLink>
                </NavItem>
                {/* 
                <NavItem>
                    <NavLink className="nav-link" to="/dashboard/edit">
                         <span className="linkk"> Edit </span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/dashboard/upload">
                         <span className="linkk"> Upload </span>
                    </NavLink>
                </NavItem> */}
                </Nav>
            </Collapse>
            </div>
        </Navbar>
      </div>
         
        );
    }
}

export default Header;