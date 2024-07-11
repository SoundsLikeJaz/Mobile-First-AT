import { Link, Outlet } from 'react-router-dom';
import { Fab } from '..';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {
    const [expandir, setExpandir] = useState(false);

    function handleExpandir() {
        setExpandir(!expandir);
    }

    return (
        <div className='navbar'>
            <nav>
                <ul className='menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/form'>Formulário</Link>
                    </li>
                    <li>
                        <Link to='/list'>Listagem</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
                {expandir
                    ?
                    (<Fab color="primary" aria-label="Navegação" id="expanded">
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/form'>Formulário</Link>
                            </li>
                            <li>
                                <Link to='/list'>Listagem</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <CloseIcon onClick={handleExpandir} />
                            </li>
                        </ul>
                    </Fab>)
                    :
                    (<Fab color="primary" aria-label="Mostrar Navegação" onClick={handleExpandir} id="minimized">
                        <AddIcon />
                    </Fab>)
                }
            </nav>
            <Outlet />
        </div>
    );
}

export default Navbar;