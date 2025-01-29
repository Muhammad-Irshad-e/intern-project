import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'

function Register() {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{textDecoration:'Underline'}}>Register</h1>
      <br />
      <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
        <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
        
      </RadioGroup>
    </FormControl>
<br />
<TextField id="standard-basic" label="Email" variant="outlined" />
<br /> <br />
<TextField id="standard-basic" label="Name" variant="outlined" />
<br /> <br />
<TextField id="standard-basic" label="Password" variant="outlined" />
<br /> 
<FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
       
      </RadioGroup>
    </FormControl>
    <br /> <br />
    <Button variant="contained">submit</Button>
    </div>
  )
}

export default Register