import { useState } from 'react';
import { Alert, Button, Grid, TextField } from '../../components';
import { create } from '../../utils/list';

const Form = () => {

    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [visibleError, setVisibleError] = useState(false);

    const handleClick = () => {
        let nome = document.getElementById('nome');
        let preco = document.getElementById('preco');
        if (nome.value && preco.value) {
            create(nome.value, preco.value);
            nome.value = '';
            preco.value = '';
            showAlert(true);
        } else {
            showAlert(false);
        }
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

            <div className="flex-container" id='top'>
                <div className="flex-item">
                    {visibleSuccess &&
                        (<Alert severity="success" variant="outlined" id="success" >
                            Produto cadastrado com sucesso!
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
                    <h1 className='loginTitle'>Cadastro de Produtos</h1>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" >
                <Grid item id="form-input-container" >
                    <TextField label="Nome" id="nome" fullWidth />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" >
                <Grid item id="form-input-container" >
                    <TextField decimal id="preco" />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} container justifyContent="center" >
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleClick} >Cadastrar</Button>
                </Grid>
            </Grid>
            <div className="flex-container" id='bottom' >
                <div className="flex-item">
                    {visibleSuccess &&
                        (<Alert severity="success" variant="outlined" id="success" >
                            Produto cadastrado com sucesso!
                        </Alert>)
                    }

                    {visibleError &&
                        (<Alert severity="error" variant="outlined" id="error" >
                            Preencha todos os campos!
                        </Alert>)
                    }
                </div>
            </div>
        </Grid>
    );
}

export default Form;