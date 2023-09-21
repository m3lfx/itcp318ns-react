import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate()
    const { email, password } = state;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = name => event => {

        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        console.log(event)

        event.preventDefault();

        axios.post(`http://localhost:4000/api/login`, { email, password }).then(response => {
            console.log(response);
            setOpen(false)
            // show sucess alert
            // alert(`Post titled ${response.data.data.title} is created`);
            return navigate("/");
        })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    return (
        <>
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item pr-3 pt-3 pb-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item pr-3 pt-3 pb-3">
                        <Link to="/create">Create</Link>
                    </li>
                    <li>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Login
                        </Button>
                    </li>
                </ul>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <form >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={handleChange('email')}
                            value={email}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="password"
                            type="password"
                            fullWidth
                            variant="standard"
                            onChange={handleChange('password')}
                            value={password}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Login</Button>

                </DialogActions>
            </Dialog>
        </>
    )
}

export default Nav