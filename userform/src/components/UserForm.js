import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormIncomeDetails from './FormIncomeDetails';

import Confirm from './Confirm';
import Success from './Success';
import FormDependentChildren from './FormDependentChildren';


export class  UserForm extends Component {
    state = { 
        step: 1,
        clientNumber:'',
        title: '',
        firstName: '',
        lastName: '',
        firstNameNOTsame: '',
        lastNameNOTsame:'',
        nameOtherKnown: '',
        namePrefer:'',
        email: '',
        occupation: '',
        city: '',
        bio: ''
     }

     // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Hande fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { clientNumber, title, firstName, lastName, firstNameNOTsame,lastNameNOTsame, nameOtherKnown,namePrefer, email, occupation, city, 
            bio} = this.state;
        const values = { clientNumber, title, firstName, lastName, firstNameNOTsame, lastNameNOTsame, nameOtherKnown, namePrefer, email, occupation, city, 
            bio} 
        
            switch(step) {
                case 1:
                    return(
                        <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );
                case 2:
                    return(
                        <FormPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );
                    case 3:
                        return(
                            <FormIncomeDetails
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values} 
                            />
                        );
                case 4:
                    return(
                        <FormIncomeDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );

                    return <Success />; 
            }
    }
}
 
export default UserForm;