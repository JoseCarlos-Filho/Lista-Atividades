import * as Component from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item
}
export const ListItem = ({ item } : Props) => {
    return (
        <Component.Container>
            {/* <div>Olá Mundo</div> */}
            {/* { item.name } */}
            <input type="checkbox" />
            <label>{ item.name }</label>
        </Component.Container>
    );
}