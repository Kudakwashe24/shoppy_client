import TextField from '@mui/material/TextField';

export function Login() {
    return (
        <div>
            <h2>This is my login page</h2>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </div>
    )
}