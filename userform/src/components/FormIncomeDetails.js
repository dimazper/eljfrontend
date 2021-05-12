import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { Checkbox } from 'material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './Userform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Progress from './progress'
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import DatePicker from 'react-bootstrap';
import HeaderForm from './HeaderForm';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';


// Import React Progress Bar
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
// Import React Progress Bar
import Accordion from './Accordion';
// import ProgressBar from './ProgressBar';
import './LandingPage.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { faCircle, faDotCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Leaves from '../assets/bg.png';
import { ProgressBar, Step } from "react-step-progress-bar";



export class FormIncomeDetails extends Component {
    state = {
        showing2: false,
        showing3: false,
        showing4: false,
        namePrefer: ''

    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 

    render() {
        const { values, handleChange } = this.props;
        const { showing2, showing3, showing4 } = this.state;
        const showfirst = values.firstName + " " + values.lastName;
        const showsecond = values.firstNameNOTsame + " " + values.lastNameNOTsame;
        const { classes } = this.props;


        return (
            <MuiThemeProvider id='title'>
                <HeaderForm />
                <React.Fragment>

                    {/* <ProgressBar
                    percent={10}
                    filledBackground="linear-gradient(to right, #00080, #f0bb31)"
                    text="10%"
                    height="15px"
                />             */}






                    {/* Question 1              */}
                    <FormControl component="fieldset">

                        {/* <BorderLinearProgress variant="determinate" value={10} /> */}

                        <div class="cardLeaves">
                        <img src={Leaves} width="300" height="350" alt="Person"/>
                        </div>
                        <div class="card">
                            <h1>Tell us about your income and assets</h1>
                            <br></br>
                            <br></br>
                            <ProgressBar percent={75}>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
</ProgressBar>
                            <br></br>
                            <br></br>
                            <div>   <div >

                            </div></div>

                            <h3>Do you expect to get income from any of the following sources in the next 52 weeks?</h3>
                            {/* <p class="question">Do you expect to get income from any of the following sources in the next 52 weeks?</p><br></br> */}

                            <FormControl component="fieldset">
                                <FormLabel component="legend">Wages or salary</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('jointPartnerWhere1')}
                                        defaultValue={values.incomeWagesSalary}
                                    />
                                    <FormControlLabel
                                        value="incomeWagesSalary"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('jointPartnerWhere1')}
                                        defaultValue={values.incomeWagesSalary}
                                        onClick={() => this.setState({ showing3: !showing3 })}
                                    />
                                </RadioGroup>
                            </FormControl><br></br>
                            { showing3 ?
                                <div class="question">

                            <Grid container spacing={75}>


                                <Grid item xs={4}>
                                    <FormLabel component="legend">Its value</FormLabel><br></br>
                                    <TextField
                                        onChange={handleChange('jointPartnerYou1')}
                                        defaultValue={values.jointPartnerYou1}
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormLabel component="legend">How often do you expect the payment?</FormLabel>

                                    <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        onChange={handleChange('jointPartnerFreq1')}
                                        defaultValue={values.jointPartnerFreq1}
                                        label="How often do you expect the payment?"
                                    >
                                        <MenuItem value="">
                                            <em>               </em>
                                        </MenuItem>
                                        <MenuItem value={'weekly'}>Weekly</MenuItem>
                                        <MenuItem value={'Fortnightly'}>Fortnightly</MenuItem>
                                        <MenuItem value={'Monthly'}>Monthly</MenuItem>
                                        <MenuItem value={'One-off'}>One-off</MenuItem>

                                    </Select>

                                </Grid>
                                    
                            </Grid>
                             </div> : null }
                            <br></br>

                            <FormControl component="fieldset">
                                <FormLabel component="legend">Paid parental leave</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('paidParentalLeave')}
                                        defaultValue={values.paidParentalLeave}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('paidParentalLeave')}
                                        defaultValue={values.paidParentalLeave}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Termination pay</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('terminationPay')}
                                        defaultValue={values.terminationPay}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('terminationPay')}
                                        defaultValue={values.terminationPay}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Redundancy pay</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('redundancyPay')}
                                        defaultValue={values.redundancyPay}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('redundancyPay')}
                                        defaultValue={values.redundancyPay}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Accident compensation (eg ACC)</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('acc')}
                                        defaultValue={values.acc}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('acc')}
                                        defaultValue={values.acc}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Income insurance (replacement protection)</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeInsurance')}
                                        defaultValue={values.incomeInsurance}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeInsurance')}
                                        defaultValue={values.incomeInsurance}
                                        onClick={() => this.setState({ showing2: !showing2 })}


                                    />
                                    <FormControlLabel
                                        value="incomeInsurance"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('jointPartnerWhere2')}
                                        defaultValue={values.incomeInsurance}
                                        onClick={() => this.setState({ showing2: !showing2 })}

                                    />
                                </RadioGroup>
                            </FormControl><br></br>
                            { showing2 ?
                                <div class="question">
                            
                            <Grid container spacing={24}>


<Grid item xs={4}>
    <FormLabel component="legend">Its value</FormLabel><br></br>
    <TextField
        onChange={handleChange('jointPartnerWith2')}
        defaultValue={values.jointPartnerWith2}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
    />
</Grid>
<Grid item xs={4}>
    <FormLabel component="legend">How often do you expect the payment?       </FormLabel>

    <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
    <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={handleChange('jointPartnerFreq2')}
        defaultValue={values.jointPartnerFreq2}
        label="How often do you expect the payment?"
    >
        <MenuItem value="">
            <em>               </em>
        </MenuItem>
        <MenuItem value={'Weekly'}>Weekly</MenuItem>
        <MenuItem value={'Fortnightly'}>Fortnightly</MenuItem>
        <MenuItem value={'Monthly'}>Monthly</MenuItem>
        <MenuItem value={'One-off'}>One-off</MenuItem>

    </Select>

</Grid>

</Grid><br></br>
</div> : null }
                            
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Farm or business income</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeBusiness')}
                                        defaultValue={values.incomeBusiness}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeBusiness')}
                                        defaultValue={values.incomeBusiness}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeBusiness')}
                                        defaultValue={values.incomeBusiness}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Payments from self employment or contract work</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeSelfEmpContract')}
                                        defaultValue={values.incomeSelfEmpContract}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeSelfEmpContract')}
                                        defaultValue={values.incomeSelfEmpContract}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeSelfEmpContract')}
                                        defaultValue={values.incomeSelfEmpContract}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Interest from savings, investments or bonds</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeInterest')}
                                        defaultValue={values.incomeInterest}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeInterest')}
                                        defaultValue={values.incomeInterest}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeInterest')}
                                        defaultValue={values.incomeInterest}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Dividends from shares, unit trusts, or managed funds</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeDividends')}
                                        defaultValue={values.incomeDividends}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeDividends')}
                                        defaultValue={values.incomeDividends}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeDividends')}
                                        defaultValue={values.incomeDividends}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Income from rents</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeRental')}
                                        defaultValue={values.incomeRental}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeRental')}
                                        defaultValue={values.incomeRental}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeRental')}
                                        defaultValue={values.incomeRental}
                                    />

                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Payments from boarders or flatmates</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeFlatmates')}
                                        defaultValue={values.incomeFlatmates}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeFlatmates')}
                                        defaultValue={values.incomeFlatmates}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeFlatmates')}
                                        defaultValue={values.incomeFlatmates}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Child support payments</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeChildSup')}
                                        defaultValue={values.incomeChildSup}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeChildSup')}
                                        defaultValue={values.incomeChildSup}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Other income for a child</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeOtherForChild')}
                                        defaultValue={values.incomeOtherForChild}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeOtherForChild')}
                                        defaultValue={values.incomeOtherForChild}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Maintenance payments</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeMaintenance')}
                                        defaultValue={values.incomeMaintenance}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeMaintenance')}
                                        defaultValue={values.incomeMaintenance}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Payments from a former partner</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeFormerPartner')}
                                        defaultValue={values.incomeFormerPartner}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeFormerPartner')}
                                        defaultValue={values.incomeFormerPartner}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Student Allowance, scholarship, or Student Loan living cost payments</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeStudentAllowance')}
                                        defaultValue={values.incomeStudentAllowance}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeStudentAllowance')}
                                        defaultValue={values.incomeStudentAllowance}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Overseas pension, benefit or allowance payments</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeOverseasPension')}
                                        defaultValue={values.incomeOverseasPension}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeOverseasPension')}
                                        defaultValue={values.incomeOverseasPension}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Other superannuation or retirement scheme income (government or private)</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeSuper')}
                                        defaultValue={values.incomeSuper}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeSuper')}
                                        defaultValue={values.incomeSuper}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Income from an estate, if you've inherited money</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeEstate')}
                                        defaultValue={values.incomeEstate}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeEstate')}
                                        defaultValue={values.incomeEstate}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeEstate')}
                                        defaultValue={values.incomeEstate}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Income from trusts</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeTrusts')}
                                        defaultValue={values.incomeTrusts}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeTrusts')}
                                        defaultValue={values.incomeTrusts}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeTrusts')}
                                        defaultValue={values.incomeTrusts}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Other</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeOther')}
                                        defaultValue={values.incomeOther}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeOther')}
                                        defaultValue={values.incomeOther}
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                        onChange={handleChange('incomeOther')}
                                        defaultValue={values.incomeOther}
                                    />
                                </RadioGroup>
                            </FormControl><br></br><br></br>
                            
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Will you get other types of payment apart from money in the next 52 weeks?</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                        onChange={handleChange('otherTypeOfPayment')}
                                        defaultValue={values.otherTypeOfPayment}
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                        onChange={handleChange('otherTypeOfPayment')}
                                        defaultValue={values.otherTypeOfPayment}
                                        onClick={() => this.setState({ showing4: !showing4 })}

                                    />
                                </RadioGroup>
                            </FormControl>
                            <br></br>
                            { showing4 ?
                                <div class="question"><br></br>
                            <Grid container spacing={24}>


<Grid item xs={4}>
    <FormLabel component="legend">Type of payment</FormLabel><br></br>
    <TextField
        onChange={handleChange('other52weeksType1')}
        defaultValue={values.other52weeksType1}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
    />
</Grid>
<Grid item xs={4}>
    <FormLabel component="legend">Where will it come from?</FormLabel><br></br>
    <TextField
        onChange={handleChange('other52weeksWhere1')}
        defaultValue={values.other52weeksWhere1}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
    />
</Grid>
<Grid item xs={4}>
    <FormLabel component="legend">Its value</FormLabel><br></br>
    <TextField
        onChange={handleChange('other52weeksValue1')}
        defaultValue={values.other52weeksValue1}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
    />
</Grid>

</Grid><br></br>
</div> : null }
<br></br>
<div class="column">
        <div class="cardButtonLeft">
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.back} style={styles.button}
        >
          Back
        </Fab>
        </div>      
        </div>

        <div class="column">
        <div class="ButtonLeft">
        </div>
        </div>



        <div class="column">
        <div class="cardButtonRight">
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.continue} style={styles.button}
        >
          Next
        </Fab>
        </div>
        </div>

                            {/* <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.back} style={styles.button}>
          Back 
        </Button>

        <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.continue} style={styles.button}>
          Continue 
        </Button> */}
                            {/* <RaisedButton
                                label="Back"
                                primary={false}
                                style={styles.button}
                                onClick={this.back}
                            />
                            <RaisedButton
                                label="Continue"
                                // primary={true}
                                backgroundColor= '#1cbaa1'
                                style={styles.button}
                                onClick={this.continue}
                            /><br /><br /> */}
                        </div>
                    </FormControl><br></br>
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

FormIncomeDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormIncomeDetails);