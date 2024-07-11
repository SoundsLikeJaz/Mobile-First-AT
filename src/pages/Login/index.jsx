import { useState } from 'react';
import { Alert, Button, Grid, TextField } from '../../components';
import { fakeLogin } from '../../utils/login';

const Login = () => {

    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [visibleError, setVisibleError] = useState(false);

    const handleClick = () => {
        let email = document.getElementById('email');
        let senha = document.getElementById('senha');

        showAlert(fakeLogin(email.value, senha.value));
    }

    const showAlert = (estado) => {
        if (estado) {
            setVisibleSuccess(true);
            setTimeout(() => {
                setVisibleSuccess(false);
            }, 3000);
        } else {
            setVisibleError(true);
            setTimeout(() => {
                setVisibleError(false);
            }, 3000);
        }
    }

    return (
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} >
            <div className="flex-container">
                <div className="flex-item">
                    {visibleSuccess &&
                        (<Alert severity="success" variant="outlined" id="success" >
                            Login efetuado com sucesso!
                        </Alert>)
                    }

                    {visibleError &&
                        (<Alert severity="error" variant="outlined" id="error" >
                            Preencha todos os campos!
                        </Alert>)
                    }
                </div>
            </div>
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" >
                <Grid item >
                    <h1 className='loginTitle'>Login</h1>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" >
                <Grid item>
                    <TextField label="Email" id='email' />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" >
                <Grid item>
                    <TextField label="Senha" type="password" id='senha' />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" >
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleClick} >Entrar</Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Login;