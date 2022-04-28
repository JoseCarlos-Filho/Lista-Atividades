// importa todos os componentes, poderia ser feito da seguinte forma:
// import { Container } from './App.styles';
// Dentro da constante App poderia ser chamado: <Container></Container>
// isso facilita quando se tem muitos componentes em uma tela.
import * as Componente from './App.styles';

const App = () => {
  return (
    <Componente.Container>
      <Componente.Area>
        <Componente.Header>
          Lista de Tarefas
        </Componente.Header>
      </Componente.Area>
    </Componente.Container>
  );
}

export default App;