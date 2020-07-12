import React, {  useState, useEffect, useRef, Component  } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class Login extends Component {
   constructor(props){
     super(props)


     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleBlur = this.handleBlur.bind(this);
     this.sendEmail = this.sendEmail.bind(this);

     this.state = {
         email: '',
         password: '',
         touched: {
          email: false,
          password: false,
         
      }
     }
 }

  sendEmail = (email, password) => {

      alert(`email \n password`)
    //  return fetch("https://rockwavetech.herokuapp.com/api/send_email", {
    //    method: "POST",
    //    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    //    body: JSON.stringify({ email, telnumber, feedback })
    //  }).then(response => response.json());
   };
   
 validate(email){
     const errors = {
         email: '',
         password: ''
     };
     const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // email.split('').filter(x => x === '@').length !== 1
     if(this.state.touched.email && !emailReg.test(email)) {
         errors.email = 'Email is not correct';
     }
     
    //  const reg = /^\d+$/;
    //  if(this.state.touched.telnumber && !reg.test(telnumber)){
    //      errors.telnumber = 'Tel. Number should contain only numbers';
    //  }
     

    //  if(this.state.touched.feedback && feedback.length > 150) {
    //      errors.feedback = "Your message should not be more than 150.";
    //  }

     return errors;
     
 }


 handleChange(event) {
     const target = event.target;
     const name = target.name;
     const value = target.value;
 
     this.setState({ 
         [name] : value 
     });
 }
 
 handleSubmit(event) {
     alert(`Your email is: ${this.state.email} and Password is ${this.state.password}`);
    
     
     event.preventDefault();
 }

 canBeSubmitted(){
     const errors = this.validate(this.state.email);
     const isDisabled = Object.keys(errors).some(x => errors[x]);
     return !isDisabled;
 }

 handleBlur = (field) => (evt) => {
     this.setState({
         touched: {...this.state.touched, [field]: true},
     });
 }
 
 cleanUpFields = () => {
    this.setState({
         email: '',
         password: '',
         touched: {
             email: false,
             password: false
         }
    }); 
 }
      render(){

        const errors = this.validate(this.state.email);
        const { email, password } = this.state;
        const isDisabled = email.length  > 0 && password.length > 0;
       
        return(
            <div className="container min-height">
                <div className="row content">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <Form>
                      <h1 className="text-center">Login</h1>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Email" className="mr-sm-2">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="Email" 
                            value={this.state.email}
                                onChange={this.handleChange}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                onBlur={this.handleBlur('email')}
                            />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="Password" className="mr-sm-2">Password</Label>
                        <Input 
                        type="password" 
                        name="password" 
                        id="Password"
                        value={this.state.password}
                                onChange={this.handleChange}
                                valid={errors.password === ''}
                                invalid={errors.password !== ''}
                                onBlur={this.handleBlur('password')}
                        />
                    </FormGroup>
                    <Button 
                    className="btn btn-success" disabled={!isDisabled} onClick={() => {
                      const { email, feedback, telnumber } = this.state;
                      if( email && feedback && telnumber) {
                          this.sendEmail(email, password)
                        }}}
                    onClick={this.handleOnSubmit}>Submit</Button>
                    </Form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div> 
        );
      }
    }



export default Login;