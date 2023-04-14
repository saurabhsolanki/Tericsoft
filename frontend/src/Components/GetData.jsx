import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataDelete, dataGet } from '../Redux/appReducer/action'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import UpdataData from './UpdataData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const GetData = () => {
    const {data}=useSelector((store)=>store.auth)
    const dispatch=useDispatch()

    const handleDelete=(id)=>{
      if(window.confirm("Are you sure that you want to Delete that Data ?")){
        dispatch(dataDelete(id))
      }
    }

    useEffect(()=>{
        dispatch(dataGet())
    },[])
  return (
    <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="centre">Email</StyledTableCell>
            <StyledTableCell align="centre">Phone</StyledTableCell>
            <StyledTableCell align="centre">Gender</StyledTableCell>
            <StyledTableCell align="centre">Hobbies</StyledTableCell>
            <StyledTableCell align="centre">DOB (DD/MM/YY)</StyledTableCell>
            <StyledTableCell align="centre">Edit</StyledTableCell>
            <StyledTableCell align="centre">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="centre">{row.email}</StyledTableCell>
              <StyledTableCell align="centre">{row.phone}</StyledTableCell>
              <StyledTableCell align="centre">{row.gender}</StyledTableCell>
              <StyledTableCell align="centre">{row.hobbies==="on"?"True":"False"}</StyledTableCell>
              <StyledTableCell align="centre">{row.dob}</StyledTableCell>
              <StyledTableCell align="centre"> <UpdataData item={row}/> </StyledTableCell>
              <StyledTableCell align="centre"><Button variant="contained" color="error" onClick={()=>handleDelete(row.id)}>Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default GetData
