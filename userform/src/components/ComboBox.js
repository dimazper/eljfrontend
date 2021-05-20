import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox() {
  const { values, handleChange } = this.props;
  const [value, setValue] = React.useState(school[0]);
  const [inputValue, setInputValue] = React.useState('');

//   const [val,setVal]=useState({})
//   const handleClick = () => {
//     setVal(school[0]);//you pass any value from the array of top100Films
//    // set value in TextField from dropdown list
//  };

  return (
    <Autocomplete
          id="combo-box-demo"
          options={school}
          getOptionLabel={(option) => option.Child_ece_Org_Name_1}
          style={{ width: 300 }}
          value={value}
          //onChange={handleChange('Child_ece_Org_Name_1')}
          onChange={(event, newValue) => {
          setValue(newValue);
          handleChange('Child_ece_Org_Name_1')
          }}
      //onChange = {handleClick}
    //   onChange={(e, v) => {
    //     setOption(v);
    //   }}
          renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
          )}
    />
  );
}
    const school = [
            { Child_ece_Id_1: 55509, Child_ece_CCS_OSCAR_1: 234576548,
            Child_ece_Org_Name_1:'Best Start', Child_ece_Email_1:'kelly.abraham@best-start.org', Child_ece_Telephone_1: '068710841', Child_ece_Mobile_1: '068565798', 
            Child_ece_Twenty_Hrs_1:'Yes', Child_ece_HoldingAbsenceFee_1:'No'
            },
            { Child_ece_Id_1: 25384, Child_ece_CCS_OSCAR_1: 123654378,
            Child_ece_Org_Name_1:'Lollipops', Child_ece_Email_1:'michelle.cribb@eeg.co.nz', Child_ece_Telephone_1: '093651640', Child_ece_Mobile_1:'093778700', 
            Child_ece_Twenty_Hrs_1:'Yes', Child_ece_HoldingAbsenceFee_1:'No'
            },          
          ];



