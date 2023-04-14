import React,{useState} from 'react'
import {Box, Button, TextField, styled, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useDispatch } from 'react-redux';
import { dataPost } from '../Redux/appReducer/action';
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
const InitialValues = {
    name:"",
    email:"",
    phone:"",
    gender:"",
    hobbies:"",
}


const AddData = () => {
    const [data, setdata] = useState(InitialValues)
    const [value, setValue] = React.useState(null);
   
    const dispatch=useDispatch()

    const onInputChange = (e) =>{
        console.log(e.target.value);
        setdata({...data, [e.target.name]: e.target.value})
    }


    const handleSubmit=(e)=>{
      e.preventDefault()
      if(data.name==="" || data.email==="" || data.phone==="" || data.gender==="" || value==null){
        return alert("please fill all the details")
      }
      let obj={
        name:data.name,
        email:data.email,
        phone:data.phone,
        gender:data.gender,
        dob:`${value.$D}-${value.$M+1}-${value.$y}`,
        hobbies:data.hobbies
      }
      console.log(obj,value)
      dispatch(dataPost(obj))
    }

    const imgUrl = "https://tericsoft.com/wp-content/uploads/2021/08/Web-Logo-371x90px.png"

  return (
    <Comp>.
        <Image src={imgUrl} id='logoimg' alt="login" ></Image>
        {
            <Wrapper>
                <TextField variant="standard" name='name' onChange={(e)=> onInputChange(e)} label="Enter Name" />
                <TextField variant="standard" name='email' onChange={(e)=> onInputChange(e)} label="Enter email" />
                <TextField variant="standard" name='phone' onChange={(e)=> onInputChange(e)} label="Enter Phone" />
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
                <Button variant="contained" onClick={handleSubmit}>ADD DATA</Button>
            </Wrapper>
        }
    </Comp>

  )
}

export default AddData
