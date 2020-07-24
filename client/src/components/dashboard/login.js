import React, {  useState, useEffect, useRef, Component  } from 'react';
import  gql  from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!){
        login(email:$email, password:$password){
            token
            user {
                id
                email
                password
            }
        }
    }
`;


class Login extends Component {
    constructor(props){
      super(props)
 
 
      this.handleChange = this.handleChange.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
 
      this.state = {
          email: '',
          password: '',
          touched: {
           email: false,
           password: false,
          
       }
      }
  }
 
    
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
  
//   handleSubmit(event) {
//        event.preventDefault();
//   }
 
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
             <Mutation
                mutation={LOGIN_MUTATION}
                variables={{email, password}}
                onCompleted={() => this.props.history.push('/dashboard')}
                >
                {(login, { loading, error, data}) => (
                    <div className="container min-height">
                    <div className="row content">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <Form 
                            method="post" 
                            onSubmit={ (e) => {
                                e.preventDefault(); 
                                  login();
                                
                                this.setState({ email: '', password: ''});
                            }}>
                          <h1 className="text-center">Login</h1>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="Email" className="mr-sm-2">Email</Label>
                            <Input 
                                type="email" 
                                name="email" 
                                id="Email" 
                                value={email}
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
                            value={password}
                                    onChange={this.handleChange}
                                    valid={errors.password === ''}
                                    invalid={errors.password !== ''}
                                    onBlur={this.handleBlur('password')}
                            />
                        </FormGroup>
                        <Button 
                        className="btn btn-success" type="submit" disabled={!isDisabled}>LOG{loading ? 'GING..' : 'IN'}</Button>
                        </Form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    </div> 
                )}
            </Mutation>
         );
       }
     }
 
 
 
 export default Login;

//  class Login extends Component {
   
//     //  this.handleChange = this.handleChange.bind(this);
//     //  this.handleSubmit = this.handleSubmit.bind(this);
//     //  this.handleBlur = this.handleBlur.bind(this);
//     const [login, { loading, error, data}] = useMutation(LOGIN);
    
//     //State
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [touched, setTouched] = useState({ email: false, password: false });
     
   
//  const validate = (email) => {
//      const errors = {
//          email: '',
//          password: ''
//      };
//      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     // email.split('').filter(x => x === '@').length !== 1
//      if(touched.email && !emailReg.test(email)) {
//          errors.email = 'Email is not correct';
//      }
     
//     //  const reg = /^\d+$/;
//     //  if(this.state.touched.telnumber && !reg.test(telnumber)){
//     //      errors.telnumber = 'Tel. Number should contain only numbers';
//     //  }
     

//     //  if(this.state.touched.feedback && feedback.length > 150) {
//     //      errors.feedback = "Your message should not be more than 150.";
//     //  }

//      return errors;
     
//  }


//  const handleChange = (event)  => {
//      const target = event.target;
//      const name = target.name;
//      const value = target.value;
 
//     //  this.setState({ 
//     //      [name] : value 
//     //  });
//     setEmail(value);
//     setPassword(value);
//     setTouched(value);
//  }
 
//  const handleSubmit =  async ( e) => {
//     //e.preventDefault();

//     //send queries
//     const loginResp = await login({ variables: { email, password }});
    
//     //output
//     console.log(loginResp);

//    //c alert(`Your email is: ${email} and Password is ${password}`);
//  }

//  const canBeSubmitted = () => {
//      const errors = validate(email);
//      const isDisabled = Object.keys(errors).some(x => errors[x]);
//      return !isDisabled;
//  }

//  const handleBlur = (field) => (evt) => {
//      setTouched({ ...touched, [field]: true})
//     //  this.setState({
//     //      touched: {...state.touched, [field]: true},
//     //  });
//  }
 
//  const cleanUpFields = (props) => {
//     setEmail('');
//     setPassword('');
//     setTouched({ email: false, password: false });
//  }

// const errors = validate(email);
// const isDisabled = email.length  > 0 && password.length > 0;

//         return(
//             <div className="container min-height">
//                 <div className="row content">
//                     <div className="col-md-3"></div>
//                     <div className="col-md-6">
//                     <Form onClick={handleSubmit} method="POST">
//                       <h1 className="text-center">Login</h1>
//                     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                         <Label for="Email" className="mr-sm-2">Email</Label>
//                         <Input 
//                             type="email" 
//                             name="email" 
//                             id="Email" 
//                             value={email}
//                                 onChange={handleChange}
//                                 valid={errors.email === ''}
//                                 invalid={errors.email !== ''}
//                                 onBlur={handleBlur('email')}
//                             />
//                     </FormGroup>
//                     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                         <Label for="Password" className="mr-sm-2">Password</Label>
//                         <Input 
//                         type="password" 
//                         name="password" 
//                         id="Password"
//                         value={password}
//                                 onChange={handleChange}
//                                 valid={errors.password === ''}
//                                 invalid={errors.password !== ''}
//                                 onBlur={handleBlur('password')}
//                         />
//                     </FormGroup>
//                     <Button 
//                      type="submit" className="btn btn-success" disabled={!isDisabled}>
//                      Submit</Button>
//                     </Form>
//                     </div>
//                     <div className="col-md-3"></div>
//                 </div>
//             </div> 
//         );
//     }



// export default Login;