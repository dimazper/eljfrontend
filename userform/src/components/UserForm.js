import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormIncomeDetails from './FormIncomeDetails';

import Confirm from './Confirm';
import Success from './Success';
import FormDependentChildren from './FormDependentChildren';
import Confirmation from './Confirmation';
import FormPartnerDetails from './FormPartnerDetails';
import FormChecklist from './FormChecklist';




export class  UserForm extends Component {
    state = { 
        step: 1,
        clientNumber:'',
        title:'',
        firstName:'',
        lastName:'',
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
        mailaddress:'No',
        mailingAddr:'',
        homePhone:'',
        mobPhone:'',
        otherPhone:'',
        email:'No',
        getEmails:'',
        ethnicGroup:'',
        ethnicity:'',
        usuallyNZ:'',
        residenceStatus:'',
        dateGranted:'',
        dateArrived:'',
        countryOfBirth:'',
        ccAssistanceReason:'',
        isWorking:'No',
        workRelatedCourse:'No',
        activities:'No',
        medicalReason:'No',
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
        incomeWagesSalary:'No',
        incomePPL:'No',
        terminationPay:'No',
        redundancyPay:'No',
        acc:'No',
        incomeInsurance:'No',
        incomeBusiness:'No',
        incomeSelfEmpContract:'No',
        incomeInterest:'No',
        incomeDividends:'No',
        incomeRental:'No',
        incomeFlatmates:'No',
        incomeChildSup:'No',
        incomeOtherForChild:'No',
        incomeMaintenance:'No',
        incomeFormerPartner:'No',
        incomeStudentAllowance:'No',
        incomeOverseasPension:'No',
        incomeSuper:'No',
        incomeEstate:'No',
        incomeTrusts:'No',
        incomeOther:'No',
        otherTypeOfPayment:'',
        jointPartnerWhere1:'',
        jointPartnerWith1:'',
        jointPartnerYou1:'',
        jointPartnerFreq1:'',
        jointPartnerWhere2:'',
        jointPartnerWith2:'',
        jointPartnerYou2:'',
        jointPartnerFreq2 :'',
        jointPartnerWhere3 :'',
        jointPartnerWith3 :'',
        jointPartnerYou3 :'',
        jointPartnerFreq3 :'',
        jointPartnerWhere4 :'',
        jointPartnerWith4 :'',
        jointPartnerYou4 :'',
        jointPartnerFreq4 :'',
        jointPartnerWhere5 :'',
        jointPartnerWith5 :'',
        jointPartnerYou5 :'',
        jointPartnerFreq5 :'',
        other52weeksType1 :'',
        other52weeksWhere1 :'',
        other52weeksValue1 :'',
        other52weeksType2 :'',
        other52weeksWhere2 :'',
        other52weeksValue2 :'',
        other52weeksType3 :'',
        other52weeksWhere3 :'',
        other52weeksValue3 :'',
        other52weeksType4 :'',
        other52weeksWhere4 :'',
        other52weeksValue4 :'',
        other52weeksType5 :'',
        other52weeksWhere5 :'',
        other52weeksValue5 :'',
        childFullName_1:'',
        childDOB_1:'',
        childRelationToYou_1:'',
        childFullName_2:'',
        childDOB_2: '',
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
        understandRelationship:'Yes',
        hasPartner:'No',
        partnerFullName:'',
        partnerDOB:'',
        relationshipStatus:'No',
        p_clientNumber:'',
        p_title:'',
        p_firstName:'',
        p_lastName:'',
        p_firstNameNOTsame:'',
        p_lastNameNOTsame:'',
        p_nameOtherKnown:'',
        p_namePrefer:'',
        p_dob:'',
        p_gender:'',
        p_irdNumber:'',
        p_flatHouseNum:'',
        p_streetName:'',
        p_suburb:'',
        p_townCity:'',
        p_mailingAddr:'',
        p_homePhone:'',
        p_mobPhone:'',
        p_otherPhone:'',
        p_getEmails:'',
        p_ethnicity:'',
        p_usuallyNZ:'',
        p_residenceStatus:'',
        p_dateGranted:'',
        p_dateArrived:'',
        p_countryOfBirth:'',
        p_ccAssistanceReason:'',
        p_isWorking:'',
        p_employerName:'',
        p_employerAddr:'',
        p_employerPhone:'',
        p_employerFaxEmail:'',
        p_hoursPerWeek:'',
        p_hoursTravel:'',
        p_isWorkRelatedCourse:'',
        p_trainingOrgName:'',
        p_trainingOrgAddr:'',
        p_trainingOrgPhone:'',
        p_trainingOrgFaxEmail:'',
        p_nameOfCourse:'',
        p_isNZQA:'',
        p_courseStartDate:'',
        p_courseEndDate:'',
        p_courseHoursPerWeek:'',
        p_otherStudyHoursPerWeek:'',
        p_hoursTravelCCtoCourse:'',
        p_isArrangedActivities:'',
        p_activityType:'',
        p_hoursActivity:'',
        p_hoursTravelCCtoActivity:'',
        p_applyForMedicalReasons:'',
        p_medicalDurationExpected:'',
        p_hoursPerWeekNeedCC:'',
        p_incomeWagesSalary:'',
        p_incomePPL:'',
        p_terminationPay:'',
        p_redundancyPay:'',
        p_acc:'',
        p_incomeInsurance:'',
        p_incomeBusiness:'',
        p_incomeSelfEmpContract:'',
        p_incomeInterest:'',
        p_incomeDividends:'',
        p_incomeRental:'',
        p_incomeFlatmates:'',
        p_incomeChildSup:'',
        p_incomeOtherForChild:'',
        p_incomeMaintenance:'',
        p_incomeFormerPartner:'',
        p_incomeStudentAllowance:'',
        p_incomeOverseasPension:'',
        p_incomeSuper:'',
        p_incomeEstate:'',
        p_incomeTrusts:'',
        p_incomeOther:'',
        p_jointPartnerWhere1 :'',
        p_jointPartnerWith1 :'',
        p_jointPartnerYou1 :'',
        p_jointPartnerFreq1 :'',
        p_jointPartnerWhere2 :'',
        p_jointPartnerWith2 :'',
        p_jointPartnerYou2 :'',
        p_jointPartnerFreq2 :'',
        p_jointPartnerWhere3 :'',
        p_jointPartnerWith3 :'',
        p_jointPartnerYou3 :'',
        p_jointPartnerFreq3 :'',
        p_jointPartnerWhere4 :'',
        p_jointPartnerWith4 :'',
        p_jointPartnerYou4 :'',
        p_jointPartnerFreq4 :'',
        p_jointPartnerWhere5 :'',
        p_jointPartnerWith5 :'',
        p_jointPartnerYou5 :'',
        p_jointPartnerFreq5 :'',
        p_other52weeksType1 :'',
        p_other52weeksWhere1 :'',
        p_other52weeksValue1 :'',
        p_other52weeksType2 :'',
        p_other52weeksWhere2 :'',
        p_other52weeksValue2 :'',
        p_other52weeksType3 :'',
        p_other52weeksWhere3 :'',
        p_other52weeksValue3 :'',
        p_other52weeksType4 :'',
        p_other52weeksWhere4 :'',
        p_other52weeksValue4 :'',
        p_other52weeksType5 :'',
        p_other52weeksWhere5 :'',
        p_other52weeksValue5 :'',
        childcareSubsidy :'',
        oscarSubsidy:'',
        paidParentalLeave:'No',
        Child_ece_Id_1: '',
        Child_ece_CCS_OSCAR_1:'',
        Child_ece_Org_Name_1:'',
        Child_ece_Email_1:'',
        Child_ece_Telephone_1:'',
        Child_ece_Mobile_1:'',
        Child_ece_Twenty_Hrs_1:'',
        Child_ece_HoldingAbsenceFee_1:'',
        Child_ece_hrs_care_1:'',
        Child_ece_hourly_fee_1:'',
        Child_ece_total_weekly_fee_1:'',
        Child_ece_Id_2:'',
        Child_ece_CCS_OSCAR_2:'',
        Child_ece_Org_Name_2:'',
        Child_ece_Email_2:'',
        Child_ece_Telephone_2:'',
        Child_ece_Mobile_2:'',
        Child_ece_Twenty_Hrs_2:'',
        Child_ece_HoldingAbsenceFee_2:'',
        Child_ece_hrs_care_2:'',
        Child_ece_hourly_fee_2:'',
        Child_ece_total_weekly_fee_2:'',
     }
    //  getSchools = () => {
    //      return [
    //         { Child_ece_Id_1: 55509, Child_ece_CCS_OSCAR_1: 234576548,
    //         Child_ece_Org_Name_1:'Best Start', Child_ece_Email_1:'kelly.abraham@best-start.org', Child_ece_Telephone_1: '068710841', Child_ece_Mobile_1: '068565798', 
    //         Child_ece_Twenty_Hrs_1:'Yes', Child_ece_HoldingAbsenceFee_1:'No'
    //         },
    //         { Child_ece_Id_1: 25384, Child_ece_CCS_OSCAR_1: 123654378,
    //         Child_ece_Org_Name_1:'Lollipops', Child_ece_Email_1:'michelle.cribb@eeg.co.nz', Child_ece_Telephone_1: '093651640', Child_ece_Mobile_1:'093778700', 
    //         Child_ece_Twenty_Hrs_1:'Yes', Child_ece_HoldingAbsenceFee_1:'No'
    //         },          
    //       ];
    //  }
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

