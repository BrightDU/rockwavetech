import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Col, Form, FormGroup, Input, Button, FormFeedback } from "reactstrap";

export const SEND_MAIL = gql`
    mutation sendmail($to: String, $from: String!, $message: String!, $number: String, $subject: String) {
        sendMail(to: $to, from: $from, message: $message, number: $number, subject: $subject) {
            message
        }
    }


`;


// const {sendmail, { loading, error, data}} = useMutation(SEND_MAIL);

const ContactForm = (props) => {

    const [sendMail, { loading }] = useMutation(SEND_MAIL);

    //state
    const [email, setEmail] = useState('');
    const [telnumber, setTelnumber] = useState('');
    const [feedback, setFeedback] = useState('');
   

    // constructor(props){
    //     super(props)

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleBlur = this.handleBlur.bind(this);
    //     this.sendEmail = this.sendEmail.bind(this);
    //     this.state = {
    //         email: '',
    //         telnumber: '',
    //         feedback: '',
    //         touched: {         
    //             email: false,
    //             telnumber: false,
    //             feedback: false,
    //         }
    //     }
    // }

    //  const sendEmail = (email, telnumber, feedback) => {
    //     return fetch("https://rockwavetech.herokuapp.com/api/send_email", {
    //       method: "POST",
    //       headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    //       body: JSON.stringify({ email, telnumber, feedback })
    //     }).then(response => response.json());
    //   };
      
   const validate = (email, telnumber, feedback) => {
        const errors = {
            email: '',
            telnumber: '',
            feedback: ''  
        };

       
        if(email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = 'Email should contain a @ sign';
        }
        
        const reg = /^\d+$/;
        if(telnumber && !reg.test(telnumber)){
            errors.telnumber = 'Tel. Number should contain only numbers';
        }
        

        if(feedback && feedback.length > 150) {
            errors.feedback = "Your message should not be more than 150.";
        }

        return errors;
        
    }
 

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handleTelnumberChange = (event) => {
        const value = event.target.value;
        setTelnumber(value);
    }
    const handleFeedbackChange = (event) => {
        const value = event.target.value;
        setFeedback(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const mailResp = sendMail({
            variables: {from: email, message: feedback, number: telnumber, subject: "INQUIRY"}
        })
        .then((data) => {
            window.Materialize.toast('Thank you for getting in touch, we\'ll get back to you shortly.', 10000,  'green rounded');
        })
        .catch((err) => window.Materialize.toast('Sorry!, could not send your message, please try again later or check your internet connection.', 10000, 'red rounded'));

        //clean up the fields
        cleanUpFields();
    }

    // const canBeSubmitted = () => {
    //     const errors = this.validate(this.state.email, this.state.telnumber, this.state.feedback);
    //     const isDisabled = Object.keys(errors).some(x => errors[x]);
    //     return !isDisabled;
    // }

//    const handleBlur = (field) => (evt) => {
//         setTouched({
//             touched: {[field]: true},
//         });
//     }
    
    const cleanUpFields = () => {
        setEmail('');
        setTelnumber('');
        setFeedback('');
    }

    
        const errors = validate(email, telnumber,  feedback);
        // const { email, telnumber, feedback } = useState();
        const isDisabled = email.length  > 0 && telnumber.length > 0 && feedback.length > 0 && errors;
       
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
               <Form method="POST" onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Col md={12}>
                            <Input 
                                name="email"
                                type="email"
                                placeholder="youremail@gmail.com"
                                value={email}
                                onChange={handleEmailChange}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                //onBlur={handleBlur('email')}
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
                                value={telnumber}
                                onChange={handleTelnumberChange}
                                valid={errors.telnumber === ''}
                                invalid={errors.telnumber !== ''}
                                // onBlur={handleBlur('telnumber')}
                            />
                            <FormFeedback>{errors.telnumber}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={12}>
                            <Input
                                name="feedback" 
                                type="textarea" 
                                placeholder="Your Message...."
                                value={feedback}
                                onChange={handleFeedbackChange} 
                                valid={errors.feedback === ''}
                                invalid={errors.feedback !== ''}
                                // onBlur={handleBlur('feedback')} 
                               className="feedback" maxLength="500" rows={8} />
                            <FormFeedback>{errors.feedback}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <Button className="btn btn-success" disabled={!isDisabled} >SEN{loading ? 'DING...': 'D'}</Button>
               </Form>
            </div> 
        );
    
}
// const { email, feedback, telnumber } = this.state;
// if( email && feedback && telnumber) {
//     this.sendEmail(email, telnumber, feedback).then(({message}) => {
//         //alert(message); //handling success here.
//         //console.log(message);
//         if(message){
//             //console.log("Yes!! everything worked fine");
//             window.Materialize.toast('Thank you for getting in touch!, we\'ll get back to you shortly.', 10000, 'green rounded');
//             this.cleanUpFields();
//         }
//     }).catch((error) => window.Materialize.toast('Sorry!, could not send your message, please try again later.', 10000, 'red rounded'));
// }else {
//     alert("Please fill out all fields");
// }


export default ContactForm;