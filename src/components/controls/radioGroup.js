import React from 'react';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';


export default function RadioGroup(props) {

    const {name, label, value, onchange, items} = props;

  return (
        <FormControl>
            <FormLabel> {label} </FormLabel>
                <MuiRadioGroup row
                    name={name}
                    defaultValue={value}
                    onChange={onchange}>
                    {
                        items.map(
                            (data, index) => (
                                <FormControlLabel key={data.id} value={data.id} control={<Radio/>} label={data.title} /> 
                            )
                        )
                    }
                </MuiRadioGroup>
        </FormControl> 
  )
}