    editStepSection1 = () => {
        const { step } = this.state;
        this.setState({
            step: step -5
        });
    }
    editStepSection2 = () => {
        const { step } = this.state;
        this.setState({
            step: step -4
        });
    }
    editStepSection3 = () => {
        const { step } = this.state;
        this.setState({
            step: step -3
        });
    }
    editStepSection4 = () => {
        const { step } = this.state;
        this.setState({
            step: step -2
        });
    }

    // Hande fields change
    handleChange = input => e => {
        console.log(e.target.value);
        console.log(input);
        this.setState({[input]: e.target.value});

        //test code
        if(input === 'Child_ece_Org_Name_1')
        {
            this.setState({Child_ece_Id_1: 55509, Child_ece_CCS_OSCAR_1: 234576548, Child_ece_Email_1:'kelly.abraham@best-start.org', 
                    Child_ece_Telephone_1: '068710841', 
                    Child_ece_Mobile_1: '068565798',
                    Child_ece_Twenty_Hrs_1:'Yes',
                    Child_ece_HoldingAbsenceFee_1:'No'
                    });
        }
        // if(input === 'Child_ece_Org_Name_1')
        // {
        //     let schools = getSchools();
        //     for(let i in schools)
        //     {
        //         if (schools[i] === e.target.value)
        //         {
        //             this.setState({Child_ece_Email_1:'kelly.abraham@best-start.org', 
        //             Child_ece_Telephone_1: '068710841', 
        //             Child_ece_Mobile_1: '068565798'});
        //         }
        //     }
        // }
    }

