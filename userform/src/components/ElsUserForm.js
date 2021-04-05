import React, { Component } from 'react';
import ElsFormUserDetails from './ElsFormUserDetails';
import ElsFormPersonalDetails from './ElsFormPersonalDetails';
import ElsConfirm from './ElsConfirm';
import Success from './Success';


export class  ElsUserForm extends Component {
    state = { 
        step: 1,
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
        const { title, firstName, lastName, firstNameNOTsame,lastNameNOTsame, nameOtherKnown,namePrefer, email, occupation, city, 
            bio} = this.state;
        const values = { title, firstName, lastName, firstNameNOTsame, lastNameNOTsame, nameOtherKnown, namePrefer, email, occupation, city, 
            bio} 
        
            switch(step) {
                case 1:
                    return(
                        <ElsFormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );
                case 2:
                    return(
                        <ElsFormPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );
                case 3:
                    return(
                        <ElsConfirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );
                case 4:
                    return <Success />; 
            }
    }
}
 
export default ElsUserForm;