import styled from 'styled-components';


// Propriedade Booleana para manipulação do text-decoration na hora de selecionar a tarefa realizada ou não.
type ContainerProps = {
    done: boolean;
}

// Observação os elementos no caso Tags estão dentro do Container
// A estilização esta sendo feita dentro do Container, Logo todas as tags dentro do Container
// podem ser chamadas e estilizadas.

// Propriedade { done } é passada dentro de uma função com seu respectivo tipo : ContainerProps
export const Container = styled.div(({ done }: ContainerProps) =>( 

`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    box-shadow: 0 0 10px gray;

    input { 
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }


    label { 
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }    
`
));
