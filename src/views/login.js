import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

export function Login() {
    return (
        <Container>
            <h2>This is my login page</h2>
            <TextField label="Email" variant="outlined" />
            <br />
            <br />

            <TextField label="Password" variant="filled" />
        </Container>
    )
}