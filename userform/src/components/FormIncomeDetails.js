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
import ProgressBar from './ProgressBar';
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


export class FormPersonalDetails extends Component {
    state = {
        showing2: false,
        showing3: false,
        showing4: true,
        namePrefer: ''

    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        const { showing2, showing3, showing4 } = this.state;
        const showfirst = values.firstName + " " + values.lastName;
        const showsecond = values.firstNameNOTsame + " " + values.lastNameNOTsame;


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

                        <div class="card">
                            <h2>Tell us about your income and assets</h2>
                            <br></br>
                            <br></br>
                            <ProgressBar></ProgressBar>
                            <br></br>
                            <br></br>
                            <div>   <div >

                            </div></div>


                            <p class="question">Do you expect to get income from any of the following sources in the next 52 weeks?</p><br></br>

                            <FormControl component="fieldset">
                                <FormLabel component="legend">Wages or salary</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                            </FormControl><br></br>
                            <Grid container spacing={24}>


                                <Grid item xs={4}>
                                    <FormLabel component="legend">Its value</FormLabel><br></br>
                                    <TextField
                                        onChange={handleChange('firstName')}
                                        defaultValue={values.firstName}
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
                                        onChange={handleChange}
                                        label="How often do you expect the payment?"
                                    >
                                        <MenuItem value="">
                                            <em>               </em>
                                        </MenuItem>
                                        <MenuItem value={10}>Weekly</MenuItem>
                                        <MenuItem value={20}>Fortnightly</MenuItem>
                                        <MenuItem value={30}>Monthly</MenuItem>
                                        <MenuItem value={30}>One-off</MenuItem>

                                    </Select>

                                </Grid>

                            </Grid><br></br>

                            <FormControl component="fieldset">
                                <FormLabel component="legend">Paid parental leave</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                            </FormControl><br></br><Grid container spacing={24}>


<Grid item xs={4}>
    <FormLabel component="legend">Its value</FormLabel><br></br>
    <TextField
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
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
        onChange={handleChange}
        label="How often do you expect the payment?"
    >
        <MenuItem value="">
            <em>               </em>
        </MenuItem>
        <MenuItem value={10}>Weekly</MenuItem>
        <MenuItem value={20}>Fortnightly</MenuItem>
        <MenuItem value={30}>Monthly</MenuItem>
        <MenuItem value={30}>One-off</MenuItem>

    </Select>

</Grid>

</Grid><br></br>

                            
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Farm or business income</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio color="primary" />}
                                        label="No"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="jointly"
                                        control={<Radio color="primary" />}
                                        label="Jointly with partner"
                                        labelPlacement="end"
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
                                    />
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio color="primary" />}
                                        label="Yes"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                            </FormControl>
                            <br></br><br></br>
                            <Grid container spacing={24}>


<Grid item xs={4}>
    <FormLabel component="legend">Type of payment</FormLabel><br></br>
    <TextField
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
    />
</Grid>
<Grid item xs={4}>
    <FormLabel component="legend">Where will it come from?</FormLabel><br></br>
    <TextField
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
    />
</Grid>
<Grid item xs={4}>
    <FormLabel component="legend">Its value</FormLabel><br></br>
    <TextField
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
        variant="outlined"
        id="mui-theme-provider-outlined-input"
    />
</Grid>

</Grid><br></br>


                            <br></br>
                            <RaisedButton
                                label="Back"
                                primary={false}
                                style={styles.button}
                                onClick={this.back}
                            />
                            <RaisedButton
                                label="Continue"
                                primary={true}
                                style={styles.button}
                                onClick={this.continue}
                            /><br /><br />
                        </div>
                    </FormControl><br></br>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;