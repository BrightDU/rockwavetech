import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";

class ContactForm extends Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.state = {
            email: '',
            telnumber: '',
            feedback: '',
            touched: {         
                email: false,
                telnumber: false,
                feedback: false,
            }
        }
    }

     sendEmail = (email, telnumber, feedback) => {
        return fetch("https://https:rockwavetech.herokuapp.com/api/send_email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, telnumber, feedback })
        }).then(response => response.json());

      };
      
    validate(email, telnumber, feedback){
        const errors = {
            email: '',
            telnumber: '',
            feedback: ''  
        };

       
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = 'Email should contain a @ sign';
        }
        
        const reg = /^\d+$/;
        if(this.state.touched.telnumber && !reg.test(telnumber)){
            errors.telnumber = 'Tel. Number should contain only numbers';
        }
        

        if(this.state.touched.feedback && feedback.length > 150) {
            errors.feedback = "Your message should not be more than 150.";
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
    
    handleSubmit(event) {
        //alert(`Your email is: ${this.state.email} and tel. number is ${this.state.telnumber} and feedback is ${this.state.feedback}`);
       
        //this.sendEmail(this.state.email, this.state.telnumber, this.state.feedback);
        event.preventDefault();
    }

    canBeSubmitted(){
        const errors = this.validate(this.state.email, this.state.telnumber, this.state.feedback);
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
            telnumber: '',
            feedback: '', 
            touched: {
                email: false,
                telnumber: false,
                feedback: false
            }
       }); 
    }

    render(){
        const errors = this.validate(this.state.email, this.state.telnumber,  this.state.feedback);
        const { email, telnumber, feedback } = this.state;
        const isDisabled = email.length  > 0 && telnumber.length > 0 && feedback.length > 0;
       
        return(
            <div className="">
               <div className="row address">
                    <h3 className="mt-2 ml-3 adress">Our Address</h3> 
                    
                    <address className="locate ml-4">
                        Block D Suite 15, POWA Plaza Nyanya Checkpoint, Abuja-keffi Express Way.
                    </address>                   
                    <address className="locate ml-3">   
                        <span></span><i className="fa fa-phone"></i>: +2348039658886<br/>
                        <span></span><i className="fa fa-envelope"></i>: <a className="link" href="mailto:rockwaveengineering@gmail.com">rockwaveengineering@gmail.com</a>
                    </address>  
                </div>
                <hr/>
               <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Col md={12}>
                            <Input 
                                name="email"
                                type="text"
                                placeholder="youremail@gmail.com"
                                value={this.state.email}
                                onChange={this.handleChange}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                onBlur={this.handleBlur('email')}
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={12}>
                            <Input 
                                name="telnumber"
                                type="text"
                                placeholder="your number"
                                value={this.state.telnumber}
                                onChange={this.handleChange}
                                valid={errors.telnumber === ''}
                                invalid={errors.telnumber !== ''}
                                onBlur={this.handleBlur('telnumber')}
                            />
                            <FormFeedback>{errors.telnumber}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={12}>
                            <Input type="textarea" 
                                placeholder="Your Message...."
                                value={this.state.feedback}
                                onChange={this.handleChange} 
                                valid={errors.feedback === ''}
                                invalid={errors.feedback !== ''}
                                onBlur={this.handleBlur('feedback')} 
                                name="feedback" className="feedback" maxLength="300" rows={8} />
                            <FormFeedback>{errors.feedback}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <Button className="btn btn-success" disabled={!isDisabled} onClick={() => {
                        const { email, feedback, telnumber } = this.state;
                        if( email && feedback && telnumber) {
                            this.sendEmail(email, telnumber, feedback).then(({message}) => {
                                //alert(message); //handling success here.
                                //console.log(message);
                                if(message){
                                    //console.log("Yes!! everything worked fine");
                                    window.Materialize.toast('Thank you for getting in touch!, we\'ll get back to you shortly.', 10000, 'green rounded');
                                    this.cleanUpFields();
                                }
                            }).catch((error) => window.Materialize.toast('Sorry!, could not send your message, please try again later.', 10000, 'red rounded'));
                        }else {
                            alert("Please fill out all fields");
                        }
                    }}>SAY HELLO</Button>
               </Form>
            </div> 
        );
    }
}


export default ContactForm;