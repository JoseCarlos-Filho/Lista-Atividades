// import { useState } from 'react';
import * as Component from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item
    onChange: (id: number, done: boolean) => void
}
export const ListItem = ({ item, onChange } : Props) => {

    // const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Component.Container done={item.done}>
            {/* <div>Olá Mundo</div> */}
            {/* { item.name } */}
            <input 
                type="checkbox" 
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}    
            />
            <button
                className="btn-Excluir" 
                >❌</button>
            <label>{ item.name }</label>
            
        </Component.Container>
    );
}