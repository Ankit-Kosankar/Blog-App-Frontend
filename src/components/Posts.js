import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';

export default function Posts() {

    const paperStyle = {padding:'50px 20px',width:600, margin:'200px auto'}
    const [userName,setUserName] = useState('');
    const [password,setPassword]= useState('');
    const handlePost = (e)=>{
      e.preventDefault()
      const post = {userName,password}
      console.log(post);
      //ajax library
      fetch('http://localhost:8080/api/auth/signin',{
      method:"POST",
      Headers:{"Content-Type":"application/json"},
      body:JSON.stringify(post)
    }).then(()=>{
      console.log("Login Successfull")
    })
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}> User Login </h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label="Post Subject" variant="standard" fullWidth
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}/>
            <TextField id="standard-basic" label="Post Description" variant="standard"  fullWidth
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <Button variant="contained" color="secondary"onClick={handlePost}>Login</Button>
            </Box>
            {userName}
            {password}
        </Paper>
    </Container>
  );
}
