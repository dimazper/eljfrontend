import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import HeaderForm from './HeaderForm';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
// Import React Progress Bar
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


export class Confirm extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            clientNumber:'',
            title:'',
            firstName: '',
            lastName: '',
            nameOnBirthCert:'',
            firstNameNOTsame:'',
            lastNameNOTsame:'',
            knownByOtherName:'',
            nameOtherKnown:'',
            nameToCall:'',
            namePrefer:'',
            dob:'',
            gender:'',
            irdNumber:'',
            flatHouseNum:'',
            streetName:'',
            suburb:'',
            townCity:'',
            mailaddress:'',
            mailingAddr:'',
            homePhone:'',
            mobPhone:'',
            otherPhone:'',
            email:'',
            getEmails:'',
            ethnicGroup:'',
            ethnicity:'',
            usuallyNZ:'',
            residenceStatus:'',
            dateGranted:'',
            dateArrived:'',
            countryOfBirth:'',
            ccAssistanceReason:'',
            isWorking:'',
            workRelatedCourse:'',
            activities:'',
            medicalReason:'',
            employerName:'',
            employerAddr:'',
            employerPhone:'',
            employerFaxEmail:'',
            hoursPerWeek:'',
            hoursTravel:'',
            isWorkRelatedCourse:'',
            trainingOrgName:'',
            trainingOrgAddr:'',
            trainingOrgPhone:'',
            trainingOrgFaxEmail:'',
            nameOfCourse:'',
            isNZQA:'',
            courseStartDate:'',
            courseEndDate:'',
            courseHoursPerWeek:'',
            otherStudyHoursPerWeek:'',
            hoursTravelCCtoCourse:'',
            isArrangedActivities:'',
            activityType:'',
            hoursActivity:'',
            hoursTravelCCtoActivity:'',
            applyForMedicalReasons:'',
            medicalDurationExpected:'',
            hoursPerWeekNeedCC:'',
            incomeWagesSalary:'',
            incomePPL:'',
            terminationPay:'',
            redundancyPay:'',
            acc:'',
            incomeInsurance:'',
            incomeBusiness:'',
            incomeSelfEmpContract:'',
            incomeInterest:'',
            incomeDividends:'',
            incomeRental:'',
            incomeFlatmates:'',
            incomeChildSup:'',
            incomeOtherForChild:'',
            incomeMaintenance:'',
            incomeFormerPartner:'',
            incomeStudentAllowance:'',
            incomeOverseasPension:'',
            incomeSuper:'',
            incomeEstate:'',
            incomeTrusts:'',
            incomeOther:'',
            otherTypeOfPayment:'',
            jointPartnerWhere1:'',
            jointPartnerWith1:'',
            jointPartnerYou1:'',
            jointPartnerFreq1:'',
            jointPartnerWhere2:'',
            jointPartnerWith2:'',
            jointPartnerYou2:'',
            jointPartnerFreq2:'',
            jointPartnerWhere3:'',
            jointPartnerWith3:'',
            jointPartnerYou3:'',
            jointPartnerFreq3:'',
            jointPartnerWhere4:'',
            jointPartnerWith4:'',
            jointPartnerYou4:'',
            jointPartnerFreq4:'',
            jointPartnerWhere5:'',
            jointPartnerWith5:'',
            jointPartnerYou5:'',
            jointPartnerFreq5:'',
            other52weeksType1:'',
            other52weeksWhere1:'',
            other52weeksValue1:'',
            other52weeksType2:'',
            other52weeksWhere2:'',
            other52weeksValue2:'',
            other52weeksType3:'',
            other52weeksWhere3:'',
            other52weeksValue3:'',
            other52weeksType4:'',
            other52weeksWhere4:'',
            other52weeksValue4:'',
            other52weeksType5:'',
            other52weeksWhere5:'',
            other52weeksValue5:'',
            childFullName_1:'',
            childDOB_1:'',
            childRelationToYou_1:'',
            childFullName_2:'',
            childDOB_2:'',
            childRelationToYou_2:'',
            childReceive20Hrs:'',
            childFullName_3:'',
            childDOB_3:'',
            childRelationToYou_3:'',
            childFullName_4:'',
            childDOB_4:'',
            childRelationToYou_4:'',
            childFullName_5:'',
            childDOB_5:'',
            childRelationToYou_5:'',
            Child_ECE_ChildName_1:'',
            Child_ECE_Provider_1:'',
            Child_ECE_WeekTotal_1:'',
            Child_ECE_StartDate_1:'',
            Child_ECE_ChildName_2:'',
            Child_ECE_Provider_2:'',
            Child_ECE_WeekTotal_2:'',
            Child_ECE_StartDate_2:'',
            Child_ECE_ChildName_3:'',
            Child_ECE_Provider_3:'',
            Child_ECE_WeekTotal_3:'',
            Child_ECE_StartDate_3:'',
            Child_ECE_ChildName_4:'',
            Child_ECE_Provider_4:'',
            Child_ECE_WeekTotal_4:'',
            Child_ECE_StartDate_4:'',
            whichChildCCS_1:'',
            whichChildCCS_2:'',
            whichChildCCS_3:'',
            whichChildCCS_4:'',
            whichChildOSCAR_1:'',
            whichChildOSCAR_2:'',
            whichChildOSCAR_3:'',
            whichChildOSCAR_4:'',
            understandRelationship:'',
            hasPartner:'',
            partnerFullName:'',
            partnerDOB:'',
            relationshipStatus:'',
            childcareSubsidy:'',
            oscarSubsidy:'',
            paidParentalLeave:'',
            terminationPay:'',
            
        }
    }

    continue = e => {
        e.preventDefault();
        //Process Form//
        
        console.log("test")
        
        const axios = require('axios')
        var body = {
            clientNumber: this.props.values.clientNumber,
            title: this.props.values.title,
            firstName: this.props.values.firstName,
            lastName: this.props.values.lastName,
            nameOnBirthCert: this.props.values.nameOnBirthCert,
            firstNameNOTsame: this.props.values.firstNameNOTsame,
            lastNameNOTsame: this.props.values.lastNameNOTsame,
            knownByOtherName: this.props.values.knownByOtherName,
            nameOtherKnown: this.props.values.nameOtherKnown,
            nameToCall: this.props.values.nameToCall,
            namePrefer: this.props.values.namePrefer,
            dob: this.props.values.dob,
            gender: this.props.values.gender,
            irdNumber: this.props.values.irdNumber,
            flatHouseNum: this.props.values.flatHouseNum,
            streetName: this.props.values.streetName,
            suburb: this.props.values.suburb,
            townCity: this.props.values.townCity,
            mailaddress: this.props.values.mailaddress,
            mailingAddr: this.props.values.mailingAddr,
            homePhone: this.props.values.homePhone,
            mobPhone: this.props.values.mobPhone,
            otherPhone: this.props.values.otherPhone,
            email: this.props.values.email,
            getEmails: this.props.values.getEmails,
            ethnicGroup: this.props.values.ethnicGroup,
            ethnicity: this.props.values.ethnicity,
            usuallyNZ: this.props.values.usuallyNZ,
            residenceStatus: this.props.values.residenceStatus,
            dateGranted: this.props.values.dateGranted,
            dateArrived: this.props.values.dateArrived,
            countryOfBirth: this.props.values.countryOfBirth,
            ccAssistanceReason: this.props.values.ccAssistanceReason,
    isWorking: this.props.values.isWorking,
    workRelatedCourse: this.props.values.workRelatedCourse,
    activities: this.props.values.activities,
    medicalReason: this.props.values.medicalReason,
    employerName: this.props.values.employerName,
    employerAddr: this.props.values.employerAddr,
    employerPhone: this.props.values.employerPhone,
    employerFaxEmail: this.props.values.employerFaxEmail,
    hoursPerWeek: this.props.values.hoursPerWeek,
    hoursTravel: this.props.values.hoursTravel,
    isWorkRelatedCourse: this.props.values.isWorkRelatedCourse,
    trainingOrgName: this.props.values.trainingOrgName,
    trainingOrgAddr: this.props.values.trainingOrgAddr,
    trainingOrgPhone: this.props.values.trainingOrgPhone,
    trainingOrgFaxEmail: this.props.values.trainingOrgFaxEmail,
    employerFaxEmail: this.props.values.employerFaxEmail,
    nameOfCourse: this.props.values.nameOfCourse,
    isNZQA: this.props.values.isNZQA,
    courseStartDate: this.props.values.courseStartDate,
    courseEndDate: this.props.values.courseEndDate,
    courseHoursPerWeek: this.props.values.courseHoursPerWeek,
    otherStudyHoursPerWeek: this.props.values.otherStudyHoursPerWeek,
    hoursTravelCCtoCourse: this.props.values.hoursTravelCCtoCourse,
    isArrangedActivities: this.props.values.isArrangedActivities,
    activityType: this.props.values.activityType,
    hoursActivity: this.props.values.hoursActivity,
    hoursTravelCCtoActivity: this.props.values.hoursTravelCCtoActivity,
    applyForMedicalReasons: this.props.values.applyForMedicalReasons,
    medicalDurationExpected: this.props.values.medicalDurationExpected,
    hoursPerWeekNeedCC: this.props.values.hoursPerWeekNeedCC,
    incomeWagesSalary: this.props.values.incomeWagesSalary,
    incomePPL: this.props.values.incomePPL,
    terminationPay: this.props.values.terminationPay,
    redundancyPay: this.props.values.redundancyPay,
    acc: this.props.values.acc,
    incomeInsurance: this.props.values.incomeInsurance,
    incomeBusiness: this.props.values.incomeBusiness,
    incomeSelfEmpContract: this.props.values.incomeSelfEmpContract,
    incomeInterest: this.props.values.incomeInterest,
    incomeDividends: this.props.values.incomeDividends,
    incomeRental: this.props.values.incomeRental,
    incomeFlatmates: this.props.values.incomeFlatmates,
    incomeChildSup: this.props.values.incomeChildSup,
    incomeOtherForChild: this.props.values.incomeOtherForChild,
    incomeMaintenance: this.props.values.incomeMaintenance,
    incomeFormerPartner: this.props.values.incomeFormerPartner,
    incomeStudentAllowance: this.props.values.incomeStudentAllowance,
    incomeOverseasPension: this.props.values.incomeOverseasPension,
    incomeSuper: this.props.values.incomeSuper,
    incomeEstate: this.props.values.incomeEstate,
    incomeTrusts: this.props.values.incomeTrusts,
    incomeOther: this.props.values.incomeOther,
    otherTypeOfPayment: this.props.values.otherTypeOfPayment,
    jointPartnerWhere1: this.props.values.jointPartnerWhere1,
    jointPartnerWith1: this.props.values.jointPartnerWith1,
    jointPartnerYou1: this.props.values.jointPartnerYou1,
    jointPartnerFreq1: this.props.values.jointPartnerFreq1,
    jointPartnerWhere2: this.props.values.jointPartnerWhere2,
    jointPartnerWith2: this.props.values.jointPartnerWith2,
    jointPartnerYou2: this.props.values.jointPartnerYou2,
    jointPartnerFreq2 : this.props.values.jointPartnerFreq2,
    jointPartnerWhere3 : this.props.values.jointPartnerWhere3,
    jointPartnerWith3 : this.props.values.jointPartnerWith3,
    jointPartnerYou3 : this.props.values.jointPartnerYou3,
    jointPartnerFreq3 : this.props.values.jointPartnerFreq3,
    jointPartnerWhere4 : this.props.values.jointPartnerWhere4,
    jointPartnerWith4 : this.props.values.jointPartnerWith4,
    jointPartnerYou4 : this.props.values.jointPartnerYou4,
    jointPartnerFreq4 : this.props.values.jointPartnerFreq4,
    jointPartnerWhere5 : this.props.values.jointPartnerWhere5,
    jointPartnerWith5 : this.props.values.jointPartnerWith5,
    jointPartnerYou5 : this.props.values.jointPartnerYou5,
    jointPartnerFreq5 : this.props.values.jointPartnerFreq5,
    other52weeksType1 : this.props.values.other52weeksType1,
    other52weeksWhere1 : this.props.values.other52weeksWhere1,
    other52weeksValue1 : this.props.values.other52weeksValue1,
    other52weeksType2 : this.props.values.other52weeksType2,
    other52weeksWhere2 : this.props.values.other52weeksWhere2,
    other52weeksValue2 : this.props.values.other52weeksValue2,
    other52weeksType3 : this.props.values.other52weeksType3,
    other52weeksWhere3 : this.props.values.other52weeksWhere3,
    other52weeksValue3 : this.props.values.other52weeksValue3,
    other52weeksType4 : this.props.values.other52weeksType4,
    other52weeksWhere4 : this.props.values.other52weeksWhere4,
    other52weeksValue4 : this.props.values.other52weeksValue4,
    other52weeksType5 : this.props.values.other52weeksType5,
    other52weeksWhere5 : this.props.values.other52weeksWhere5,
    other52weeksValue5 : this.props.values.other52weeksValue5,
    childFullName_1: this.props.values.childFullName_1,
    childDOB_1: this.props.values.childDOB_1,
    childRelationToYou_1: this.props.values.childRelationToYou_1,
    childFullName_2: this.props.values.childFullName_2,
    childDOB_2: this.props.values.childDOB_2,
    childRelationToYou_2: this.props.values.childRelationToYou_2,
    childReceive20Hrs: this.props.values.childReceive20Hrs,
    childFullName_3: this.props.values.childFullName_3,
    childDOB_3: this.props.values.childDOB_3,
    childRelationToYou_3: this.props.values.childRelationToYou_3,
    childFullName_4: this.props.values.childFullName_4,
    childDOB_4: this.props.values.childDOB_4,
    childRelationToYou_4: this.props.values.childRelationToYou_4,
    childFullName_5: this.props.values.childFullName_5,
    childDOB_5: this.props.values.childDOB_5,
    childRelationToYou_5: this.props.values.childRelationToYou_5,
    Child_ECE_ChildName_1: this.props.values.Child_ECE_ChildName_1,
    Child_ECE_Provider_1: this.props.values.Child_ECE_Provider_1,
    Child_ECE_WeekTotal_1: this.props.values.Child_ECE_WeekTotal_1,
    Child_ECE_StartDate_1: this.props.values.Child_ECE_StartDate_1,
    Child_ECE_ChildName_2: this.props.values.Child_ECE_ChildName_2,
    Child_ECE_Provider_2: this.props.values.Child_ECE_Provider_2,
    Child_ECE_WeekTotal_2: this.props.values.Child_ECE_WeekTotal_2,
    Child_ECE_StartDate_2: this.props.values.Child_ECE_StartDate_2,
    Child_ECE_ChildName_3: this.props.values.Child_ECE_ChildName_3,
    Child_ECE_Provider_3: this.props.values.Child_ECE_Provider_3,
    Child_ECE_WeekTotal_3: this.props.values.Child_ECE_WeekTotal_3,
    Child_ECE_StartDate_3: this.props.values.Child_ECE_StartDate_3,
    Child_ECE_ChildName_4: this.props.values.Child_ECE_ChildName_4,
    Child_ECE_Provider_4: this.props.values.Child_ECE_Provider_4,
    Child_ECE_WeekTotal_4: this.props.values.Child_ECE_WeekTotal_4,
    Child_ECE_StartDate_4: this.props.values.Child_ECE_StartDate_4,
    whichChildCCS_1: this.props.values.whichChildCCS_1,
    whichChildCCS_2: this.props.values.whichChildCCS_2,
    whichChildCCS_3: this.props.values.whichChildCCS_3,
    whichChildCCS_4: this.props.values.whichChildCCS_4,
    whichChildOSCAR_1: this.props.values.whichChildOSCAR_1,
    whichChildOSCAR_2: this.props.values.whichChildOSCAR_2,
    whichChildOSCAR_3: this.props.values.whichChildOSCAR_3,
    whichChildOSCAR_4: this.props.values.whichChildOSCAR_4,
    childcareSubsidy: this.props.values.childcareSubsidy,
    oscarSubsidy: this.props.values.oscarSubsidy,
    paidParentalLeave: this.props.values.paidParentalLeave,
    terminationPay: this.props.values.terminationPay,
            

        }
        axios({
            method: 'post',
            url: 'http://34.230.74.44:8000/ccs/',
            headers: {'authorization': 'Token 5f1c57dbbe2dbaabe6f8ada1c7f3c0e6dd2e2a35'},
            data: body
        })
          .then(function (response) {
            console.log(response);
          })


        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 
    
    editSection1 = e => {
        e.preventDefault();
        this.props.editStepSection1();
    }; 

    editSection2 = e => {
        e.preventDefault();
        this.props.editStepSection2();
    }; 


    editSection3 = e => {
        e.preventDefault();
        this.props.editStepSection3();
    }; 
    

    editSection4 = e => {
        e.preventDefault();
        this.props.editStepSection4();
    }; 
    
    
    
    render() { 
        const { values: {clientNumber, title, firstName, lastName, nameOnBirthCert, 
            firstNameNOTsame, lastNameNOTsame, knownByOtherName, nameOtherKnown, nameToCall, namePrefer, 
            dob, gender, irdNumber, flatHouseNum, streetName, suburb, townCity, mailaddress, mailingAddr,
            homePhone, mobPhone, otherPhone, email, getEmails, ethnicGroup, ethnicity, usuallyNZ, residenceStatus, dateGranted, 
            dateArrived, countryOfBirth, ccAssistanceReason,
            isWorking,
            workRelatedCourse,
            activities,
            medicalReason,
            employerName,
            employerAddr,
            employerPhone,
            employerFaxEmail,
            hoursPerWeek,
            hoursTravel,
            isWorkRelatedCourse,
            trainingOrgName,
            trainingOrgAddr,
            trainingOrgPhone,
            trainingOrgFaxEmail,
            nameOfCourse,
            isNZQA,
            courseStartDate,
            courseEndDate,
            courseHoursPerWeek,
            otherStudyHoursPerWeek,
            hoursTravelCCtoCourse,
            isArrangedActivities,
            activityType,
            hoursActivity,
            hoursTravelCCtoActivity,
            applyForMedicalReasons,
            medicalDurationExpected,
            hoursPerWeekNeedCC,
            incomeWagesSalary,
            incomePPL,
            terminationPay,
            redundancyPay,
            acc,
            incomeInsurance,
            incomeBusiness,
            incomeSelfEmpContract,
            incomeInterest,
            incomeDividends,
            incomeRental,
            incomeFlatmates,
            incomeChildSup,
            incomeOtherForChild,
            incomeMaintenance,
            incomeFormerPartner,
            incomeStudentAllowance,
            incomeOverseasPension,
            incomeSuper,
            incomeEstate,
            incomeTrusts,
            incomeOther,
            otherTypeOfPayment,
            jointPartnerWhere1,
            jointPartnerWith1,
            jointPartnerYou1,
            jointPartnerFreq1,
            jointPartnerWhere2,
            jointPartnerWith2,
            jointPartnerYou2,
            jointPartnerFreq2 ,
            jointPartnerWhere3 ,
            jointPartnerWith3 ,
            jointPartnerYou3 ,
            jointPartnerFreq3 ,
            jointPartnerWhere4 ,
            jointPartnerWith4 ,
            jointPartnerYou4 ,
            jointPartnerFreq4 ,
            jointPartnerWhere5 ,
            jointPartnerWith5 ,
            jointPartnerYou5 ,
            jointPartnerFreq5 ,
            other52weeksType1 ,
            other52weeksWhere1 ,
            other52weeksValue1 ,
            other52weeksType2 ,
            other52weeksWhere2 ,
            other52weeksValue2 ,
            other52weeksType3 ,
            other52weeksWhere3 ,
            other52weeksValue3 ,
            other52weeksType4 ,
            other52weeksWhere4 ,
            other52weeksValue4 ,
            other52weeksType5 ,
            other52weeksWhere5 ,
            other52weeksValue5 ,
            childFullName_1,
            childDOB_1,
            childRelationToYou_1,
            childFullName_2,
            childDOB_2,
            childRelationToYou_2,
            childReceive20Hrs,
            childFullName_3,
            childDOB_3,
            childRelationToYou_3,
            childFullName_4,
            childDOB_4,
            childRelationToYou_4,
            childFullName_5,
            childDOB_5,
            childRelationToYou_5,
            Child_ECE_ChildName_1,
            Child_ECE_Provider_1,
            Child_ECE_WeekTotal_1,
            Child_ECE_StartDate_1,
            Child_ECE_ChildName_2,
            Child_ECE_Provider_2,
            Child_ECE_WeekTotal_2,
            Child_ECE_StartDate_2,
            Child_ECE_ChildName_3,
            Child_ECE_Provider_3,
            Child_ECE_WeekTotal_3,
            Child_ECE_StartDate_3,
            Child_ECE_ChildName_4,
            Child_ECE_Provider_4,
            Child_ECE_WeekTotal_4,
            Child_ECE_StartDate_4,
            whichChildCCS_1,
            whichChildCCS_2,
            whichChildCCS_3,
            whichChildCCS_4,
            whichChildOSCAR_1,
            whichChildOSCAR_2,
            whichChildOSCAR_3,
            whichChildOSCAR_4,
            understandRelationship,
            hasPartner,
            partnerFullName,
            partnerDOB,
            relationshipStatus,
            childcareSubsidy,
            oscarSubsidy,
            paidParentalLeave,
             
         } } = this.props;
        const { classes } = this.props;

        return (  
            <MuiThemeProvider>
                <HeaderForm/>
                <React.Fragment>
                    {/* <AppBar title="Confirm User Data" /> */}
                    
                    <List> 
                    <div class="cardReview">
                    <h1>Review</h1>
                    {/* <h2>Review</h2> */}
                    <h2 class="confirm">Personal Details</h2>
                    <ListItem
                        primaryText="Client Number"
                        secondaryText={ clientNumber }
                        />
                    <ListItem
                        primaryText="Title"
                        secondaryText={ title }
                        />
                        <ListItem
                        primaryText="First Name"
                        secondaryText={ firstName }
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText={ lastName }
                        />
                        <ListItem
                        primaryText="Name on birth certificate the same as above"
                        secondaryText={ nameOnBirthCert }
                        />
                        
                        <ListItem
                        primaryText="First name (not same as birth certificate)"
                        secondaryText={ firstNameNOTsame }
                        />
                         <ListItem
                        primaryText="Last name (not same as birth certificate)"
                        secondaryText={ lastNameNOTsame }
                        />
                        <ListItem
                        primaryText="Have you ever been known by any other name?"
                        secondaryText={ knownByOtherName }
                        />
                         <ListItem
                        primaryText="Other name(s) known by"
                        secondaryText={ nameOtherKnown }
                        />
                        <ListItem
                        primaryText="What name would you like us to call you?"
                        secondaryText={ nameToCall }
                        />
                         <ListItem
                        primaryText="Preferred name"
                        secondaryText={ namePrefer }
                        />
                        <ListItem
                        primaryText="Date of birth"
                        secondaryText={ dob }
                        />
                        <ListItem
                        primaryText="Gender"
                        secondaryText={ gender }
                        />
                        <ListItem
                        primaryText="Inland Revenue tax number"
                        secondaryText={ irdNumber }
                        />
                        <ListItem
                        primaryText="Flat/ House Number"
                        secondaryText={ flatHouseNum }
                        />
                        <ListItem
                        primaryText="Street Name"
                        secondaryText={ streetName }
                        />
                        <ListItem
                        primaryText="Suburb"
                        secondaryText={ suburb }
                        />
                        <ListItem
                        primaryText="Town/City"
                        secondaryText={ townCity }
                        />
                        <ListItem
                        primaryText="Is your mailing address different from where you live?"
                        secondaryText={ mailaddress }
                        />
                        <ListItem
                        primaryText="Mailing address (if different from where you live)"
                        secondaryText={ mailingAddr }
                        />
                        <ListItem
                        primaryText="Home phone"
                        secondaryText={ homePhone }
                        />
                        <ListItem
                        primaryText="Mobile phone"
                        secondaryText={ mobPhone }
                        />
                        <ListItem
                        primaryText="Other phone"
                        secondaryText={ otherPhone }
                        />
                        <ListItem
                        primaryText="Do you agree to get emails from us?"
                        secondaryText={ email }
                        />
                        <ListItem
                        primaryText="Email address"
                        secondaryText={ getEmails }
                        />
                        <ListItem
                        primaryText="the group(s) you most identify with"
                        secondaryText={ ethnicGroup }
                        />
                        <ListItem
                        primaryText="the group(s) you most identify with (if you opt for other)"
                        secondaryText={ ethnicity }
                        />
                        <ListItem
                        primaryText="Do you usually live in New Zealand?"
                        secondaryText={ usuallyNZ }
                        />
                        <ListItem
                        primaryText="Residence status"
                        secondaryText={ residenceStatus }
                        />
                        <ListItem
                        primaryText="Date granted"
                        secondaryText={ dateGranted }
                        />
                        <ListItem
                        primaryText="What is your residence status (if you opt for other)?"
                        secondaryText={ residenceStatus }
                        />
                        <ListItem
                        primaryText="The date you arrived in New Zealand"
                        secondaryText={ dateArrived }
                        />
                        <ListItem
                        primaryText="Country of birth"
                        secondaryText={ countryOfBirth }
                        /> 
                        <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                        className={classes.margin}
                        onClick={this.editSection1} style={styles.button}
                        >
                        Edit
                        </Fab>
                        </div>
                        
                        </List>

                        
                        <List>
                        <div class="cardReview"> 
                        <h2 class="confirm">Work, education and activities</h2>       
                        <ListItem
                        primaryText="Tell us the reason you or your partner (if you have one) are applying for childcare assistance. Tick all that apply"
                        secondaryText={ ccAssistanceReason }
                        /> 
                        <ListItem
                        primaryText="Are you working?"
                        secondaryText={ isWorking }
                        /> 
                        <ListItem
                        primaryText="Are you on a work-related course or studying?"
                        secondaryText={ workRelatedCourse }
                        />   
                        <ListItem
                        primaryText="Are you doing activities arranged for you by Work and Income?"
                        secondaryText={ activities }
                        /> 
                        <ListItem
                        primaryText="Are you applying for childcare assistance because of medical reasons?"
                        secondaryText={ medicalReason }
                        />
                        <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                        className={classes.margin}
                        onClick={this.editSection2} style={styles.button}
                        >
                        Edit
                        </Fab>
                        </div>
                        </List>
                        

                        
                        <List>
                        <div class="cardReview">
                        <h2 class="confirm">Income and assets</h2> 
                        <ListItem
                        primaryText="Wages or salary"
                        secondaryText={ incomeWagesSalary }
                        />
                        <ListItem
                        primaryText="Its value"
                        secondaryText={ jointPartnerYou1 }
                        />
                        <ListItem
                        primaryText="How often do you expect the payment?"
                        secondaryText={ jointPartnerFreq1 }
                        />  
                        <ListItem
                        primaryText="Paid parental leave"
                        secondaryText={ paidParentalLeave }
                        />  
                        <ListItem
                        primaryText="Termination pay"
                        secondaryText={ terminationPay }
                        /> 
                        <ListItem
                        primaryText="Redundancy pay"
                        secondaryText={ redundancyPay }
                        /> 
                        <ListItem
                        primaryText="Accident compensation (eg ACC)"
                        secondaryText={ acc }
                        />  
                        <ListItem
                        primaryText="Income insurance (replacement protection)"
                        secondaryText={ incomeInsurance }
                        /> 
                        <ListItem
                        primaryText="Its value"
                        secondaryText={ jointPartnerWith2 }
                        />  
                        <ListItem
                        primaryText="How often do you expect the payment?"
                        secondaryText={ jointPartnerFreq2 }
                        /> 
                        <ListItem
                        primaryText="Farm or business income"
                        secondaryText={ incomeBusiness }
                        />  
                        <ListItem
                        primaryText="Payments from self employment or contract work"
                        secondaryText={ incomeSelfEmpContract }
                        /> 
                        <ListItem
                        primaryText="Interest from savings, investments or bonds"
                        secondaryText={ incomeInterest }
                        /> 
                        <ListItem
                        primaryText="Dividends from shares, unit trusts, or managed funds"
                        secondaryText={ incomeDividends }
                        />   
                        <ListItem
                        primaryText="Income from rents"
                        secondaryText={ incomeRental }
                        />  
                        <ListItem
                        primaryText="Payments from boarders or flatmates"
                        secondaryText={ incomeFlatmates }
                        />  
                        <ListItem
                        primaryText="Child support payments"
                        secondaryText={ incomeChildSup }
                        />  
                        <ListItem
                        primaryText="Other income for a child"
                        secondaryText={ incomeOtherForChild }
                        />  
                        <ListItem
                        primaryText="Maintenance payments"
                        secondaryText={ incomeMaintenance }
                        /> 
                        <ListItem
                        primaryText="Payments from a former partner"
                        secondaryText={ incomeFormerPartner }
                        />  
                         <ListItem
                        primaryText="Student Allowance, scholarship, or Student Loan living cost payments"
                        secondaryText={ incomeStudentAllowance }
                        />
                        <ListItem
                        primaryText="Overseas pension, benefit or allowance payments"
                        secondaryText={ incomeOverseasPension }
                        />
                        <ListItem
                        primaryText="Other superannuation or retirement scheme income (government or private)"
                        secondaryText={ incomeSuper }
                        />  
                        <ListItem
                        primaryText="Income from an estate, if you've inherited money"
                        secondaryText={ incomeEstate }
                        />  
                        <ListItem
                        primaryText="Income from trusts"
                        secondaryText={ incomeTrusts }
                        />  
                        <ListItem
                        primaryText="Other"
                        secondaryText={ incomeOther }
                        /> 
                        <ListItem
                        primaryText="Will you get other types of payment apart from money in the next 52 weeks?"
                        secondaryText={ otherTypeOfPayment }
                        />
                        <ListItem
                        primaryText="Type of payment"
                        secondaryText={ other52weeksType1 }
                        /> 
                        <ListItem
                        primaryText="Where will it come from?"
                        secondaryText={ other52weeksWhere1 }
                        />  
                        <ListItem
                        primaryText="Its value"
                        secondaryText={ other52weeksValue1 }
                        />
                        <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                        className={classes.margin}
                        onClick={this.editSection3} style={styles.button}
                        >
                        Edit
                        </Fab>
                        </div> 
                        </List>
                         

                        
                        <List>  
                        <div class="cardReview"> 
                        <h2 class="confirm">Dependent Children</h2>                     
                        <ListItem
                        primaryText="Child 1's full name"
                        secondaryText={ childFullName_1 }
                        /> 
                        <ListItem
                        primaryText="Date of birth"
                        secondaryText={ childDOB_1 }
                        />
                        <ListItem
                        primaryText="Relationship to you"
                        secondaryText={ childRelationToYou_1 }
                        /> 
                        <ListItem
                        primaryText="Child 2's full name"
                        secondaryText={ childFullName_2 }
                        />  
                        <ListItem
                        primaryText="Date of birth"
                        secondaryText={ childDOB_2 }
                        /> 
                        <ListItem
                        primaryText="Relationship to you"
                        secondaryText={ childRelationToYou_2 }
                        /> 
                        <ListItem
                        primaryText="children receive 20 hours ECE from any childcare service?"
                        secondaryText={ childReceive20Hrs }
                        />
                        <ListItem
                        primaryText="Child 1's name (receives 20 hours ECE)"
                        secondaryText={ Child_ECE_ChildName_1 }
                        /> 
                        <ListItem
                        primaryText="Which childcare service/s does the child get 20 Hours ECE from?"
                        secondaryText={ Child_ECE_Provider_1 }
                        /> 
                        <ListItem
                        primaryText="How many hours are received per week in total?"
                        secondaryText={ Child_ECE_WeekTotal_1 }
                        /> 
                        <ListItem
                        primaryText="What date did the 20 Hours ECE start?"
                        secondaryText={ Child_ECE_StartDate_1 }
                        />  
                        <ListItem
                        primaryText="Child 2's name (receives 20 hours ECE)"
                        secondaryText={ Child_ECE_ChildName_2 }
                        /> 
                        <ListItem
                        primaryText="Which childcare service/s does the child get 20 Hours ECE from?"
                        secondaryText={ Child_ECE_Provider_2 }
                        /> 
                        <ListItem
                        primaryText="How many hours are received per week in total?"
                        secondaryText={ Child_ECE_WeekTotal_2 }
                        /> 
                        <ListItem
                        primaryText="What date did the 20 Hours ECE start?"
                        secondaryText={ Child_ECE_StartDate_2 }
                        />
                        <ListItem
                        primaryText="Which children do you wish to get Childcare Subsidy for?"
                        secondaryText={ childcareSubsidy }
                        /> 
                        <ListItem
                        primaryText="Child 1's Name (Childcare Subsidy)"
                        secondaryText={ whichChildCCS_1 }
                        />   
                        <ListItem
                        primaryText="Child 2's Name (Childcare Subsidy)"
                        secondaryText={ whichChildCCS_2 }
                        /> 
                        <ListItem
                        primaryText="Which children do you wish to get OSCAR Subsidy for?"
                        secondaryText={ oscarSubsidy }
                        /> 
                        <ListItem
                        primaryText="Child 1's name (Oscar Subsidy)"
                        secondaryText={ whichChildOSCAR_1 }
                        /> 
                        <ListItem
                        primaryText="Child 2's name (Oscar Subsidy)"
                        secondaryText={ whichChildOSCAR_2 }
                        /> 
                        <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                        className={classes.margin}
                        onClick={this.editSection4} style={styles.button}
                        >
                        Edit
                        </Fab>
                         </div> 
                        </List>
                                                                                                                                                                      
                    
                    <br/>

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
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.continue} style={styles.button}
        >
          Submit
        </Fab>
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
                       label="Confirm & Continue" 
                    //    primary={true}
                       backgroundColor= '#1cbaa1'
                       style={styles.button}
                       onClick={this.continue}
                    /> */}
                    
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

Confirm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Confirm);