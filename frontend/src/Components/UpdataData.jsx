import { Button, Drawer } from '@mui/material'
import React,{useState} from 'react'
import {Box, TextField, styled, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useDispatch } from 'react-redux';
import { dataPost, dataUpdate } from '../Redux/appReducer/action';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const Comp = styled(Box)`
    width: 400px;
    margin:auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Image = styled(`img`)({
    width:150,
    height:100,
    display:`flex`,
    margin:`auto`
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex:1;
    flex-direction:column;
    &> div, &> button, &>p{
        margin-top:20px;
    }
`
const LoginBtn = styled(Button)`
    text-transform : none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const SignupBtn = styled(Button)`
    text-transform : none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


const UpdataData = ({item}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [data, setdata] = useState({...item})
  const [error,setError] = useState('')
  const [value, setValue] = React.useState(null);
  const dispatch=useDispatch()

  const onInputChange = (e) =>{
      setdata({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    let obj={
      name:data.name,
      email:data.email,
      phone:data.phone,
      gender:data.gender,
      dob:`${value.$D}-${value.$M+1}-${value.$y}`,
      hobbies:data.hobbies
    }
    // console.log("update OBJ",obj,item.id)
    dispatch(dataUpdate(item.id,obj))
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <div>
       <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Edit</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
           {
            <Wrapper>
                <TextField variant="standard" value={data.name} name='name' onChange={(e)=> onInputChange(e)}  />
                <TextField variant="standard" name='email' onChange={(e)=> onInputChange(e)} value={data.email} />
                <TextField variant="standard" name='phone' onChange={(e)=> onInputChange(e)} value={data.phone} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                  </DemoContainer>
                </LocalizationProvider>
                <br />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    onChange={(e)=> onInputChange(e)}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
                <FormGroup>
                  <FormControlLabel control={<Checkbox name='hobbies' onChange={(e)=> onInputChange(e)}/>} label="Hobbies" />
                </FormGroup>
                {error && <Typography>{error}</Typography>}
                <SignupBtn onClick={handleSubmit}>Updata Data</SignupBtn>
            </Wrapper>
        }
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </div>
  )
}

export default UpdataData
