import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup(props) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{props.titulo}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value={props.valor1}  control={<Radio />} label={props.valor1} />
        <FormControlLabel value={props.valor2}  control={<Radio />} label={props.valor2} />
        {props.valor3 && <FormControlLabel value={props.valor3} control={<Radio />} label={props.valor3} />}
  
      </RadioGroup>
    </FormControl>  
  );
}
