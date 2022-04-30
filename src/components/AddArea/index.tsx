import * as Componente from './styles';

export const AddArea = () => {
    return (
        <Componente.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione a tarefa desejada">
            </input>
        </Componente.Container>
    )
}