import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [cant, setCant] = useState(1);

    return (
        <div className='counter'>
            <Button onClick={
                () => {
                    setCant(cant - 1);
                }}
                disabled={cant <= initial}
            >
                -
            </Button>
            <span className='cantidad'>{cant}</span>
            <Button onClick={() => {
                setCant(cant + 1);

            }}
                disabled={cant === stock}>
                +
            </Button>
            <Button variant='success' onClick={() => onAdd(cant)}>Agregar al Carrito</Button>
        </div>

    )
}

export default ItemCount