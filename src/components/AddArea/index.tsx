import { useState, KeyboardEvent } from 'react';
import * as Componente from './styles';

// Prop com a função onEnter que recebe um texto e não retorna nenhum valor "void"
type Props = {
    onEnter: (taskName: string) => void
}

// Passa a função onEnter: Props como paramétro para a função AddArea
export const AddArea = ({ onEnter }: Props) => {

    // Pega valores de texto no Input e armasena no State
    const [inputText, setInputText] = useState('');

    // Pega evento do teclado
    const handleKeyUp = (e: KeyboardEvent) => {
        // console.log(e.code);
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <Componente.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione a tarefa desejada"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Componente.Container>
    )
}