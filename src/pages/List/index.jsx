import { list } from '../../utils/list';

const List = () => {
    return (
        <div className='list-container' >
            <h1>Lista de Itens</h1>
            <ul className='list-ul' >
                {list.map(item => (
                    <li key={item.id} className='list-li' >
                        {item.name} - R$ {item.preco}
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default List;