import styled from 'styled-components';

// Observação os elementos no caso Tags estão dentro do Container
// A estilização esta sendo feita dentro do Container, Logo todas as tags dentro do Container
// podem ser chamadas e estilizadas.
export const Container = styled.div `
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
    }

`;
