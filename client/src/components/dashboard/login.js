import React, {  useState, useEffect, useRef, Component  } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class Login extends Component {
   constructor(props){
     super(props)


     this.state = {
       email: "",
       password: "",
       errorMsg: "",
       successMsg: "",
     }
   }
    // const [state, setState] = useState({
    //   email: '',
    //   password: ''
    // });
    // const [errorMsg, setErrorMsg] = useState('');
    // const [successMsg, setSuccessMsg] = useState('');
    // const emailRef = useRef();
    // const passwordRef = useRef();
  
     handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    //  validateInput = () => {
    //     const fields = [
    //       {
    //         name: 'email',
    //         value: state.email,
    //         message: 'Email address should not be blank.'
    //       },
    //       {
    //         name: 'password',
    //         value: state.password,
    //         message: 'Password should not be blank.'
    //       }
    //     ];
    //     const isNotFilled = fields.some(field => {
    //       if (field.value.trim() === '') {
    //         this.setState({ errorMsg: field.message });
    //         field.name === 'email'
    //           ? emailRef.current.focus()
    //           : passwordRef.current.focus();
    //         return true;
    //       }
    //       this.setState({errorMsg: ""});
    //       return false;
    //     });
    //     return isNotFilled;
    //   };
    
       handleOnSubmit = event => {
        event.preventDefault();
       // const isInvalid = validateInput();
        // if (!isInvalid) {
        //   setSuccessMsg("You're good to go!");
        // } else {
        //   setSuccessMsg('');
        // }
        console.log(`${this.state.email} and ${this.state.password} received.`)
      };
      render(){
        return(
            <div className="container min-height">
                <div className="row content">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <Form>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Email" className="mr-sm-2">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="Email" 
                            // ref={emailRef}
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Password" className="mr-sm-2">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="Password"
                        // ref={passwordRef}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <Button onClick={this.handleOnSubmit}>Submit</Button>
                    </Form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div> 
        );
      }
    }



export default Login;