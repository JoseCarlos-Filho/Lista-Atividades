import { useState } from 'react';
import * as Component from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item
}
export const ListItem = ({ item } : Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Component.Container>
            {/* <div>Olá Mundo</div> */}
            {/* { item.name } */}
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}    
            />
            <label>{ item.name }</label>
        </Component.Container>
    );
}