    render() {
        const { step } = this.state;
          
        const { 
            clientNumber,
            title,
            firstName,
            lastName,
            nameOnBirthCert,
            firstNameNOTsame,
            lastNameNOTsame,
            knownByOtherName,
            nameOtherKnown,
            nameToCall,
            namePrefer,
            dob,
            gender,
            irdNumber,
            flatHouseNum,
            streetName,
            suburb,
            townCity,
            mailaddress,
            mailingAddr,
            homePhone,
            mobPhone,
            otherPhone,
            email,
            getEmails,
            ethnicGroup,
            ethnicity,
            usuallyNZ,
            residenceStatus,
            dateGranted,
            dateArrived,
            countryOfBirth,
            ccAssistanceReason,
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
            p_clientNumber,
            p_title,
            p_firstName,
            p_lastName,
            p_firstNameNOTsame,
            p_lastNameNOTsame,
            p_nameOtherKnown,
            p_namePrefer,
            p_dob,
            p_gender,
            p_irdNumber,
            p_flatHouseNum,
            p_streetName,
            p_suburb,
            p_townCity,
            p_mailingAddr,
            p_homePhone,
            p_mobPhone,
            p_otherPhone,
            p_getEmails,
            p_ethnicity,
            p_usuallyNZ,
            p_residenceStatus,
            p_dateGranted,
            p_dateArrived,
            p_countryOfBirth,
            p_ccAssistanceReason,
            p_isWorking,
            p_employerName,
            p_employerAddr,
            p_employerPhone,
            p_employerFaxEmail,
            p_hoursPerWeek,
            p_hoursTravel,
            p_isWorkRelatedCourse,
            p_trainingOrgName,
            p_trainingOrgAddr,
            p_trainingOrgPhone,
            p_trainingOrgFaxEmail,
            p_nameOfCourse,
            p_isNZQA,
            p_courseStartDate,
            p_courseEndDate,
            p_courseHoursPerWeek,
            p_otherStudyHoursPerWeek,
            p_hoursTravelCCtoCourse,
            p_isArrangedActivities,
            p_activityType,
            p_hoursActivity,
            p_hoursTravelCCtoActivity,
            p_applyForMedicalReasons,
            p_medicalDurationExpected,
            p_hoursPerWeekNeedCC,
            p_incomeWagesSalary,
            p_incomePPL,
            p_terminationPay,
            p_redundancyPay,
            p_acc,
            p_incomeInsurance,
            p_incomeBusiness,
            p_incomeSelfEmpContract,
            p_incomeInterest,
            p_incomeDividends,
            p_incomeRental,
            p_incomeFlatmates,
            p_incomeChildSup,
            p_incomeOtherForChild,
            p_incomeMaintenance,
            p_incomeFormerPartner,
            p_incomeStudentAllowance,
            p_incomeOverseasPension,
            p_incomeSuper,
            p_incomeEstate,
            p_incomeTrusts,
            p_incomeOther,
            p_jointPartnerWhere1 ,
            p_jointPartnerWith1 ,
            p_jointPartnerYou1 ,
            p_jointPartnerFreq1 ,
            p_jointPartnerWhere2 ,
            p_jointPartnerWith2 ,
            p_jointPartnerYou2 ,
            p_jointPartnerFreq2 ,
            p_jointPartnerWhere3 ,
            p_jointPartnerWith3 ,
            p_jointPartnerYou3 ,
            p_jointPartnerFreq3 ,
            p_jointPartnerWhere4 ,
            p_jointPartnerWith4 ,
            p_jointPartnerYou4 ,
            p_jointPartnerFreq4 ,
            p_jointPartnerWhere5 ,
            p_jointPartnerWith5 ,
            p_jointPartnerYou5 ,
            p_jointPartnerFreq5 ,
            p_other52weeksType1 ,
            p_other52weeksWhere1 ,
            p_other52weeksValue1 ,
            p_other52weeksType2 ,
            p_other52weeksWhere2 ,
            p_other52weeksValue2 ,
            p_other52weeksType3 ,
            p_other52weeksWhere3 ,
            p_other52weeksValue3 ,
            p_other52weeksType4 ,
            p_other52weeksWhere4 ,
            p_other52weeksValue4 ,
            p_other52weeksType5 ,
            p_other52weeksWhere5 ,
            p_other52weeksValue5,
            childcareSubsidy,
            oscarSubsidy,
            paidParentalLeave,
            Child_ece_Id_1,
            Child_ece_CCS_OSCAR_1,
            Child_ece_Org_Name_1,
            Child_ece_Email_1,
            Child_ece_Telephone_1,
            Child_ece_Mobile_1,
            Child_ece_Twenty_Hrs_1,
            Child_ece_HoldingAbsenceFee_1,
            Child_ece_hrs_care_1,
            Child_ece_hourly_fee_1,
            Child_ece_total_weekly_fee_1,
            Child_ece_Id_2,
            Child_ece_CCS_OSCAR_2,
            Child_ece_Org_Name_2,
            Child_ece_Email_2,
            Child_ece_Telephone_2,
            Child_ece_Mobile_2,
            Child_ece_Twenty_Hrs_2,
            Child_ece_HoldingAbsenceFee_2,
            Child_ece_hrs_care_2,
            Child_ece_hourly_fee_2,
            Child_ece_total_weekly_fee_2,
                    
        
        } = this.state;
        const values = { 
            clientNumber,
            title,
            firstName,
            lastName,
            nameOnBirthCert,
            firstNameNOTsame,
            lastNameNOTsame,
            knownByOtherName,
            nameOtherKnown,
            nameToCall,
            namePrefer,
            dob,
            gender,
            irdNumber,
            flatHouseNum,
            streetName,
            suburb,
            townCity,
            mailaddress,
            mailingAddr,
            homePhone,
            mobPhone,
            otherPhone,
            email,
            getEmails,
            ethnicGroup,
            ethnicity,
            usuallyNZ,
            residenceStatus,
            dateGranted,
            dateArrived,
            countryOfBirth,
            ccAssistanceReason,
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
            employerFaxEmail,
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
            p_clientNumber,
            p_title,
            p_firstName,
            p_lastName,
            p_firstNameNOTsame,
            p_lastNameNOTsame,
            p_nameOtherKnown,
            p_namePrefer,
            p_dob,
            p_gender,
            p_irdNumber,
            p_flatHouseNum,
            p_streetName,
            p_suburb,
            p_townCity,
            p_mailingAddr,
            p_homePhone,
            p_mobPhone,
            p_otherPhone,
            p_getEmails,
            p_ethnicity,
            p_usuallyNZ,
            p_residenceStatus,
            p_dateGranted,
            p_dateArrived,
            p_countryOfBirth,
            p_ccAssistanceReason,
            p_isWorking,
            p_employerName,
            p_employerAddr,
            p_employerPhone,
            p_employerFaxEmail,
            p_hoursPerWeek,
            p_hoursTravel,
            p_isWorkRelatedCourse,
            p_trainingOrgName,
            p_trainingOrgAddr,
            p_trainingOrgPhone,
            p_trainingOrgFaxEmail,
            p_employerFaxEmail,
            p_nameOfCourse,
            p_isNZQA,
            p_courseStartDate,
            p_courseEndDate,
            p_courseHoursPerWeek,
            p_otherStudyHoursPerWeek,
            p_hoursTravelCCtoCourse,
            p_isArrangedActivities,
            p_activityType,
            p_hoursActivity,
            p_hoursTravelCCtoActivity,
            p_applyForMedicalReasons,
            p_medicalDurationExpected,
            p_hoursPerWeekNeedCC,
            p_incomeWagesSalary,
            p_incomePPL,
            p_terminationPay,
            p_redundancyPay,
            p_acc,
            p_incomeInsurance,
            p_incomeBusiness,
            p_incomeSelfEmpContract,
            p_incomeInterest,
            p_incomeDividends,
            p_incomeRental,
            p_incomeFlatmates,
            p_incomeChildSup,
            p_incomeOtherForChild,
            p_incomeMaintenance,
            p_incomeFormerPartner,
            p_incomeStudentAllowance,
            p_incomeOverseasPension,
            p_incomeSuper,
            p_incomeEstate,
            p_incomeTrusts,
            p_incomeOther,
            p_jointPartnerWhere1 ,
            p_jointPartnerWith1 ,
            p_jointPartnerYou1 ,
            p_jointPartnerFreq1 ,
            p_jointPartnerWhere2 ,
            p_jointPartnerWith2 ,
            p_jointPartnerYou2 ,
            p_jointPartnerFreq2 ,
            p_jointPartnerWhere3 ,
            p_jointPartnerWith3 ,
            p_jointPartnerYou3 ,
            p_jointPartnerFreq3 ,
            p_jointPartnerWhere4 ,
            p_jointPartnerWith4 ,
            p_jointPartnerYou4 ,
            p_jointPartnerFreq4 ,
            p_jointPartnerWhere5 ,
            p_jointPartnerWith5 ,
            p_jointPartnerYou5 ,
            p_jointPartnerFreq5 ,
            p_other52weeksType1 ,
            p_other52weeksWhere1 ,
            p_other52weeksValue1 ,
            p_other52weeksType2 ,
            p_other52weeksWhere2 ,
            p_other52weeksValue2 ,
            p_other52weeksType3 ,
            p_other52weeksWhere3 ,
            p_other52weeksValue3 ,
            p_other52weeksType4 ,
            p_other52weeksWhere4 ,
            p_other52weeksValue4 ,
            p_other52weeksType5 ,
            p_other52weeksWhere5 ,
            p_other52weeksValue5,
            childcareSubsidy,
            oscarSubsidy,
            paidParentalLeave,
            Child_ece_Id_1,
            Child_ece_CCS_OSCAR_1,
            Child_ece_Org_Name_1,
            Child_ece_Email_1,
            Child_ece_Telephone_1,
            Child_ece_Mobile_1,
            Child_ece_Twenty_Hrs_1,
            Child_ece_HoldingAbsenceFee_1,
            Child_ece_hrs_care_1,
            Child_ece_hourly_fee_1,
            Child_ece_total_weekly_fee_1,
            Child_ece_Id_2,
            Child_ece_CCS_OSCAR_2,
            Child_ece_Org_Name_2,
            Child_ece_Email_2,
            Child_ece_Telephone_2,
            Child_ece_Mobile_2,
            Child_ece_Twenty_Hrs_2,
            Child_ece_HoldingAbsenceFee_2,
            Child_ece_hrs_care_2,
            Child_ece_hourly_fee_2,
            Child_ece_total_weekly_fee_2,     
        } 
        
            switch(step) {
                case 1:
                    return(
                        <FormChecklist
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );
                case 2:
                    return(
                        <FormUserDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} 
                        />
                    );
                case 3:
                    return(
                        <FormPersonalDetails
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
                    case 5:
                        return(
                            <FormDependentChildren
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values} 
                            />
                        );
                        
                    case 6:
                            return(
                                <FormPartnerDetails 
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values} 
                                />
                            );
                    case 7:
                        return(
                            <Confirm
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                editStepSection1={this.editStepSection1}
                                editStepSection2={this.editStepSection2}
                                editStepSection3={this.editStepSection3}
                                editStepSection4={this.editStepSection4}
                                handleChange={this.handleChange}
                                values={values} 
                            />
                        );

                     case 8:
                            return(
                                <Confirmation
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    editStepSection1={this.editStepSection1}
                                    editStepSection2={this.editStepSection2}
                                    editStepSection3={this.editStepSection3}
                                    editStepSection4={this.editStepSection4}
                                    handleChange={this.handleChange}
                                    values={values} 
                                />
                            );

                    return <Success />; 
            }
    }
}
 
export default UserForm;