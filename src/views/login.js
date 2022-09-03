import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Button } from '@mui/material';

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <Container>
            <h2>This is my login page</h2>
            <TextField label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                    console.log(e)
                    setEmail(e.target.value)
                }} />
            <br />
            <br />

            <TextField label="Password"
                variant="filled"
                value={password}
                onChange={(e) => {
                    console.log(e)
                    setPassword(e.target.value)
                }} />

            <br />
            <br />

            <Button variant="contained" onClick={() => {
                console.log(email)
                console.log(password)

            }}>Submit</Button>
        </Container>
    )
}