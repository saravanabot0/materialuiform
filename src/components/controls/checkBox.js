import { Checkbox as MuiCheckbox, FormControl, FormLabel, FormControlLabel } from '@material-ui/core';
import React from 'react';

export default function CheckBox(props) {

    const {name, label, value, onChange} = props;

    const convertToDefEventPara = (name, value) => ({
        target : {
            name, value
        }
    })

  return (
    <FormControl>
        <FormLabel component="legend">{label}</FormLabel>
        <FormControlLabel 
        control = {<MuiCheckbox
        row={true}
            name={name}
            color="primary"
            checked={value}
            onChange={e => onChange(convertToDefEventPara(name,e.target.checked))}
        />}
        label = "Yes"
        />
    </FormControl>
  )
}
