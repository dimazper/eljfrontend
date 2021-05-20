import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// import { Checkbox } from 'material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './Userform.css';
import TextField from '@material-ui/core/TextField';
import HeaderForm from './HeaderForm';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import { List, ListItem } from 'material-ui/List';
import Fab from '@material-ui/core/Fab';



export class ElsFormUserDetails extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            ece: [],
            clientNumber: '',
        }
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    componentDidMount() {
  
        let data ;
        // let url = 'http://54.153.158.95:8000/ccs/';

        // axios.get('http://34.230.74.44:8000/ccs/',
        // {headers: {'authorization': 'Token 5f1c57dbbe2dbaabe6f8ada1c7f3c0e6dd2e2a35'}})
  
        axios.get('http://54.153.158.95:8000/ccs/8/',
        {headers: {'authorization': 'Token 4a5f71da0b2e237c6765c3363e4f18634769ad41'}})
        .then(res => {
            data = res.data;
            this.setState({
                ece : [data]    
            });
        })
        .catch(err => {})
        

    }

    renderCCSformdata() {
        // console.log(this.ece.Child_ece_hourly_fee_1);
        var a = parseInt(this.ece.Child_ece_hourly_fee_1);
        var b = parseInt(this.ece.Child_ece_hrs_care_1);
        var tot = a*b;
        const { classes } = this.props;

           
           return (
               
              <tr >
                  <td>{tot}</td>
                  
              </tr>              
           
        )
     }

     continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() { 
        const { values, handleChange } = this.props;
        const { classes } = this.props;
        const rowLen = this.state.ece.length;
        // console.log(this.ece.Child_ece_hourly_fee_1);
        // var a = parseInt(this.ece.Child_ece_hourly_fee_1);
        // var b = parseInt(this.ece.Child_ece_hrs_care_1);
        // var tot = a*b;
        console.log('row output '+rowLen);
        return (  
            
            <MuiThemeProvider>
                <HeaderForm/> 
                <React.Fragment>
                    
                <div>
                    
            {this.state.ece.map((ece) =>  (
            <div key={ece}>
  
                    <h1 class='yourSuperform'> Supervisor Childcare Subsidy Application Review</h1>
                   <div class='cardSuperform'>
                       
                   <Grid container spacing={24}>
           

                   <Grid item xs={4}>
                       <p>ECE ID</p>
                    </Grid>
                    <p>{ece.Child_ece_Id_1}</p>
                       
                    
                    </Grid>
                        <br></br>
                        <Grid container spacing={24}>
           

           <Grid item xs={4}>
               <p>Name of your childcare service</p>
            </Grid>
            <p>{ece.Child_ece_Org_Name_1}</p>

            
            </Grid>
                <br></br>
                
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Work and Income childcare service provider number?</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="OSCAR Number" //hfgfg
                        floatingLabelText="OSCAR Number"
                        label={ece.Child_ece_CCS_OSCAR_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Work phone</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_Telephone_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>

                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Mobile phone</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="First Name" //hfgfg
                        floatingLabelText="First Name"
                        label={ece.Child_ece_Mobile_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Email</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_Email_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> <br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Does your childcare service offer 20 Hours ECE?</p>
                    </Grid>
                    <p>Yes</p>
                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="How often do you expect the payment?"
                                    >
                                        <MenuItem value="">
                                            <em>{ece.Child_ece_Twenty_Hrs_1}</em>
                                        </MenuItem>
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                        


                                    </Select>
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Do you charge a holding or absense fee?</p>
                    </Grid>
                    <p>{ece.Child_ece_HoldingAbsenceFee_1}</p>
                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="How often do you expect the payment?"
                                    >
                                        <MenuItem value="">
                                            <em>{ece.Child_ece_HoldingAbsenceFee_1}</em>
                                        </MenuItem>
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                        


                                    </Select>
                    

                    </Grid><br></br>
                    
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 1's full name</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ECE_ChildName_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>

                     <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 1 Hours of care (weekly total)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_hrs_care_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 1 Hours of 20 Hours ECE received (weekly total)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ECE_WeekTotal_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 1 Care start date</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ECE_StartDate_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 1 Care end date (OSCAR only)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label=''
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 1 Your hourly fee (before subsidy)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_hourly_fee_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 1 Total</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_hourly_fee_1 * ece.Child_ece_hrs_care_1}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    {/* <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 2's full name</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ECE_ChildName_2}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>

                     <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 2 Hours of care (weekly total)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_hrs_care_2}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 2 Hours of 20 Hours ECE received (weekly total)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ECE_WeekTotal_2}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 2 Care start date</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ECE_StartDate_2}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 2 Care end date (OSCAR only)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label=''
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 2 Your hourly fee (before subsidy)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_hourly_fee_2}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Child 2 Total</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label={ece.Child_ece_hourly_fee_2 * ece.Child_ece_hrs_care_2}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br><br></br> */}
                    <h1>Parent Application Review</h1>
                    <List>
                    
                        <ListItem
                        primaryText="Client Number"
                        secondaryText={ ece.clientNumber }
                        />
                    </List>

                    <ListItem
                        primaryText="Title"
                        secondaryText={ ece.title }
                        />
                        <ListItem
                        primaryText="First Name"
                        secondaryText={ ece.firstName }
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText={ ece.lastName }
                        />
                        <ListItem
                        primaryText="Name on birth certificate the same as above"
                        secondaryText={ ece.nameOnBirthCert }
                        />
                        
                        <ListItem
                        primaryText="First name (not same as birth certificate)"
                        secondaryText={ ece.firstNameNOTsame }
                        />
                         <ListItem
                        primaryText="Last name (not same as birth certificate)"
                        secondaryText={ ece.lastNameNOTsame }
                        />
                        <ListItem
                        primaryText="Have you ever been known by any other name?"
                        secondaryText={ ece.knownByOtherName }
                        />
                         <ListItem
                        primaryText="Other name(s) known by"
                        secondaryText={ ece.nameOtherKnown }
                        />
                        <ListItem
                        primaryText="What name would you like us to call you?"
                        secondaryText={ ece.nameToCall }
                        />
                         <ListItem
                        primaryText="Preferred name"
                        secondaryText={ ece.namePrefer }
                        />
                        <ListItem
                        primaryText="Date of birth"
                        secondaryText={ ece.dob }
                        />
                        <ListItem
                        primaryText="Gender"
                        secondaryText={ ece.gender }
                        />
                        <ListItem
                        primaryText="Inland Revenue tax number"
                        secondaryText={ ece.irdNumber }
                        />
                        <ListItem
                        primaryText="Flat/ House Number"
                        secondaryText={ ece.flatHouseNum }
                        />
                        <ListItem
                        primaryText="Street Name"
                        secondaryText={ ece.streetName }
                        />
                        <ListItem
                        primaryText="Suburb"
                        secondaryText={ ece.suburb }
                        />
                        <ListItem
                        primaryText="Town/City"
                        secondaryText={ ece.townCity }
                        />
                        <ListItem
                        primaryText="Is your mailing address different from where you live?"
                        secondaryText={ ece.mailaddress }
                        />
                        <ListItem
                        primaryText="Mailing address (if different from where you live)"
                        secondaryText={ ece.mailingAddr }
                        />
                        <ListItem
                        primaryText="Home phone"
                        secondaryText={ ece.homePhone }
                        />
                        <ListItem
                        primaryText="Mobile phone"
                        secondaryText={ ece.mobPhone }
                        />
                        <ListItem
                        primaryText="Other phone"
                        secondaryText={ ece.otherPhone }
                        />
                        <ListItem
                        primaryText="Do you agree to get emails from us?"
                        secondaryText={ ece.email }
                        />
                        <ListItem
                        primaryText="Email address"
                        secondaryText={ ece.getEmails }
                        />
                        <ListItem
                        primaryText="the group(s) you most identify with"
                        secondaryText={ ece.ethnicGroup }
                        />
                        <ListItem
                        primaryText="the group(s) you most identify with (if you opt for other)"
                        secondaryText={ ece.ethnicity }
                        />
                        <ListItem
                        primaryText="Do you usually live in New Zealand?"
                        secondaryText={ ece.usuallyNZ }
                        />
                        <ListItem
                        primaryText="Residence status"
                        secondaryText={ ece.residenceStatus }
                        />
                        <ListItem
                        primaryText="Date granted"
                        secondaryText={ ece.dateGranted }
                        />
                        <ListItem
                        primaryText="What is your residence status (if you opt for other)?"
                        secondaryText={ ece.residenceStatus }
                        />
                        <ListItem
                        primaryText="The date you arrived in New Zealand"
                        secondaryText={ ece.dateArrived }
                        />
                        <ListItem
                        primaryText="Country of birth"
                        secondaryText={ ece.countryOfBirth }
                        />
                        <ListItem
                        primaryText="Tell us the reason you or your partner (if you have one) are applying for childcare assistance. Tick all that apply"
                        secondaryText={ ece.ccAssistanceReason }
                        /> 
                        <ListItem
                        primaryText="Are you working?"
                        secondaryText={ ece.isWorking }
                        /> 
                        <ListItem
                        primaryText="Are you on a work-related course or studying?"
                        secondaryText={ ece.workRelatedCourse }
                        />   
                        <ListItem
                        primaryText="Are you doing activities arranged for you by Work and Income?"
                        secondaryText={ ece.activities }
                        /> 
                        <ListItem
                        primaryText="Are you applying for childcare assistance because of medical reasons?"
                        secondaryText={ ece.medicalReason }
                        />
                        <ListItem
                        primaryText="Wages or salary"
                        secondaryText={ ece.incomeWagesSalary }
                        />
                        <ListItem
                        primaryText="Its value"
                        secondaryText={ ece.jointPartnerYou1 }
                        />
                        <ListItem
                        primaryText="How often do you expect the payment?"
                        secondaryText={ ece.jointPartnerFreq1 }
                        />  
                        <ListItem
                        primaryText="Paid parental leave"
                        secondaryText={ ece.paidParentalLeave }
                        />  
                        <ListItem
                        primaryText="Termination pay"
                        secondaryText={ ece.terminationPay }
                        /> 
                        <ListItem
                        primaryText="Redundancy pay"
                        secondaryText={ ece.redundancyPay }
                        /> 
                        <ListItem
                        primaryText="Accident compensation (eg ACC)"
                        secondaryText={ ece.acc }
                        />  
                        <ListItem
                        primaryText="Income insurance (replacement protection)"
                        secondaryText={ ece.incomeInsurance }
                        /> 
                        <ListItem
                        primaryText="Its value"
                        secondaryText={ ece.jointPartnerWith2 }
                        />  
                        <ListItem
                        primaryText="How often do you expect the payment?"
                        secondaryText={ ece.jointPartnerFreq2 }
                        /> 
                        <ListItem
                        primaryText="Farm or business income"
                        secondaryText={ ece.incomeBusiness }
                        />  
                        <ListItem
                        primaryText="Payments from self employment or contract work"
                        secondaryText={ ece.incomeSelfEmpContract }
                        /> 
                        <ListItem
                        primaryText="Interest from savings, investments or bonds"
                        secondaryText={ ece.incomeInterest }
                        /> 
                        <ListItem
                        primaryText="Dividends from shares, unit trusts, or managed funds"
                        secondaryText={ ece.incomeDividends }
                        />   
                        <ListItem
                        primaryText="Income from rents"
                        secondaryText={ ece.incomeRental }
                        />  
                        <ListItem
                        primaryText="Payments from boarders or flatmates"
                        secondaryText={ ece.incomeFlatmates }
                        />  
                        <ListItem
                        primaryText="Child support payments"
                        secondaryText={ ece.incomeChildSup }
                        />  
                        <ListItem
                        primaryText="Other income for a child"
                        secondaryText={ ece.incomeOtherForChild }
                        />  
                        <ListItem
                        primaryText="Maintenance payments"
                        secondaryText={ ece.incomeMaintenance }
                        /> 
                        <ListItem
                        primaryText="Payments from a former partner"
                        secondaryText={ ece.incomeFormerPartner }
                        />  
                         <ListItem
                        primaryText="Student Allowance, scholarship, or Student Loan living cost payments"
                        secondaryText={ ece.incomeStudentAllowance }
                        />
                        <ListItem
                        primaryText="Overseas pension, benefit or allowance payments"
                        secondaryText={ ece.incomeOverseasPension }
                        />
                        <ListItem
                        primaryText="Other superannuation or retirement scheme income (government or private)"
                        secondaryText={ ece.incomeSuper }
                        />  
                        <ListItem
                        primaryText="Income from an estate, if you've inherited money"
                        secondaryText={ ece.incomeEstate }
                        />  
                        <ListItem
                        primaryText="Income from trusts"
                        secondaryText={ ece.incomeTrusts }
                        />  
                        <ListItem
                        primaryText="Other"
                        secondaryText={ ece.incomeOther }
                        /> 
                        <ListItem
                        primaryText="Will you get other types of payment apart from money in the next 52 weeks?"
                        secondaryText={ ece.otherTypeOfPayment }
                        />
                        <ListItem
                        primaryText="Type of payment"
                        secondaryText={ ece.other52weeksType1 }
                        /> 
                        <ListItem
                        primaryText="Where will it come from?"
                        secondaryText={ ece.other52weeksWhere1 }
                        />  
                        <ListItem
                        primaryText="Its value"
                        secondaryText={ ece.other52weeksValue1 }
                        />
                        <ListItem
                        primaryText="Child 1's full name"
                        secondaryText={ ece.childFullName_1 }
                        /> 
                        <ListItem
                        primaryText="Date of birth"
                        secondaryText={ ece.childDOB_1 }
                        />
                        <ListItem
                        primaryText="Relationship to you"
                        secondaryText={ ece.childRelationToYou_1 }
                        /> 
                        <ListItem
                        primaryText="Child 2's full name"
                        secondaryText={ ece.childFullName_2 }
                        />  
                        <ListItem
                        primaryText="Date of birth"
                        secondaryText={ ece.childDOB_2 }
                        /> 
                        <ListItem
                        primaryText="Relationship to you"
                        secondaryText={ ece.childRelationToYou_2 }
                        /> 
                        <ListItem
                        primaryText="children receive 20 hours ECE from any childcare service?"
                        secondaryText={ ece.childReceive20Hrs }
                        />
                        <ListItem
                        primaryText="Child 1's name (receives 20 hours ECE)"
                        secondaryText={ ece.Child_ECE_ChildName_1 }
                        /> 
                        <ListItem
                        primaryText="Which childcare service/s does the child get 20 Hours ECE from?"
                        secondaryText={ ece.Child_ECE_Provider_1 }
                        /> 
                        <ListItem
                        primaryText="How many hours are received per week in total?"
                        secondaryText={ ece.Child_ECE_WeekTotal_1 }
                        /> 
                        <ListItem
                        primaryText="What date did the 20 Hours ECE start?"
                        secondaryText={ ece.Child_ECE_StartDate_1 }
                        />  
                        <ListItem
                        primaryText="Child 2's name (receives 20 hours ECE)"
                        secondaryText={ ece.Child_ECE_ChildName_2 }
                        /> 
                        <ListItem
                        primaryText="Which childcare service/s does the child get 20 Hours ECE from?"
                        secondaryText={ ece.Child_ECE_Provider_2 }
                        /> 
                        <ListItem
                        primaryText="How many hours are received per week in total?"
                        secondaryText={ ece.Child_ECE_WeekTotal_2 }
                        /> 
                        <ListItem
                        primaryText="What date did the 20 Hours ECE start?"
                        secondaryText={ ece.Child_ECE_StartDate_2 }
                        />
                        <ListItem
                        primaryText="Which children do you wish to get Childcare Subsidy for?"
                        secondaryText={ ece.childcareSubsidy }
                        /> 
                        <ListItem
                        primaryText="Child 1's Name (Childcare Subsidy)"
                        secondaryText={ ece.whichChildCCS_1 }
                        />   
                        <ListItem
                        primaryText="Child 2's Name (Childcare Subsidy)"
                        secondaryText={ ece.whichChildCCS_2 }
                        /> 
                        <ListItem
                        primaryText="Which children do you wish to get OSCAR Subsidy for?"
                        secondaryText={ ece.oscarSubsidy }
                        /> 
                        <ListItem
                        primaryText="Child 1's name (Oscar Subsidy)"
                        secondaryText={ ece.whichChildOSCAR_1 }
                        /> 
                        <ListItem
                        primaryText="Child 2's name (Oscar Subsidy)"
                        secondaryText={ ece.whichChildOSCAR_2 }
                        />

                    

                    

                    

        

                       </div>
                       
                                 
            </div>
            
            )
        )}
      </div>
      <div class="column">
    <div class="cardButtonRightELS">
      <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
        //   className={classes.margin}
          onClick={this.continue} style={styles.button}
        >
          Submit
        </Fab>
        </div>
        </div>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const stylesButton = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

const styles = {
    button: {
        margin: 15        
    }
  }


export default ElsFormUserDetails;